import { Card, InputGroup, SelectGroup, ModalFade, PaginateLinks, Table } from '@/Components';
import { Authenticated } from '@/Layouts';
import { changeCurrencyValue, formatter } from '@/lib/idrFormatter';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ regencyBudgets, years, provinces, request }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, clearErrors } = useForm({ budget: 0, });
    const [selectedItem, setSelectedItem] = useState([]);
    const [regencies, setRegencies] = useState([]);
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let { year_id, regency_id, budget, regency } = regencyBudgets.data.find(item => item.id == selectedItem[0] || 0);
        reset();
        setData({ year_id, regency_id, budget, province_id : regency?.province?.id });
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
    };
    const change = e => e?.target?.type == 'checkbox' ? setData(e.target.name, e.target.checked) : setData(e.target.name, e.target.value);
    const submitForm = e => {
        e.preventDefault();
        switch (formState) {
            case 'create': post(route('regency-budgets.store')); break;
            case 'edit': patch(route('regency-budgets.update', selectedItem[0])); break;
            case 'delete': _delete(route('regency-budgets.destroy', selectedItem[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('regency-budgets.destroy', selectedItem[0]));
                setSelectedItem([]);
            };
        });
    };
    const getRegencies = useCallback(async (provinceId) => {
        try {
            let { data } = await axios.get(route('regencies', provinceId));
            setRegencies(data);
        } catch (e) {
            setRegencies([]);
        }
    }, []);
    useEffect(() => {
        if (data.province_id) {
            if (formState == 'create') {
                setData('regency_id', '');
            }
            setRegencies([]);
            getRegencies(data.province_id);
        }
    }, [data.province_id]);
    const changeQuery = e => {
        const query = e.target.value;
        setQuery(query);
        searchData(query);
    };
    const searchData = useCallback(_.debounce(query => {
        Inertia.reload({ data: { query, page: 1 }, only: ['regencyBudgets'] });
    }, 300), []);
    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['regencyBudgets'], replace: true });
    };
    return (
        <Card title="Anggaran Kabupaten / Kota">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="mb-3 row flex-grow-1">
                    <div className="col-md-2 mb-3">
                        <select className="form-select" aria-label="per Halaman" value={ perPage } onChange={ changePerPage }>
                            <option>10</option>
                            <option>25</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="search-work-unit">
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                            <input className="form-control" type="text" placeholder="Pencarian..." aria-label="Pencarian..." aria-describedby="search-work-unit" value={ query } onChange={ changeQuery } />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-icon btn-outline-primary me-1" onClick={ create }><i className="fas fa-plus"></i></button>
                    <button className="btn btn-icon btn-outline-warning me-1" onClick={ edit } disabled={ selectedItem.length == 0 || selectedItem.length > 1 }><i className="fas fa-pen"></i></button>
                    <button className="btn btn-icon btn-outline-secondary me-1" onClick={ destroy } disabled={ selectedItem.length == 0 }><i className="fas fa-trash"></i></button>
                </div>
            </div>
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} Anggaran Kabupaten / Kota` } ref={ modal }>
                <form onSubmit={ submitForm }>
                    <SelectGroup label="Tahun" name="year_id" value={ data.year_id || '' } data={ years.map(item => ({ value: item.id, label: item.year })) } onChange={ change } />
                    <SelectGroup label="Provinsi" name="province_id" value={ data.province_id || '' } data={ provinces.map(item => ({ value: item.id, label: item.name })) } onChange={ change } />
                    <SelectGroup label="Kabupaten/Kota" name="regency_id" value={ data.regency_id || '' } data={ regencies.map(item => ({ value: item.id, label: item.name })) } onChange={ change } disabled={ regencies.length == 0 || !data.province_id } />
                    <InputGroup label="Jumlah Anggaran" value={ formatter.format(data.budget) } name="budget" onChange={ e => changeCurrencyValue(e, change) } />
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th>{ regencyBudgets.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedItem(!e.target.checked ? [] : regencyBudgets.data.map(item => item.id)) } checked={ regencyBudgets.data.length == selectedItem.length } /> }</th>
                        <th className="text-nowrap">Tahun</th>
                        <th className="text-nowrap">Provinsi</th>
                        <th className="text-nowrap">Kabupaten/Kota</th>
                        <th className="text-nowrap">Jumlah Anggaran</th>
                    </tr>
                </thead>
                <tbody>
                    { regencyBudgets.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { regencyBudgets.data.map(regencyBudget => {
                        const selected = selectedItem.find(item => item == regencyBudget.id ? true : false);
                        return (
                            <tr key={ regencyBudget.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedItem(selectedItem => selected ? selectedItem.filter(item => item != regencyBudget.id) : [...selectedItem, regencyBudget.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_work_unit" id={ `#selected_work_unit_${regencyBudget.code}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ regencyBudget?.year?.year }</td>
                                <td className="text-nowrap">{ regencyBudget?.regency?.province?.name }</td>
                                <td className="text-nowrap">{ regencyBudget?.regency?.name }</td>
                                <td className="text-nowrap">{ formatter.format(regencyBudget.budget) }</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ regencyBudgets.links } only={ ['regencyBudgets'] } />

        </Card>
    );
}



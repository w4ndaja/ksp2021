import { Card, InputGroup, SelectGroup, ModalFade, PaginateLinks, Table } from '@/Components';
import { Authenticated } from '@/Layouts';
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ workUnits, workingAreas, provinces, request }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, clearErrors } = useForm({
        'name': '',
        'code': '',
        'working_area_id': null,
        'province_id': '',
        'city_id': '',
        'distric_id': '',
    });
    const [selectedWorkUnits, setSelectedWorkUnit] = useState([]);
    const [cities, setCities] = useState([]);
    const [districs, setDistrics] = useState([]);
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let { name, code, working_area_id, province_id, city_id, distric_id, } = workUnits.data.find(item => item.id == selectedWorkUnits[0] || 0);
        reset();
        setData({ name, code, working_area_id, province_id, city_id, distric_id, });
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
        Inertia.reload({ data: { province_id, city_id }, only: ['cities', 'districs'], });
    };
    const change = e => e?.target?.type == 'checkbox' ? setData(e.target.name, e.target.checked) : setData(e.target.name, e.target.value);
    const submitWorkUnit = e => {
        e.preventDefault();
        switch (formState) {
            case 'create':
                post(route('opd-work-units.store'));
                break;
            case 'edit': patch(route('opd-work-units.update', selectedWorkUnits[0])); break;
            case 'delete': _delete(route('opd-work-units.destroy', selectedWorkUnits[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('opd-work-units.destroy', selectedWorkUnits[0]));
                setSelectedWorkUnit([]);
            };
        });
    };
    const getDistrics = useCallback(async (cityId) => {
        setDistrics([]);
        try {
            let { data } = await axios.get(route('districs', cityId));
            setDistrics(data);
        } catch (e) {
            setDistrics([]);
        }
    }, []);
    const getCities = useCallback(async (provinceId) => {
        try {
            let { data } = await axios.get(route('regencies', provinceId));
            setCities(data);
        } catch (e) {
            setCities([]);
        }
    }, []);
    useEffect(() => {
        if (data.province_id) {
            if (formState == 'create') {
                setData('city_id', '');
                setData('distric_id', '');
            }
            setCities([]);
            setDistrics([]);
            getCities(data.province_id);
        }
    }, [data.province_id]);
    useEffect(() => {
        if (data.city_id) getDistrics(data.city_id);
    }, [data.city_id]);
    const changeQuery = e => {
        const query = e.target.value;
        setQuery(query);
        searchData(query);
    };
    const searchData = useCallback(_.debounce(query => {
        Inertia.reload({ data: { query, page: 1 }, only: ['workUnits'] });
    }, 300), []);
    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['workUnits'], replace: true });
    };
    return (
        <Card title="Satuan Kerja (OPD)">
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
                    <button className="btn btn-icon btn-outline-warning me-1" onClick={ edit } disabled={ selectedWorkUnits.length == 0 || selectedWorkUnits.length > 1 }><i className="fas fa-pen"></i></button>
                    <button className="btn btn-icon btn-outline-secondary me-1" onClick={ destroy } disabled={ selectedWorkUnits.length == 0 }><i className="fas fa-trash"></i></button>
                </div>
            </div>
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} Satuan Kerja (OPD)` } ref={ modal }>
                <form onSubmit={ submitWorkUnit }>
                    <InputGroup label="Kode" value={ data.code } name="code" onChange={ change } />
                    <InputGroup label="Nama" value={ data.name } name="name" onChange={ change } />
                    <SelectGroup label="Wilayah Tugas" name="working_area_id" value={ data.working_area_id || '' } data={ workingAreas.map(item => ({ value: item.id, label: item.name })) } onChange={ change } />
                    <SelectGroup label="Provinsi" name="province_id" value={ data.province_id || '' } data={ provinces.map(item => ({ value: item.id, label: item.name })) } onChange={ change } />
                    <SelectGroup label="Kabupaten/Kota" name="city_id" value={ data.city_id || '' } data={ cities.map(item => ({ value: item.id, label: item.name })) } onChange={ change } disabled={ cities.length == 0 || !data.province_id } />
                    <SelectGroup label="Kecamatan" name="distric_id" value={ data.distric_id || '' } data={ districs.map(item => ({ value: item.id, label: item.name })) } onChange={ change } disabled={ districs.length == 0 || !data.city_id } />
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th>{ workUnits.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedWorkUnit(!e.target.checked ? [] : workUnits.data.map(item => item.id)) } checked={ workUnits.data.length == selectedWorkUnits.length } /> }</th>
                        <th>KODE</th>
                        <th>NAMA SATKER</th>
                        <th>KECAMATAN</th>
                        <th>ZONA</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { workUnits.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { workUnits.data.map(workUnit => {
                        const selected = selectedWorkUnits.find(item => item == workUnit.id ? true : false);
                        return (
                            <tr key={ workUnit.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedWorkUnit(selectedWorkUnits => selected ? selectedWorkUnits.filter(item => item != workUnit.id) : [...selectedWorkUnits, workUnit.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_work_unit" id={ `#selected_work_unit_${workUnit.code}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ workUnit.code }</td>
                                <td className="text-nowrap">{ workUnit.name }</td>
                                <td className="text-nowrap">{ workUnit.distric?.name }</td>
                                <td className="text-nowrap">{ workUnit.working_area?.name }</td>
                                <td className="text-nowrap"></td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ workUnits.links } only={ ['workUnits'] } />
        </Card>
    );
}

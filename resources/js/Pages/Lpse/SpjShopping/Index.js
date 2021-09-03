import { Card, InputGroup, SelectGroup, ModalFade, PaginateLinks, Table } from '@/Components';
import { Authenticated } from '@/Layouts';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React, { useCallback, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ spjShoppings, years, opdWorkUnits, request }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, clearErrors } = useForm();
    const [selectedItem, setSelectedItem] = useState([]);
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let { ...editForm } = spjShoppings.data.find(item => item.id == selectedItem[0] || 0);
        reset();
        setData(editForm);
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
        Inertia.reload({ only: ['spjShoppings'], });
    };
    const change = e => e?.target?.type == 'checkbox' ? setData(e.target.name, e.target.checked) : setData(e.target.name, e.target.value);
    const submitForm = e => {
        e.preventDefault();
        switch (formState) {
            case 'create':
                post(route('spj-shoppings.store'));
                break;
            case 'edit': patch(route('spj-shoppings.update', selectedItem[0])); break;
            case 'delete': _delete(route('spj-shoppings.destroy', selectedItem[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('spj-shoppings.destroy', selectedItem[0]));
                setSelectedItem([]);
            };
        });
    };
    const changeQuery = e => {
        const query = e.target.value;
        setQuery(query);
        searchData(query);
    };
    const searchData = useCallback(_.debounce(query => {
        Inertia.reload({ data: { query, page: 1 }, only: ['spjShoppings'] });
    }, 300), []);

    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['spjShoppings'], replace: true });
    };
    return (
        <Card title="SPJ Belanja">
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
                            <span className="input-group-text" id="search-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                            <input className="form-control" type="text" placeholder="Pencarian..." aria-label="Pencarian..." aria-describedby="search-items" value={ query } onChange={ changeQuery } />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-icon btn-outline-primary me-1" onClick={ create }><i className="fas fa-plus"></i></button>
                    <button className="btn btn-icon btn-outline-warning me-1" onClick={ edit } disabled={ selectedItem.length == 0 || selectedItem.length > 1 }><i className="fas fa-pen"></i></button>
                    <button className="btn btn-icon btn-outline-secondary me-1" onClick={ destroy } disabled={ selectedItem.length == 0 }><i className="fas fa-trash"></i></button>
                </div>
            </div>
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} SPJ Belanja` } ref={ modal }>
                <form onSubmit={ submitForm }>
                    <SelectGroup label="Tahun" data={years.map(y => ({label : y.year, value : y.id}))} value={ data.year_id } name="year_id" onChange={ change } />
                    <SelectGroup label="Satuan Kerja OPD" data={opdWorkUnits.map(owu => ({label : owu.name, value : owu.id}))} value={ data.opd_work_unit_id } name="opd_work_unit_id" onChange={ change } />
                    <InputGroup label="Nomor Kode Objek Belanja" value={ data.code } name="code" onChange={ change } />
                    <InputGroup label="Nama Objek Belanja" value={ data.name } name="name" onChange={ change } />
                    <InputGroup label="Nilai Objek Belanja" type="number" value={ data.value } name="value" onChange={ change } />
                    <InputGroup label="Status Objek Belanja" value={ data.status } name="status" onChange={ change } />
                    <InputGroup label="File Dokumen Objek Belanja" type="file" value={ data.file } name="file" onChange={ change } />
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th>{ spjShoppings.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedItem(!e.target.checked ? [] : spjShoppings.data.map(item => item.id)) } checked={ spjShoppings.data.length == selectedItem.length } /> }</th>
                        <th className="text-nowrap">Tahun</th>
                        <th className="text-nowrap">Satuan Kerja OPD</th>
                        <th className="text-nowrap">Nomor Kode Objek Belanja</th>
                        <th className="text-nowrap">Nama Objek Belanja</th>
                        <th className="text-nowrap">Nilai Objek Belanja</th>
                        <th className="text-nowrap">Status Objek Belanja</th>
                    </tr>
                </thead>
                <tbody>
                    { spjShoppings.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { spjShoppings.data.map(tableItem => {
                        const selected = selectedItem.find(item => item == tableItem.id ? true : false);
                        return (
                            <tr key={ tableItem.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedItem(selectedItem => selected ? selectedItem.filter(item => item != tableItem.id) : [...selectedItem, tableItem.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_row" id={ `#selected_row_${tableItem.id}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ tableItem.year?.year }</td>
                                <td className="text-nowrap">{ tableItem.opd_work_unit?.name }</td>
                                <td className="text-nowrap">{ tableItem.code }</td>
                                <td className="text-nowrap">{ tableItem.name }</td>
                                <td className="text-nowrap">{ tableItem.value }</td>
                                <td className="text-nowrap">{ tableItem.status }</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ spjShoppings.links } only={ ['spjShoppings'] } />
        </Card>
    );
}

import { Card, InputGroup, ModalFade, PaginateLinks, SelectGroup, Table } from '@/Components';
import { Authenticated } from '@/Layouts';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ users, opdWorkUnits, workingAreas, request }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, clearErrors } = useForm({
        name: '',
        address: '',
        phone: '',
        opd_work_unit_id: '',
        work_unit_id: '',
        level_id: '',
        working_area_id: '',
        email: '',
        password: '',
    });
    const [selectedItem, setSelectedItem] = useState([]);
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let {
            name,
            address,
            phone,
            email,
            opd_work_unit_id,
            work_unit_id,
            username,
            password,
            level_id,
            working_area_id,
        } = users.data.find(item => item.id == selectedItem[0] || 0);
        reset();
        setData({
            name,
            address,
            phone,
            email,
            opd_work_unit_id,
            work_unit_id,
            username,
            password,
            level_id,
            working_area_id,
        });
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
        Inertia.reload({ only: ['users'], });
    };
    const change = e => e?.target?.type == 'checkbox' ? setData(e.target.name, e.target.checked) : setData(e.target.name, e.target.value);
    const submitForm = e => {
        e.preventDefault();
        switch (formState) {
            case 'create':
                post(route('users.store'));
                break;
            case 'edit': patch(route('users.update', selectedItem[0])); break;
            case 'delete': _delete(route('users.destroy', selectedItem[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('users.destroy', selectedItem[0]));
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
        Inertia.reload({ data: { query, page: 1 }, only: ['users'] });
    }, 300), []);

    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['users'], replace: true });
    };
    const workUnits = useMemo(() => opdWorkUnits?.find(item => item?.id == data?.opd_work_unit_id)?.work_units || [], [data.opd_work_unit_id]);
    useEffect(() => {
        console.log(opdWorkUnits)
    }, [])
    return (
        <Card title="User">
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
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} Satuan Kerja` } ref={ modal }>
                <form onSubmit={ submitForm }>
                    <InputGroup label="Nama Lengkap" value={ data.name } name="name" onChange={ change } />
                    <InputGroup label="Alamat" value={ data.address } name="address" onChange={ change } />
                    <InputGroup label="Telepon" value={ data.phone } name="phone" onChange={ change } />
                    <InputGroup label="Email" value={ data.email } name="email" onChange={ change } />
                    <SelectGroup label="Opd" value={ data.opd_work_unit_id } name="opd_work_unit_id" onChange={ change } data={ opdWorkUnits.map(item => ({ label: item.name, value: item.id })) } />
                    <SelectGroup empty="Unit Kerja Kosong"  label="Unit Kerja" value={ data.work_unit_id } name="work_unit_id" onChange={ change } data={ workUnits.map(item => ({ label: item.name, value: item.id })) } disabled={ workUnits.length == 0 || !data.opd_work_unit_id } />
                    <InputGroup label="Username" value={ data.username } name="username" onChange={ change } />
                    <InputGroup label="Password" type="text" value={ data.password } name="password" onChange={ change } />
                    <InputGroup label="Konfirmasi Password" type="text" value={ data.password_confirmation } name="password_confirmation" onChange={ change } disabled={data.password == ''} />
                    <InputGroup label="Level" value={ data.level_id } name="level_id" onChange={ change } />
                    <SelectGroup empty="Wilayah Tugas Kosong"  label="Wilayah Tugas" value={ data.working_area_id } name="working_area_id" onChange={ change } data={ workingAreas.map(item => ({ label: item.name, value: item.id })) } disabled={ workUnits.length == 0 } />
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th>{ users.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedItem(!e.target.checked ? [] : users.data.map(item => item.id)) } checked={ users.data.length == selectedItem.length } /> }</th>
                        <th>Nama Lengkap</th>
                        <th>Alamat</th>
                        <th>Telepon</th>
                        <th>Email</th>
                        <th>Opd</th>
                        <th>Unit Kerja</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Level</th>
                        <th>Wilayah Tugas</th>
                    </tr>
                </thead>
                <tbody>
                    { users.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { users.data.map(tableItem => {
                        const selected = selectedItem.find(item => item == tableItem.id ? true : false);
                        return (
                            <tr key={ tableItem.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedItem(selectedItem => selected ? selectedItem.filter(item => item != tableItem.id) : [...selectedItem, tableItem.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_row" id={ `#selected_row_${tableItem.id}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ tableItem.name }</td>
                                <td className="text-nowrap">{ tableItem.address }</td>
                                <td className="text-nowrap">{ tableItem.phone }</td>
                                <td className="text-nowrap">{ tableItem.email }</td>
                                <td className="text-nowrap">{ tableItem.opd_work_unit_id }</td>
                                <td className="text-nowrap">{ tableItem.work_unit_id }</td>
                                <td className="text-nowrap">{ tableItem.username }</td>
                                <td className="text-nowrap">{ tableItem.password }</td>
                                <td className="text-nowrap">{ tableItem.level_id }</td>
                                <td className="text-nowrap">{ tableItem.working_area_id }</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ users.links } only={ ['users'] } />
        </Card>
    );
}

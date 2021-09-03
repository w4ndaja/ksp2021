import { Card, InputGroup, SelectGroup, ModalFade, PaginateLinks, Table } from '@/Components';
import { Authenticated } from '@/Layouts';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React, { useCallback, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ generals, request, years, opdWorkUnits }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, clearErrors } = useForm({
        year_id: '',
        opd_work_unit_id: '',
        leader_name: '',
        leader_id: '',
        leader_position: '',
        fo_name: '',
        fo_id: '',
        fo_position: '',
    });
    const [selectedItem, setSelectedItem] = useState([]);
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let { year } = generals.data.find(item => item.id == selectedItem[0] || 0);
        reset();
        setData({ year });
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
        Inertia.reload({ only: ['generals'], });
    };
    const change = e => e?.target?.type == 'checkbox' ? setData(e.target.name, e.target.checked) : setData(e.target.name, e.target.value);
    const submitForm = e => {
        e.preventDefault();
        switch (formState) {
            case 'create':
                post(route('generals.store'));
                break;
            case 'edit': patch(route('generals.update', selectedItem[0])); break;
            case 'delete': _delete(route('generals.destroy', selectedItem[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('generals.destroy', selectedItem[0]));
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
        Inertia.reload({ data: { query, page: 1 }, only: ['generals'] });
    }, 300), []);

    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['generals'], replace: true });
    };
    return (
        <Card title="Umum">
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
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} Data Umum` } ref={ modal }>
                <form onSubmit={ submitForm }>
                    <SelectGroup label="Tahun" value={ data.year_id } name="year_id" onChange={ change } data={ years.map(item => ({ value: item.id, label: item.year })) } />
                    <SelectGroup label="OPD" value={ data.opd_work_unit_id } name="opd_work_unit_id" onChange={ change } data={ opdWorkUnits.map(item => ({ value: item.id, label: item.name })) } />
                    <InputGroup label="Nama Pimpinan" value={ data.leader_name } name="leader_name" onChange={ change } />
                    <InputGroup label="NIP Pimpinan" value={ data.leader_id } name="leader_id" onChange={ change } />
                    <InputGroup label="Jabatan Pimpinan" value={ data.leader_position } name="leader_position" onChange={ change } />
                    <InputGroup label="Nama Pejabat Keuangan" value={ data.fo_name } name="fo_name" onChange={ change } />
                    <InputGroup label="NIP Pejabat Keuangan" value={ data.fo_id } name="fo_id" onChange={ change } />
                    <InputGroup label="Jabatan Pejabat Keuangan" value={ data.fo_position } name="fo_position" onChange={ change } />
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th>{ generals.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedItem(!e.target.checked ? [] : generals.data.map(item => item.id)) } checked={ generals.data.length == selectedItem.length } /> }</th>
                        <th>Tahun</th>
                        <th>OPD</th>
                        <th>Nama Pimpinan</th>
                        <th>NIP Pimpinan</th>
                        <th>Jabatan Pimpinan</th>
                        <th>Nama Pejabat Keuangan</th>
                        <th>NIP Pejabat Keuangan</th>
                        <th>Jabatan Pejabat Keuangan</th>
                    </tr>
                </thead>
                <tbody>
                    { generals.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { generals.data.map(tableItem => {
                        const selected = selectedItem.find(item => item == tableItem.id ? true : false);
                        return (
                            <tr key={ tableItem.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedItem(selectedItem => selected ? selectedItem.filter(item => item != tableItem.id) : [...selectedItem, tableItem.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_row" id={ `#selected_row_${tableItem.id}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ tableItem.year?.year }</td>
                                <td className="text-nowrap">{ tableItem?.opd_work_unit?.name }</td>
                                <td className="text-nowrap">{ tableItem.leader_name }</td>
                                <td className="text-nowrap">{ tableItem.leader_id }</td>
                                <td className="text-nowrap">{ tableItem.leader_position }</td>
                                <td className="text-nowrap">{ tableItem.fo_name }</td>
                                <td className="text-nowrap">{ tableItem.fo_id }</td>
                                <td className="text-nowrap">{ tableItem.fo_position }</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ generals.links } only={ ['generals'] } />
        </Card>
    );
}

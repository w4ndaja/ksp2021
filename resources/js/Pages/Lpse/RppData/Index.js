import { Card, InputGroup, SelectGroup, ModalFade, PaginateLinks, Table, TextArea, InputFile, ToastContainer } from '@/Components';
import { Authenticated } from '@/Layouts';
import { changeCurrencyValue, formatter } from '@/lib/idrFormatter';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React, { useCallback, useRef, useState } from 'react';
import swal from 'sweetalert';
Index.layout = children => <Authenticated children={ children } />;
export default function Index({ rppData, years, request }) {
    const [perPage, setPerPage] = useState(request?.per_page || 10);
    const [query, setQuery] = useState(request?.query || '');
    const modal = useRef();
    const [formState, setFormState] = useState('create');
    const { data, setData, post, patch, delete: _delete, reset, progress, clearErrors } = useForm({ year_id: '', letter_no: '', letter_date: '', attachment: '', regarding: '', to: '', activity_number: '', rup_code: '', implement_method: '', pa_name: '', pa_nip: '', pa_position: '', pa_sk: '', pa_cp: '', job_location: '', hps_value: '', fund_source: '', job_type: '', contract_type: '', support_count: '', duration_day: '', duration_week: '', duration_month: '', duration_year: '', start_date: '', end_date: '', framework_attachment: '', images_attachment: '', hps_value_attachment: '', contract_plan_attachment: '', copy_of_dpa_attachment: '', pptk_sk_attachment: '', rup_attachment: '', description: '', });
    const [selectedItem, setSelectedItem] = useState([]);
    const toastRef = useRef();
    const create = e => {
        reset();
        Inertia.reload();
        setFormState('create');
        modal.current.show();
    };
    const edit = e => {
        let formEdit = rppData.data.find(item => item.id == selectedItem[0] || 0);
        reset();
        setData(formEdit);
        setFormState('edit');
        Inertia.reload();
        modal.current.show();
        Inertia.reload({ only: ['rppData'], });
    };
    const change = e => {
        let value = null;
        switch (e.target.type) {
            case 'checkbox': value = e.target.checked; break;
            case 'file': value = e.target.files.length > 1 ? e.target.files : e.target.files[0]; break;
            default: value = e.target.value;
        }
        setData(e.target.name, value);
    };
    const submitForm = e => {
        e.preventDefault();
        switch (formState) {
            case 'create': post(route('rpp-data.store')); break;
            case 'edit': patch(route('rpp-data.update', selectedItem[0])); break;
            case 'delete': _delete(route('rpp-data.destroy', selectedItem[0])); break;
        }
    };
    const destroy = e => {
        e.preventDefault();
        swal('Peringatan', 'Apakah anda yakin ingin menghapus data terpilih?', 'warning', { buttons: ['Tidak', 'Ya'] }).then(e => {
            if (e) {
                _delete(route('rpp-data.destroy', selectedItem[0]));
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
        Inertia.reload({ data: { query, page: 1 }, only: ['rppData'] });
    }, 300), []);

    const changePerPage = e => {
        const per_page = e.target.value;
        setPerPage(per_page);
        Inertia.reload({ data: { per_page, page: 1 }, only: ['rppData'], replace: true });
    };

    return (
        <Card title="Pengadaan">
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
            <ToastContainer ref={ toastRef } />
            <ModalFade title={ `${formState == 'create' ? 'Tambah' : 'Edit'} Penyedia` } ref={ modal } size="xl">
                { progress && <progress value={ progress.percentage } max="100">
                    { progress.percentage }%
                </progress> }
                <form onSubmit={ submitForm }>
                    <div className="row">
                        <div className="col-12">
                            <Card className="mb-3">
                                <div className="row">
                                    <div className="col-md-4"><SelectGroup label="Tahun" data={ years.map(y => ({ label: y.year, value: y.id })) } value={ data.year_id } name="year_id" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Nomor Surat" value={ data.letter_no } name="letter_no" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Tanggal Surat" type="date" value={ data.letter_date } name="letter_date" onChange={ change } /></div>
                                    <div className="col-md-4"><InputFile label="Lampiran" placeholder="Pilih Dokumen" name="attachment" onChange={ change } multiple /></div>
                                    <div className="col-md-4"><InputGroup label="Perihal" value={ data.regarding } name="regarding" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Kepada" value={ data.to } name="to" onChange={ change } /></div>
                                    <div className="col-md-4"><SelectGroup label="Nomor Kegiatan" url={route('rup-packet.list')} value={ data.activity_number } name="activity_number" onChange={ change } /></div>
                                    <div className="col-md-4"><SelectGroup label="Kode RUP (Sirup)" url={route('sirup-packet.list')} value={ data.rup_code } name="rup_code" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Metode Pelaksanaan" value={ data.implement_method } name="implement_method" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Nama PA/KPA/PPK" value={ data.pa_name } name="pa_name" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="NIP PA/KPA/PPK" value={ data.pa_nip } name="pa_nip" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Jabatan PA/KPA/PPK" value={ data.pa_position } name="pa_position" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="SK" value={ data.pa_sk } name="pa_sk" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Kontak Person" value={ data.pa_cp } name="pa_cp" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Lokasi Pekerjaan" value={ data.job_location } name="job_location" onChange={ change } /></div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-md-4"><InputGroup label="HPS (Harga Perkiraan Sendiri)" value={ formatter.format(data.hps_value) } name="hps_value" onChange={ e => changeCurrencyValue(e, change) } /></div>
                                            <div className="col-md-4"><SelectGroup label="Sumber dana" data={ [{ label: 'APBN', value: 'APBN' }, { label: 'APBD', value: 'APBD' }] } value={ data.fund_source } name="fund_source" onChange={ change } /></div>
                                            <div className="col-md-4">
                                                <SelectGroup label="Jenis pekerjaan" data={ [
                                                    { value: 'Jasa', label: 'Jasa' },
                                                    { value: 'Pengadaan Barang', label: 'Pengadaan Barang' },
                                                    { value: 'Konstruksi', label: 'Konstruksi' }
                                                ] } value={ data.job_type } name="job_type" onChange={ change } />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4"><InputGroup label="Jenis Kontrak" value={ data.contract_type } name="contract_type" onChange={ change } /></div>
                                    <div className="col-md-4"><InputGroup label="Jumlah Dukungan" type="number" value={ data.support_count } name="support_count" onChange={ change } /></div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-8">
                            <Card title="Jangka Waktu Pelaksanaan" className="mb-3">
                                <div className="row">
                                    <div className="col-md-3"> <InputGroup label="Tahun" type="number" value={ data.duration_year } name="duration_year" onChange={ change } /> </div>
                                    <div className="col-md-3"> <InputGroup label="Bulan" type="number" value={ data.duration_month } name="duration_month" onChange={ change } /> </div>
                                    <div className="col-md-3"> <InputGroup label="Minggu" type="number" value={ data.duration_week } name="duration_week" onChange={ change } /> </div>
                                    <div className="col-md-3"> <InputGroup label="Hari" type="number" value={ data.duration_day } name="duration_day" onChange={ change } /> </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-3" bodyClass="pb-0">
                                <InputGroup label="Mulai tanggal" type="date" value={ data.start_date } name="start_date" onChange={ change } />
                                <InputGroup label="Tanggal Akhir" className="form-control" type="date" value={ data.end_date } name="end_date" onChange={ change } />
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card className="mb-3" title="Lampiran">
                                <div className="row">
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Kerangka Acuan Kerja" name="framework_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Spesifikasi Teknis dan Gambar" name="images_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Harga Perkiraan Sendiri (HPS)" name="hps_value_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Rencana Kontrak (RK)" name="contract_plan_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Copy DPA Kegiatan/ Paket Pekerjaan" name="copy_of_dpa_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="SK Penunjukan PPTK" name="pptk_sk_attachment" onChange={ change } /></div>
                                    <div className="col-md-3"><InputFile placeholder="Pilih Dokumen" label="Recana Umum Pengadaan (RUP)" name="rup_attachment" onChange={ change } /></div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-12">
                            <TextArea label="Keterangan" rows={ 3 } value={ data.description } name="description" onChange={ change } />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-falcon-primary me-1 mb-1">Simpan</button>
                </form>
            </ModalFade>
            <Table>
                <thead>
                    <tr>
                        <th className="text-nowrap">{ rppData.data.length > 0 && <input type="checkbox" title="Check ALL" onChange={ (e) => setSelectedItem(!e.target.checked ? [] : rppData.data.map(item => item.id)) } checked={ rppData.data.length == selectedItem.length } /> }</th>
                        <th className="text-nowrap">Tahun</th>
                        <th className="text-nowrap">Unit Kerja</th>
                        <th className="text-nowrap">Nomor Kegiatan</th>
                        <th className="text-nowrap">Kode RUP (Sirup)</th>
                        <th className="text-nowrap">Metode Pelaksanaan</th>
                        <th className="text-nowrap">Jenis pekerjaan</th>
                        <th className="text-nowrap">Sumber dana</th>
                        <th className="text-nowrap">Nama PA/KPA/PPK</th>
                        <th className="text-nowrap">NIP PA/KPA/PPK</th>
                        <th className="text-nowrap">Jabatan PA/KPA/PPK</th>
                        <th className="text-nowrap">Nama Penyedia</th>
                        <th className="text-nowrap">Alamat penyedia</th>
                        <th className="text-nowrap">No Kontrak</th>
                        <th className="text-nowrap">Tanggal kontrak</th>
                        <th className="text-nowrap">Lokasi Pekerjaan</th>
                        <th className="text-nowrap">Magnitudo</th>
                        <th className="text-nowrap">Longitude</th>
                        <th className="text-nowrap">No SMPK</th>
                        <th className="text-nowrap">Durasi Hari</th>
                        <th className="text-nowrap">Durasi Minggu</th>
                        <th className="text-nowrap">Bulan durasi</th>
                        <th className="text-nowrap">Durasi Tahun</th>
                        <th className="text-nowrap">Mulai tanggal</th>
                        <th className="text-nowrap">Tanggal Akhir</th>
                        <th className="text-nowrap">Nilai</th>
                        <th className="text-nowrap">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    { rppData.data.length == 0 && <tr><td className="text-center h1" colSpan={ 999999 }>Data Not Available</td></tr> }
                    { rppData.data.map(tableItem => {
                        const selected = selectedItem.find(item => item == tableItem.id ? true : false);
                        return (
                            <tr key={ tableItem.id } className={ `${selected ? 'bg-soft-primary' : ''}` } onClick={ () => {
                                setSelectedItem(selectedItem => selected ? selectedItem.filter(item => item != tableItem.id) : [...selectedItem, tableItem.id]);
                            } }>
                                <td className="text-nowrap"><input type="checkbox" name="selected_row" id={ `#selected_row_${tableItem.id}` } checked={ selected } /></td>
                                <td className="text-nowrap">{ tableItem.year?.year }</td>
                                <td className="text-nowrap">{ tableItem.work_unit?.name }</td>
                                <td className="text-nowrap">{ tableItem.activity_number }</td>
                                <td className="text-nowrap">{ tableItem.rup_code }</td>
                                <td className="text-nowrap">{ tableItem.implement_method }</td>
                                <td className="text-nowrap">{ tableItem.job_type }</td>
                                <td className="text-nowrap">{ tableItem.fund_source }</td>
                                <td className="text-nowrap">{ tableItem.pa_name }</td>
                                <td className="text-nowrap">{ tableItem.pa_nip }</td>
                                <td className="text-nowrap">{ tableItem.pa_position }</td>
                                <td className="text-nowrap">{ tableItem.provider_name }</td>
                                <td className="text-nowrap">{ tableItem.provider_address }</td>
                                <td className="text-nowrap">{ tableItem.contract_no }</td>
                                <td className="text-nowrap">{ tableItem.contract_date }</td>
                                <td className="text-nowrap">{ tableItem.job_location }</td>
                                <td className="text-nowrap">{ tableItem.job_magnitude }</td>
                                <td className="text-nowrap">{ tableItem.job_longitude }</td>
                                <td className="text-nowrap">{ tableItem.smpk_no }</td>
                                <td className="text-nowrap">{ tableItem.duration_year } Tahun</td>
                                <td className="text-nowrap">{ tableItem.duration_month } Bulan</td>
                                <td className="text-nowrap">{ tableItem.duration_week } Minggu</td>
                                <td className="text-nowrap">{ tableItem.duration_day } Hari</td>
                                <td className="text-nowrap">{ tableItem.start_date }</td>
                                <td className="text-nowrap">{ tableItem.end_date }</td>
                                <td className="text-nowrap">{ tableItem.value }</td>
                                <td className="text-nowrap">{ tableItem.description }</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <PaginateLinks links={ rppData.links } only={ ['rppData'] } />
        </Card>
    );
}

import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

export const NavbarVertical = ({ navbarStyle, appName, appLogo }) => {
    const { component } = usePage();
    return (
        <>
            <nav className={ `navbar navbar-light navbar-vertical navbar-expand-xl ${navbarStyle && navbarStyle !== 'transparent' && `navbar-${navbarStyle}`}` }>
                <div className="d-flex align-items-center">
                    <div className="toggle-icon-wrapper">
                        <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line" /></span></button>
                    </div>
                    <Link className="navbar-brand" href={ route('dashboard') }>
                        <div className="d-flex align-items-center py-3" style={ { zIndex: 1050 } }>
                            <img className="me-2" src={ appLogo } width={ 40 } />
                            <span className="font-sans-serif">{ appName }</span>
                        </div>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                    <div className="navbar-vertical-content scrollbar">
                        <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                            <li className="nav-item">
                                <Link className={ `nav-link ${component.startsWith('Dashboard') ? 'active' : ''}` } href={ route('dashboard') } role="button">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <span className="fas fa-chart-pie" /></span>
                                        <span className="nav-link-text ps-1">Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">App</div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                <a className="nav-link dropdown-indicator" href="#data-nav-toggle" role="button" data-bs-toggle="collapse" aria-expanded={ component.startsWith('Data') } aria-controls="data-nav-toggle">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"><span className="fas fa-database" /></span>
                                        <span className="nav-link-text ps-1">Data</span>
                                    </div>
                                </a>
                                <ul className={ `nav collapse ${component.startsWith('Data') ? 'true show' : 'false'}` } id="data-nav-toggle">
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/RegencyTarget/Index') ? 'active' : ''}` } href={ route('regency-targets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Target Anggaran OPD Kabupaten / Kota</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/RegencyBudget/Index') ? 'active' : ''}` } href={ route('regency-budgets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Anggaran Kabupaten / Kota</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbdRealization/Index') ? 'active' : ''}` } href={ route('apbd-realizations.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Realisasi APBD</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbdTarget/Index') ? 'active' : ''}` } href={ route('apbd-targets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Target APBD</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbdBudget/Index') ? 'active' : ''}` } href={ route('apbd-budgets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Anggaran APBD</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbnRealization/Index') ? 'active' : ''}` } href={ route('apbn-realizations.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Realiasi APBN</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbnTarget/Index') ? 'active' : ''}` } href={ route('apbn-targets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Target APBN</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/ApbnBudget/Index') ? 'active' : ''}` } href={ route('apbn-budgets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Anggaran APBN</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/OpdRealization/Index') ? 'active' : ''}` } href={ route('opd-realizations.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Realisasi OPD</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/OpdTarget/Index') ? 'active' : ''}` } href={ route('opd-targets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Target OPD</span></div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={ `nav-link ${component.startsWith('Data/OpdBudget/Index') ? 'active' : ''}` } href={ route('opd-budgets.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Anggaran OPD</span></div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link dropdown-indicator" href="#parameter" role="button" data-bs-toggle="collapse" aria-expanded={ component.startsWith('Parameter') } aria-controls="parameter">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"><span className="fas fa-cogs" /></span>
                                        <span className="nav-link-text ps-1">Parameter</span>
                                    </div>
                                </a>
                                <ul className={ `nav collapse ${component.startsWith('Parameter') ? 'true show' : 'false'}` } id="parameter">
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/OpdWorkUnit/Index') ? 'active' : ''}` } href={ route('opd-work-units.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Satuan Kerja (OPD)</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/WorkUnit/Index') ? 'active' : ''}` } href={ route('work-units.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Unit Kerja</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/General/Index') ? 'active' : ''}` } href={ route('generals.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Data Umum</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/Province/Index') ? 'active' : ''}` } href={ route('provinces.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Provinsi</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/Regency/Index') ? 'active' : ''}` } href={ route('regencies.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Kabupaten/Kota</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/District/Index') ? 'active' : ''}` } href={ route('districts.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Kecamatan</span></div>
                                        </Link>
                                    </li>
                                    <li className={ `nav-item` }>
                                        <Link className={ `nav-link ${component.startsWith('Parameter/Year/Index') ? 'active' : ''}` } href={ route('years.index') }>
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Tahun</span></div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={ `nav-link ${component.startsWith('User/Index') ? 'active' : ''}` } href={ route('users.index') }>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"><i className="fas fa-user"></i></span>
                                        <span className="nav-link-text ps-1">User</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        {/* <div className="settings mb-3">
                            <div className="card alert p-0 shadow-none" role="alert">
                                <div className="btn-close-falcon-container">
                                    <div className="btn-close-falcon" aria-label="Close" data-bs-dismiss="alert" />
                                </div>
                                <div className="card-body text-center"><img src="../assets/img/icons/spot-illustrations/navbar-vertical.png" width={80} />
                                    <p className="fs--2 mt-2">Loving what you see? <br />Get your copy of <a href="#!">Falcon</a></p>
                                    <div className="d-grid"><a className="btn btn-sm btn-purchase" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/" target="_blank">Purchase</a></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav >
        </>
    );
};

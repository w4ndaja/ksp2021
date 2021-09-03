import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

export const NavbarTop = () => {
    const { props: { appLogo, appName }, component } = usePage();
    return (
        <>
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-xl">
                <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line" /></span></button>
                <Link className="navbar-brand me-1 me-sm-3" href={ route('dashboard') }>
                    <div className="d-flex align-items-center py-3" style={ { zIndex: 1050 } }>
                        <img className="me-2" src={ appLogo } width={ 40 } />
                        <span className="font-sans-serif">{ appName }</span>
                    </div>
                </Link>
                <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
                    <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                        <li className="nav-item">
                            <Link className={ `nav-link ${component.startsWith('Dashboard') && 'active'}` } href={ route('dashboard') } role="button">Dashboard</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={ `nav-link dropdown-toggle ${component.startsWith('Data') && 'active'}` } href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="data">Data</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="data">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/RegencyTarget/Index') && 'active'}` } href={ route('regency-targets.index') }> Target Anggaran OPD Kabupaten / Kota </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/RegencyBudget/Index') && 'active'}` } href={ route('regency-budgets.index') }> Anggaran Kabupaten / Kota </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbdRealization/Index') && 'active'}` } href={ route('apbd-realizations.index') }> Realisasi APBD </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbdTarget/Index') && 'active'}` } href={ route('apbd-targets.index') }> Target APBD </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbdBudget/Index') && 'active'}` } href={ route('apbd-budgets.index') }> Anggaran APBD </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbnRealization/Index') && 'active'}` } href={ route('apbn-realizations.index') }> Realiasi APBN </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbnTarget/Index') && 'active'}` } href={ route('apbn-targets.index') }> Target APBN </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/ApbnBudget/Index') && 'active'}` } href={ route('apbn-budgets.index') }> Anggaran APBN </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/OpdRealization/Index') && 'active'}` } href={ route('opd-realizations.index') }> Realisasi OPD </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/OpdTarget/Index') && 'active'}` } href={ route('opd-targets.index') }> Target OPD </Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Data/OpdBudget/Index') && 'active'}` } href={ route('opd-budgets.index') }> Anggaran OPD </Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={ `nav-link dropdown-toggle ${component.startsWith('Parameter') && 'active'}` } href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="parameter">Parameter</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="parameter">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/OpdWorkUnit/Index') ? 'active' : ''}` } href={ route('opd-work-units.index') }>Satuan Kerja (OPD)</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/WorkUnit/Index') ? 'active' : ''}` } href={ route('work-units.index') }>Unit Kerja</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/General/Index') ? 'active' : ''}` } href={ route('generals.index') }>Data Umum</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/Province/Index') ? 'active' : ''}` } href={ route('provinces.index') }>Provinsi</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/Regency/Index') ? 'active' : ''}` } href={ route('regencies.index') }>Kabupaten/Kota</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/District/Index') ? 'active' : ''}` } href={ route('districts.index') }>Kecamatan</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Parameter/Year/Index') ? 'active' : ''}` } href={ route('years.index') }>Tahun</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={ `nav-link dropdown-toggle ${component.startsWith('Lpse') && 'active'}` } href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="rpp">RPP</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="rpp">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/RppData/Index') ? 'active' : ''}` } href={ route('rpp-data.index') }>RPP</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/Procurement/Index') ? 'active' : ''}` } href={ route('procurements.index') }>Pengadaan</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/Procurement/Index') ? 'active' : ''}` } href={ route('procurements.index') }>Timeline Progress</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/Procurement/Index') ? 'active' : ''}` } href={ route('procurements.index') }>Realisasi Fisik</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/Procurement/Index') ? 'active' : ''}` } href={ route('procurements.index') }>Ranking Penyedia</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/SpjShopping/Index') ? 'active' : ''}` } href={ route('spj-shoppings.index') }>SPJ Belanja</Link>
                                    <Link className={ `dropdown-item fw-medium ${component.startsWith('Lpse/Provider/Index') ? 'active' : ''}` } href={ route('providers.index') }>Penyedia</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item"> <Link className={ `nav-link ${component.startsWith('User/Index') ? 'active' : ''}` } href={ route('users.index') }>User</Link> </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" defaultValue="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0" /></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0" /></label></div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link pe-0" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-xl">
                            <i className="rounded-circle fas fa-user p-1" style={ { height: 28, width: 28 } }></i>
                        </div>
                    </a>
                        <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                            <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                {/* <a className="dropdown-item fw-bold text-warning" href="#!"><span className="fas fa-crown me-1" /><span>Go Pro</span></a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">Set status</a>
                                <a className="dropdown-item" href="user/profile.html">Profile &amp; account</a>
                                <a className="dropdown-item" href="#!">Feedback</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="user/settings.html">Settings</a>
                                <a className="dropdown-item" href="authentication/card/logout.html">Logout</a> */}
                                <Link className="dropdown-item" href={ route('logout') } method="post" as="button" type="button">Logout</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

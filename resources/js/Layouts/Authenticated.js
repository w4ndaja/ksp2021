import { Footer, NavbarTop, NavbarTopCombo, NavbarTopVertical, NavbarVertical } from '@/Partials';
import React, { useEffect, useMemo } from 'react';

export const Authenticated = ({ children: { props: { auth: { user }, errors, appName, appLogo } }, children }) => {
    const isFluid = useMemo(() => JSON.parse(localStorage.getItem('isFluid')), []);
    const navbarStyle = useMemo(() => localStorage.getItem("navbarStyle"), []);
    // const navbarPosition = useMemo(() => localStorage.getItem('navbarPosition'), []);
    const navbarPosition = 'top';
    return (
        <>
            <main className="main" id="top">
                <div className={ isFluid ? 'container-fluid' : "container" } data-layout="container">
                    { navbarPosition === 'combo' || navbarPosition !== 'top' && <NavbarVertical navbarStyle={ navbarStyle } appName={ appName } appLogo={ appLogo } /> }
                    { navbarPosition === 'top' && <NavbarTop /> }
                    <div className="content">
                        { navbarPosition !== 'combo' && navbarPosition !== 'top' && <NavbarTopVertical appName={ appName } /> }
                        { navbarPosition === 'combo' && <NavbarTopCombo /> }
                        { children }
                        {/* <Footer>
                            <div className="col-12 col-sm-auto text-center"> <p className="mb-0 text-600">Thank you for creating with Falcon <span className="d-none d-sm-inline-block">| </span><br className="d-sm-none" /> 2021 © <a href="https://themewagon.com/">Themewagon</a></p> </div>
                            <div className="col-12 col-sm-auto text-center"> <p className="mb-0 text-600">v3.2.0</p> </div>
                        </Footer> */}
                    </div>
                </div>
            </main>
        </>
    );
};

import React from 'react';

export const Guest = ({ children }) => {
    return (
        <main className="main" id="top">
            <div className="container-fluid">
                <div className="row min-vh-100 flex-center g-0">
                    <div className="col-lg-8 col-xxl-5 py-3 position-relative">
                        <img className="bg-auth-circle-shape" src="../../../assets/img/icons/spot-illustrations/bg-shape.png" width={250} />
                        <img className="bg-auth-circle-shape-2" src="../../../assets/img/icons/spot-illustrations/shape-1.png" width={150} />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

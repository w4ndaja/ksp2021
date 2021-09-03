import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Authenticated } from '@/Layouts/Authenticated';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="card">
                <div className="card-body overflow-hidden p-lg-6">
                    <div className="row align-items-center">
                        <div className="col-lg-6"><img className="img-fluid" src="../assets/img/icons/spot-illustrations/21.png" /></div>
                        <div className="col-lg-6 ps-lg-4 my-5 text-center text-lg-start">
                            <h3 className="text-primary">Edit me!</h3>
                            <p className="lead">Create Something Beautiful.</p><a className="btn btn-falcon-primary" href="../documentation/getting-started.html">Getting started</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

Welcome.layout = page => <Authenticated children={page} />
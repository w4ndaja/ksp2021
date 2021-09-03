import React, { useEffect } from 'react';
import { Guest } from '@/Layouts';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword, appName, appDescription, appLogo }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: 'admin',
        password: 'password',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />

            { status && <div className="mb-4 font-medium text-sm text-green-600">{ status }</div> }
            <div className="card overflow-hidden z-index-1">
                <div className="card-body p-0">

                    <div className="row g-0 h-100">
                        <div className="col-md-5 text-center bg-card-gradient">
                            <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                                <div className="bg-holder bg-auth-card-shape" style={ { backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/half-circle.png)' } } />
                                {/*/.bg-holder*/ }
                                <div className="z-index-1 position-relative"><Link href={ route('dashboard') } className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder">{ appName }</Link>
                                    <div className="d-block">
                                        { appLogo && <img src={ appLogo } className="w-100 mb-5" style={ { maxWidth: 100 } } /> }
                                    </div>
                                    <p className="opacity-75 text-white">{ appDescription }</p>
                                </div>
                            </div>
                            {/* <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                                <p className="text-white">Don't have an account?<br /><a className="text-decoration-underline link-light" href="register.html">Get started!</a></p>
                                <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">Read our <a className="text-decoration-underline text-white" href="#!">terms</a> and <a className="text-decoration-underline text-white" href="#!">conditions </a></p>
                            </div> */}
                        </div>
                        <div className="col-md-7 d-flex flex-center">
                            <div className="p-4 p-md-5 flex-grow-1">
                                <ValidationErrors errors={ errors } />
                                <div className="row flex-between-center">
                                    <div className="col-auto">
                                        <h3>Masuk</h3>
                                    </div>
                                </div>
                                <form onSubmit={ submit }>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="username">Nama Pengguna</label>
                                        <input className="form-control" id="username" type="text" name="username" value={ data.username } isFocused={ true } onChange={ onHandleChange } />
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="card-password">Kata Sandi</label>
                                            {/* {canResetPassword && <a className="fs--1" href={route('password.request')}>Forgot Password?</a>} */ }
                                        </div>
                                        <input className="form-control" id="card-password" type="password" name="password" value={ data.password } onChange={ onHandleChange } />
                                    </div>
                                    <div className="form-check mb-0"><input className="form-check-input" type="checkbox" id="card-checkbox" checked={ data.remember } name="remember" handleChange={ onHandleChange } /><label className="form-check-label" htmlFor="card-checkbox">Ingat saya</label></div>
                                    <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Kirim</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = page => <Guest children={ page } />;
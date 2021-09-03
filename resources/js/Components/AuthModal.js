import React from 'react';
export const AuthModal = React.forwardRef((props, ref) => (<>
    <div ref={ref} className="modal fade" id="authentication-modal" tabIndex={-1} role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
        <div className="modal-dialog mt-6" role="document">
            <div className="modal-content border-0">
                <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
                    <div className="position-relative z-index-1 light">
                        <h4 className="mb-0 text-white" id="authentication-modal-label">Register</h4>
                        <p className="fs--1 mb-0 text-white">Please create your free Falcon account</p>
                    </div><button className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body py-4 px-5">
                    <form>
                        <div className="mb-3"><label className="form-label" htmlFor="modal-auth-name">Name</label><input className="form-control" type="text" autoComplete="on" id="modal-auth-name" /></div>
                        <div className="mb-3"><label className="form-label" htmlFor="modal-auth-email">Email
                            address</label><input className="form-control" type="email" autoComplete="on" id="modal-auth-email" /></div>
                        <div className="row gx-2">
                            <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="modal-auth-password">Password</label><input className="form-control" type="password" autoComplete="on" id="modal-auth-password" /></div>
                            <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="modal-auth-confirm-password">Confirm Password</label><input className="form-control" type="password" autoComplete="on" id="modal-auth-confirm-password" /></div>
                        </div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" id="modal-auth-register-checkbox" /><label className="form-label" htmlFor="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</>
));
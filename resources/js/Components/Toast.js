import React, { forwardRef, useEffect, useRef, useState } from 'react';
export const ToastContainer = forwardRef(({ ...props }, ref) => {
    const [toasts, setToasts] = useState([]);
    const Toast = ({ body = null, className = null }) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = bootstrap.Toast.getOrCreateInstance(ref.current, { timeout: 2000 });
            ref.current.show();
        }, []);
        return (
            <div className={ `toast align-items-center ${className} border-0 mb-3` } ref={ ref } style={{zIndex : 1080}}>
                <div className="d-flex">
                    <div className="toast-body">
                        { body }
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
                </div>
            </div>

        );
    };
    useEffect(() => {
        ref.current = {
            push: (props) => setToasts(t => [...t, <Toast { ...props } />,])
        };
    }, []);
    return (
        <div className="position-fixed bottom-0 end-0 pe-3" style={{zIndex : 1070}}>
            { toasts }
        </div>
    );
});
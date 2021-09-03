import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { SmallButton } from './Button';
export const ModalButton = forwardRef(({ children, state = 'hide', title = null, btnTitle = null, btnType = null }, modalRef) => {
    let modal = useRef();
    useEffect(() => {
        modal.current = new bootstrap.Modal.getOrCreateInstance(modalRef.current);
        modal.current[state]();
    }, []);
    return (
        <>
            <SmallButton btnType={ btnType } type="button" onClick={ () => modal.current.show() }>{ btnTitle }</SmallButton>
            <div ref={ modalRef } className="modal fade" tabIndex={ -1 } aria-hidden="true">
                <div className="modal-dialog mt-6" role="document">
                    { title && <div className="modal-header">{ title }</div> }
                    <div className="modal-content border-0">
                        <div className="position-absolute top-0 end-0 mt-2 me-2 z-index-1"><button className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body p-0">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export const ModalFade = forwardRef(({ title, children, size = 'md' }, ref) => {
    const modalSize = useMemo(() => `modal-${size}`);
    const modalRef = useRef();
    useEffect(() => {
        ref.current = new bootstrap.Modal(modalRef.current);
    }, []);
    return (
        <div ref={ modalRef } className="modal fade" tabIndex={ -1 } aria-hidden="false">
            <div className={ `modal-dialog mt-6 ${modalSize}` } role="document">
                <div className="modal-content border-0">
                    { title && <div className="modal-header">{ title }</div> }
                    <div className="position-absolute top-0 end-0 mt-2 me-2 z-index-1"><button className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
});
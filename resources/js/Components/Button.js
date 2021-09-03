import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}

export const SmallButton = ({ btnType = 'primary', size = 'md', children, ...props }) => {
    return (
        <button className={`btn btn-falcon-${btnType} btn-${size} me-1 mb-1`} type="button" {...props}>
            {children}
        </button>
    );
};
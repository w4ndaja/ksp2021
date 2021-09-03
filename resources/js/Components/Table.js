import React from 'react';
export const Table = ({ children }) => {
    return (
        <div className="table-responsive scrollbar">
            <table className="table table-hover overflow-hidden">
                {children}
            </table>
        </div>
    );
};
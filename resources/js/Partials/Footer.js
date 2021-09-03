import React from 'react'

export const Footer = ({children}) => {
    return (
        <>
            <footer className="footer">
                <div className="row g-0 justify-content-between fs--1 mt-4 mb-3">
                    {children}
                </div>
            </footer>

        </>
    )
}

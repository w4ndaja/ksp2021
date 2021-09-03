import React from 'react';

export const Card = ({ children, title = null, text = null, footer, bodyClass = null, ...props }) => {
    return (
        <div { ...{...props, className : `card overflow-hidden ${props?.className || ''}`} }>
            <div className={`card-body ${bodyClass && bodyClass}`}>
                { title && <h5 className="card-title mb-3">{ title }</h5> }
                { text && <p className="card-text">{ text }</p> }
                { children }
            </div>
            { footer }
        </div>
    );
};

export const CardHeader = ({ children }) => {
    return <div className="card-header">{ children }</div>;
};

export const CardImageHeader = ({ src, alt }) => {
    return (
        <div className="card-img-top"><img className="img-fluid" src={ src } alt={ alt } /></div>
    );
};

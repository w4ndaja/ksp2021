import { Link } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';

export const PaginateLinks = ({ label = "", links = [], only }) => {
    return (
        <nav aria-label={ label }>
            <ul className="pagination">
                { links.map((link, i) => <li key={ i } className={ `page-item ${(link.active && 'active')} ${link.url == null && 'disabled'}` }>
                    <Link only={only} className="page-link" href={ link.url || '' }>{ link.label }</Link>
                </li>) }
                {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
            </ul>
        </nav>
    );
};

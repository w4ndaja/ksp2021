import { usePage } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const InputGroup = ({ label, id, onChange = () => { }, ...props }) => {
    const { props: { errors: _errors } } = usePage();
    const [errors, setErrors] = useState(_errors);
    useEffect(() => {
        setErrors(_errors);
    }, [_errors]);
    const handleChange = e => {
        setErrors(e => ({ ...e, [props.name]: null }));
        onChange(e);
    };
    return (
        <div className={ `form-floating mb-3` }>
            <input className={ `form-control ${errors[props.name]?.length > 0 && 'is-invalid'}` } id={ id } onChange={ handleChange } { ...props } />
            <label htmlFor={ id }>{ label }</label>
            { errors[props.name]?.length > 0 && <small className="text-danger">{ errors[props.name] }</small> }
        </div>
    );
};

export const InputFile = ({ label, id, onChange = () => { }, ...props }) => {
    const inputRef = useRef();
    const { props: { errors: _errors } } = usePage();
    const [errors, setErrors] = useState(_errors);
    useEffect(() => {
        setErrors(_errors);
    }, [_errors]);
    const handleChange = e => {
        setErrors(e => ({ ...e, [props.name]: null }));
        onChange(e);
    };
    return (
        <div className="mb-3">
            <label htmlFor={ id || props.name || 'input_file' }>{ label }</label>
            <label htmlFor={ id || props.name || 'input_file' } className="btn btn-secondary btn-sm d-block mb-0 flex-grow-1">{ props.placeholder || 'Choose File' }</label>
            <input ref={ inputRef } type="file" className="sr-only" id={ id || props.name || 'input_file' } onChange={ handleChange } { ...props } />
            <small className="font-xs">{ [...inputRef.current?.files || []].map(file => file.name)?.join(', ') }</small>
            { errors[props?.name] && <small className="text-danger d-block">{ errors[props?.name] }</small> }
        </div>
    );
};

export const TextArea = ({ label, id, onChange = () => { }, ...props }) => {
    const { props: { errors: _errors } } = usePage();
    const [errors, setErrors] = useState(_errors);
    useEffect(() => setErrors(e => ({ ...e, [props.name]: null })), [_errors]);
    const handleChange = e => {
        setErrors(e => ({ ...e, [props.name]: null }));
        onChange(e);
    };
    return (
        <div className="mb-3">
            <label htmlFor={ id || props.name || 'textarea' }>{ label }</label>
            <textarea className={ `form-control ${errors[props.name] && 'is-invalid'}` } id={ id } onChange={ handleChange } { ...props }></textarea>
            { errors[props.name] && <small className="text-danger">{ errors[props.name] }</small> }
        </div>
    );
};

export const SelectGroup = ({ label, id, data: _data = [], url = null, item, empty = null, onChange = () => { }, ...props }) => {
    const { props: { errors: _errors } } = usePage();
    const [errors, setErrors] = useState(_errors);
    useEffect(() => setErrors(_errors), [_errors]);
    const handleChange = (item) => {
        onChange({ target: { value: item.value, name: props.name } });
        setTimeout(() => setErrors(__errors => ({ ...__errors, [props.name]: null })));
    };
    const [data, setData] = useState(_data);
    const [query, setQuery] = useState('');
    const filtered = useMemo(() => {
        if (query !== '' && !url) {
            const queries = query.split(' ');
            return data.filter(item => {
                for (let i in item) if (queries.map(query => JSON.stringify(item[i]).toLowerCase().indexOf(query.toLowerCase()) != -1).filter(ii => ii == true).length == queries.length) return true;
                return false;
            });
        } else return [];
    }, [query]);
    const [links, setLinks] = useState();
    const fetchData = useCallback(_.debounce(async (url, query, setData) => {
        try {
            const { data } = await axios.get(url, { params: { q: query } });
            setData(data.data);
            setLinks(data.links.next);
        } catch (e) {
        }
    }, 300), []);
    const loadMore = useCallback(_.debounce(async (url, query, setData) => {
        try {
            const { data } = await axios.get(url, { params: { q: query } });
            setData(d => [...d, ...data.data]);
            setLinks(data.links.next);
        } catch (e) {
        }
    }, 300), []);
    useEffect(() => {
        if (query !== '') fetchData(url, query, setData);
    }, [query]);
    useEffect(() => fetchData(url, query, setData), []);
    const queryRef = useRef();
    return (
        <>
            <div className="dropdown">
                <div className="form-floating mb-3">
                    <button className={ `${errors[props.name]?.length > 0 ? 'form-control' : 'form-select'} text-truncate ${errors[props.name]?.length > 0 && 'is-invalid'} text-start ps-3` } disabled={ props.disabled } type="button" id={ props.name || 'dropdownMenuButton1' } data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => {
                        queryRef.current.focus();
                        setQuery('');
                    } }>
                        { data.find(item => item.value == props.value)?.label || props.placeholder }
                        { empty && !data.length && <small className="text-secondary">{ empty }</small> }
                    </button>
                    <ul className="dropdown-menu w-100 overflow-y-auto pt-0" style={ { maxHeight: 300, overflowY: 'auto' } } aria-labelledby={ props.name || 'dropdownMenuButton1' }>
                        <li className="sticky-top bg-white pt-2"> <span className="dropdown-item" href="#"><input type="text" className="form-control" ref={ queryRef } value={ query } onChange={ e => setQuery(e.target.value) } /></span> </li>
                        { ((query !== '' && !url) ? filtered : data).map((item, i) => <li key={ i } onClick={ e => handleChange(item) }>
                            <span className={ `dropdown-item cursor-pointer ${item.value == props.value && 'active'}` } href="#">{ item.label }</span>
                            {/* {item.sub_label && <label>{item.sub_label}</label>} */ }
                        </li>) }
                        { links && <li><input onClick={ () => loadMore(links, query, setData) } type="button" role="button" className="dropdown-item" value="Lebih banyak..." /></li> }
                    </ul>
                    <label htmlFor={ id }>{ label }</label>
                    { errors[props.name]?.length > 0 && <small className="text-danger">{ errors[props.name] }</small> }
                </div>
            </div>
        </>
    );
};


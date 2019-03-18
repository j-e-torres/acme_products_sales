import React from 'react';
import { Link } from 'react-router-dom';

export default ({ location: {pathname}, counts }) => {
    const navTabs = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Sales',
            path: '/products/sales'
        },
        {
            title: 'Create',
            path: '/products/create'
        }
    ];

    return (
        <ul className="nav nav-tabs">
            {
                navTabs.map( tab => {
                    return (
                        <li key={tab.path} className="nav-item" >
                            <Link to={tab.path} className={`nav-link ${tab.path === pathname ? 'active' : ''}`}>
                                {tab.title}
                                <span className="badge badge-primary" style={ {marginLeft: '10px'} }>
                                    {counts[tab.path]}
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

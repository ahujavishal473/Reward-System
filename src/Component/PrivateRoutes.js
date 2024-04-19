import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const decideRole = () => {
    let loginData = JSON.parse(localStorage.getItem('loginUser'));
    console.log(loginData);
    try {
        if (loginData && loginData.role === 'admin') {
            return {
                auth: true,
                user: 'admin'
            };
        } else if (loginData && (loginData.role === 'hr' || loginData.role === 'employee')) {
            return {
                auth: true,
                user: 'employee'
            };
        } else {
            return {
                auth: false,
                user: null
            };
        }
    } catch (error) {
        console.log(error);
    }
};

export const PrivateRoutes = () => {
    const { user, auth } = decideRole();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth || user !== 'admin') {
            navigate('/');
        }
    }, [user, auth, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export const PublicRoutes = () => {
    const { user, auth } = decideRole();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth || user !== 'employee') {
            navigate('/');
        }
    }, [user, auth, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

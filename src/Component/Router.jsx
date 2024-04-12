import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import InvoiceDetail from './invoiceDetail';

export const Routers = () => {
    return (
        <div className='h-full w-full'>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/listDetail' element={<InvoiceDetail />} />
                <Route path='*' element={<div className='ml-8'>Not Found</div>} />
            </Routes>
        </div>
    )
}

export default Routers;

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { InputNumber } from "primereact/inputnumber";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from 'react-redux';
import { UpdateInvoiceDetail } from '../store/features/GlobalVariables';
import { useNavigate } from 'react-router-dom'
const InvoiceData = [
    {
        Id: 1,
        Date: '01/02/23',
        InvoiceNumber: 1,
        CustomerName: "BMW",
        BillingAddress: "Hyd",
        ShippingAddress: 'Banglore',
        GSTIN: "random",
        Items: [{
            Id: '12',
            itemName: 'first',
            quantity: 22,
            price: 120,
            amount: 1200
        }],
        BillSundrys: [{ Id: '12', billSundryName: 'ranodm', amount: 1200 }],
        TotalAmount: 120
    }, {
        Id: 1,
        Date: '01/02/23',
        InvoiceNumber: 1,
        CustomerName: "BMW",
        BillingAddress: "Hyd",
        ShippingAddress: 'Banglore',
        GSTIN: "random",
        Items: [{
            Id: '12',
            itemName: 'first',
            quantity: 22,
            price: 120,
            amount: 1200
        }],
        BillSundrys: [{ Id: '12', billSundryName: 'ranodm', amount: 1200 }],
        TotalAmount: 120
    },
    {
        Id: 1,
        Date: '01/02/23',
        InvoiceNumber: 1,
        CustomerName: "BMW",
        BillingAddress: "Hyd",
        ShippingAddress: 'Banglore',
        GSTIN: "random",
        Items: [{
            Id: '12',
            itemName: 'first',
            quantity: 22,
            price: 120,
            amount: 1200
        }],
        BillSundrys: [{ Id: '12', billSundryName: 'ranodm', amount: 1200 }],
        TotalAmount: 120
    },
    {
        Id: 1,
        Date: '01/02/23',
        InvoiceNumber: 1,
        CustomerName: "BMW",
        BillingAddress: "Hyd",
        ShippingAddress: 'Banglore',
        GSTIN: "random",
        Items: [{
            Id: '12',
            itemName: 'first',
            quantity: 22,
            price: 120,
            amount: 1200
        }],
        BillSundrys: [{ Id: '12', billSundryName: 'ranodm', amount: 1200 }],
        TotalAmount: 120
    }
]

const Dashboard = () => {

    const [invoices, setInvoices] = useState([]);
    const [detail, setDetail] = useState(null);
    const [value3, setValue3] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(() => {
    //   setInvoices(InvoiceData)
    // }, [])

    const fetchData = () => {
        setInvoices(InvoiceData)
    }
    const leftContents = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="mr-2" />
            <Button label="Invoices" title='Dispaly Invoices' onClick={fetchData} icon="pi pi-list" className="p-button-success mx-2" />
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mx-2" />
            <Button icon="pi pi-times" className="p-button-danger mx-2" />
        </React.Fragment>
    );

    const showDetail = (rowData) => {
        // console.log(rowData)

        const { CustomerName, Date, GSTIN, InvoiceNumber, ShippingAddress, TotalAmount, BillSundrys, Items } = rowData

        setDetail(rowData)
        dispatch(UpdateInvoiceDetail(rowData));
        navigate(`/listDetail`);
    }

    const imageBodyTemplate = (rowData) => {
        return <Button label="View Detail" onClick={() => { showDetail(rowData) }} icon="" className="p-button mx-2" />;
    }

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;



    return (
        <div className="App">
            <div>
                <Toolbar className='w-full' left={leftContents} right={rightContents} />
            </div>
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <DataTable value={invoices} paginator responsiveLayout="scroll"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="Id" header="Id" style={{ width: '25%' }}></Column>
                        <Column field="BillingAddress" header="BillingAddress" style={{ width: '25%' }}></Column>
                        <Column field="ShippingAddress" header="ShippingAddress" style={{ width: '25%' }}></Column>
                        <Column field="InvoiceNumber" header="InvoiceNumber" style={{ width: '25%' }}></Column>
                        <Column field="CustomerName" header="CustomerName" style={{ width: '25%' }}></Column>
                        <Column field="TotalAmount" header="TotalAmount" style={{ width: '25%' }}></Column>
                        <Column field="" header="Detail" body={imageBodyTemplate} style={{ width: '25%' }}></Column>
                    </DataTable>
                </div>
            </div>
            {/* <div className="card ml-4">
                {detail ? <div>
                    <p>{detail.TotalAmount}</p>
                    <p>{detail.ShippingAddress}</p>
                    <p>{detail.InvoiceNumber}</p>
                    <p>{detail.GSTIN}</p>
                    <p>{detail.Date}</p>
                    <p>{detail.CustomerName}</p>
                    <h4>Items</h4>
                    {detail.Items.map(el => (
                        <div>
                            <p>{el.amount}</p>
                            <p>{el.price}</p>
                            <p>{el.quantity}</p>
                            <p>{el.itemName}</p>
                        </div>
                    ))}
                    <h4>BillSundrys</h4>
                    {detail.BillSundrys.map(el => (
                        <div>
                            <p>{el.billSundryName}</p>
                            <p>{el.amount}</p>
                        </div>
                    ))}
                </div> : <div></div>}
            </div> */}


        </div>
    )
}


export default Dashboard
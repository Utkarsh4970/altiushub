import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const InvoiceDetail = () => {

    const [detail, setDetail] = useState()
    const { invoiceDetail } = useSelector((store) => store.GlobalVariables);

    useEffect(() => {
        setDetail(invoiceDetail)
    }, [])
    return (
        <div className="card border-solid border-primary-500">
            {detail ? (
                <div className="p-grid p-dir-col">
                    <div className="p-col">
                        <strong>Total Amount:</strong>
                        <p>{detail.TotalAmount}</p>
                    </div>
                    <div className="p-col">
                        <strong>Shipping Address:</strong>
                        <p>{detail.ShippingAddress}</p>
                    </div>
                    <div className="p-col">
                        <strong>Invoice Number:</strong>
                        <p>{detail.InvoiceNumber}</p>
                    </div>
                    <div className="p-col">
                        <strong>GSTIN:</strong>
                        <p>{detail.GSTIN}</p>
                    </div>
                    <div className="p-col">
                        <strong>Date:</strong>
                        <p>{detail.Date}</p>
                    </div>
                    <div className="p-col">
                        <strong>Customer Name:</strong>
                        <p>{detail.CustomerName}</p>
                    </div>
                    <div className="p-col">
                        <h4>Items</h4>
                        {detail.Items.map(el => (
                            <div className="p-grid p-nogutter">
                                <div className="p-col">
                                    <strong>Amount:</strong>
                                    <p>{el.amount}</p>
                                </div>
                                <div className="p-col">
                                    <strong>Price:</strong>
                                    <p>{el.price}</p>
                                </div>
                                <div className="p-col">
                                    <strong>Quantity:</strong>
                                    <p>{el.quantity}</p>
                                </div>
                                <div className="p-col">
                                    <strong>Item Name:</strong>
                                    <p>{el.itemName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-col">
                        <h4>Bill Sundrys</h4>
                        {detail.BillSundrys.map(el => (
                            <div className="p-grid p-nogutter">
                                <div className="p-col">
                                    <strong>Bill Sundry Name:</strong>
                                    <p>{el.billSundryName}</p>
                                </div>
                                <div className="p-col">
                                    <strong>Amount:</strong>
                                    <p>{el.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default InvoiceDetail;

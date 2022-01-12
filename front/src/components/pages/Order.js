import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

import axios from 'axios';
import { Link } from "react-router-dom";

const Order = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        LoadData();
    }, []);
    const LoadData = async () => {
        const result = await axios.get('http://localhost:8000/orders');
        console.log(result)
        setOrder(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Orders Page</h1>
                <Link className="btn btn-outline-info mb-4" to='/orders/add'>Add Order</Link>
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Outlet Name</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((user, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.User.name}</td>
                                    <td>{user.Product.name}</td>
                                    <td>{user.Outlet.name}</td>
                                    <td>{user.quantity}</td>
                                    <td>{user.cost}</td>
                                    <td>
                                        <Link to='/orders/edit/' className="btn btn-primary m-2">Edit</Link>
                                        <Link to='/orders/delete' className="btn btn-danger m-2">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Order;
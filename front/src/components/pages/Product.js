import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

import axios from 'axios';
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8000/products');
        console.log(result)
        setProduct(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Product Page</h1>
                <Link className="btn btn-outline-info mb-4" to='/products/add'>Add Product</Link>
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((user, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.cost}</td>
                                    <td>
                                        <Link to='/products/edit/' className="btn btn-primary m-2">Edit</Link>
                                        <Link to='/products/delete' className="btn btn-danger m-2">Delete</Link>
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

export default Product;
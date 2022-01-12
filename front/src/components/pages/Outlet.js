import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

import axios from 'axios';
import { Link } from "react-router-dom";

const Outlet = () => {
    const [outlets, setOutlet] = useState([]);
    useEffect(() => {
        LoadData();
    }, []);
    const LoadData = async () => {
        const result = await axios.get('http://localhost:8000/outlets');
        console.log(result)
        setOutlet(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Outlet Page</h1>
                <Link className="btn btn-outline-info mb-4" to='/outlets/add'>Add Outlet</Link>
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            outlets.map((user, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <Link to='/outlets/edit/' className="btn btn-primary m-2">Edit</Link>
                                        <Link to='/outlets/delete' className="btn btn-danger m-2">Delete</Link>
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

export default Outlet;
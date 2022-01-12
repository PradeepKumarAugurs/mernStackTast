import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

import axios from 'axios';
import { Link } from "react-router-dom";

const User = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8000/users');
        console.log(result)
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>User Page</h1>
                <Link className="btn btn-outline-info mb-4" to='/users/add'>Add User</Link>
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <Link to='/users/edit/' className="btn btn-primary m-2">Edit</Link>
                                        <Link to='/users/delete' className="btn btn-danger m-2">Delete</Link>
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

export default User;
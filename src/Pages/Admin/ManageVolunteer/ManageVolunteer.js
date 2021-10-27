import React from 'react';

const ManageVolunteer = ({ volunteer }) => {
    const { name, email, date, service } = volunteer;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{service}</td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
    );
};

export default ManageVolunteer;
import React, { useEffect, useState } from 'react';
import ManageVolunteer from '../ManageVolunteer/ManageVolunteer';
import { Table } from 'react-bootstrap';

const MaintainVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('https://damp-sands-70230.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Registration Date</th>
                        <th>Service Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    volunteers.map(volunteer => <ManageVolunteer key={volunteer._id} volunteer={volunteer}></ManageVolunteer>)
                }
            </Table>
        </div>
    );
};

export default MaintainVolunteers;
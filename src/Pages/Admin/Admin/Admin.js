import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';
import MaintainVolunteers from '../MaintainVolunteers/MaintainVolunteers';

const Admin = () => {
    const [state, setState] = useState('');
    const handleClick = name => {
        setState(name);
    }
    return (
        <div className="row mx-2">
            <div className="col-lg-2">
                <Nav defaultActiveKey="/manageVolunteers" className="flex-column">
                    <Nav.Link onClick={() => handleClick("manageVolunteers")} >Manage Volunteers</Nav.Link>
                    <Nav.Link onClick={() => handleClick("newEvent")} >Add New Event</Nav.Link>
                </Nav>
            </div>
            <div className="col-lg-10">
                {state === "" && <MaintainVolunteers></MaintainVolunteers>}
                {state === "manageVolunteers" && <MaintainVolunteers></MaintainVolunteers>}
                {state === "newEvent" && <AddEvent></AddEvent>}
            </div>
        </div>
    );
};

export default Admin;
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const VolunteerRegister = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        fetch(`https://damp-sands-70230.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://damp-sands-70230.herokuapp.com/volunteers', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('successfully ordered');
                    reset();
                    history.push('/');
                }
            })
    }


    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let current_date = `${date}/${month}/${year}`;

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_time = `${hours}:${minutes}:${seconds}`;

    return (
        <div className="">
            <img
                alt=""
                src="https://i.ibb.co/rcY1ksv/Group-1329.png"
                width="150"
                height="60"
                className="d-inline-block align-top"
            />
            <Card className="border-0 shadow px-2 rounded w-50 mx-auto mt-3">
                <Card.Body>
                    <h4>Register as a volunteer</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                        <input  {...register("name", { required: true })} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="name " defaultValue={user.displayName} /> <br />

                        <input  {...register("email", { required: true })} type="email" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="email address" defaultValue={user.email} /> <br />

                        <input readOnly {...register("date", { required: true })} className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="date" defaultValue={current_date} /> <br />

                        <input readOnly {...register("time", { required: true })} className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="date" defaultValue={current_time} /> <br />

                        <textarea  {...register("description")} type="textarea" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="Description" /> <br />

                        <input readOnly  {...register("service", { required: true })} type="text" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="service name" defaultValue={service.name} /> <br />


                        <input type="submit" value="Register" className="mt-2 p-2 rounded border-1 w-100 btn btn-primary" />
                    </form>

                </Card.Body>
            </Card>
        </div>
    );
};

export default VolunteerRegister;
import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data)

    };
    return (
        <div className="ms-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                <div className="d-flex">
                    <div className="mx-4 ms-5">
                        <label>Event Title</label> <br />
                        <input  {...register("name", { required: true })} type="email" className="mt-3 p-2 rounded border-1" placeholder="email address" />
                    </div>

                    <div className="mx-4 ms-5">
                        <label >Event Date</label> <br />
                        <input  {...register("date", { required: true })} type="password" className="mt-3 p-2 rounded border-1 " placeholder="password" />
                    </div>
                </div>
                <br />
                <div className="d-flex">
                    <div className="mx-4 ms-5">
                        <label >Description</label> <br />
                        <textarea  {...register("Description", { required: true })} type="password" className="mt-3 p-2 rounded border-1 " placeholder="password" />
                    </div>

                    <div className="mx-4 ms-5">
                        <label >Banner Image</label> <br />
                        <input  {...register("image", { required: true })} type="file" className="mt-3 p-2 rounded border-1 " placeholder="password" />
                    </div>
                </div>

                <div className="text-center">
                    <input type="submit" value="Add Event" className="mt-2 p-2 rounded border-1  btn btn-danger" />
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
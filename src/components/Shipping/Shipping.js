import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />

                <input placeholder="address" defaultValue="" {...register("address")} />
                <input placeholder="phone" defaultValue="" {...register("phone")} />
                <input placeholder="city" defaultValue="" {...register("city")} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
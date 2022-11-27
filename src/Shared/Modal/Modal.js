import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../UserContext/UserContext';
import Loader from '../Loader/Loader';

const Modal = ({bookData, setBookData}) => {
    const {title, resalePrice, img} = bookData;
    const navigate = useNavigate();
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Loader/>
    }

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const bookName= form.itemName.value;
        const bookPrice = form.price.value;
        const userPhoneNumber = form.phone.value;
        const meetingLocation = form.location.value;
        const booking = {
            userName,
            userEmail,
            bookName,
            bookPrice,
            userPhoneNumber,
            meetingLocation,
            img
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookData(' ');
                    Swal.fire(
                        'Congrats Book Lover!',
                        "Your book has been booked successfully!",
                        'success'
                      )
                    navigate(`/dashboard/myorders/${userEmail}`)
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Your book couldn't be booked",
                      })
                }
            })

    }

    return (
<div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" disabled value={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" disabled value={user?.email}placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="itemName" type="text" disabled value={title} className="input w-full input-bordered" />
                        <input name="img" type="text" disabled value={img} className="input w-full input-bordered" />
                        <input name="price" type="text" disabled value={`€`+ resalePrice} className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required/>
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required/>
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
</div>
    );
};

export default Modal;
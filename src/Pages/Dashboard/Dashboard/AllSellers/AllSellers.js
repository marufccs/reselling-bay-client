import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Loader from '../../../../Shared/Loader/Loader';
import AllSeller from './AllSeller';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-market-server-eight.vercel.app/users?type=Seller`);
            const data = await res.json();
            return data
        }
    })

const [sellerList, setSellerList] = useState(sellers);

    if(isLoading){
        return <Loader/>
    }

    // Sweet Alert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      const handleDelete = (id) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to undo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been successfully deleted.',
                'success'
              )
              fetch(`https://used-products-resale-market-server-eight.vercel.app/users/sellers/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = sellerList.filter(seller => seller._id !== id);
                        setSellerList(remaining);
                        refetch();
                }
            })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                "Your file hasn't been deleted :)",
                'error'
              )
            }
          })       
    }

    const handleVerify = id => {
        fetch(`https://used-products-resale-market-server-eight.vercel.app/users/sellers/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        refetch()})
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verified</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sellers.map((seller, i)=> <tr>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
          {
            seller && seller.verified?
             <td><button className='btn' disabled>Verified</button></td> 
             :
             <td> <button onClick={() => handleVerify(seller._id)} className='btn btn-accent text-white'>Verify</button> </td>
          }
           <td> <button onClick={()=> handleDelete(seller._id)}  className='btn btn-error text-white'>Delete</button> </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;
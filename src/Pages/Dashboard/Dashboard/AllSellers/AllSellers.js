import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../../Shared/Loader/Loader';
import AllSeller from './AllSeller';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?type=Seller`);
            const data = await res.json();
            return data
        }
    })

    if(isLoading){
        return <Loader/>
    }

    const handleVerify = id => {
        fetch(`http://localhost:5000/users/sellers/${id}`, {
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
             <button className='btn' disabled>Verified</button>
             :
             <td> <button onClick={() => handleVerify(seller._id)} className='btn btn-accent text-white'>Verify</button> </td>
          }
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;
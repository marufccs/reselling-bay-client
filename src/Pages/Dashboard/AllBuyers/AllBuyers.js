import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const AllBuyers = () => {
    const { data: buyers = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?type=Buyer`);
            const data = await res.json();
            return data
        }
    })

    if(isLoading){
        return <Loader/>
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
      </tr>
    </thead>
    <tbody>
      {
        buyers.map((buyer, i)=> <tr>
            <th>{i+1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;
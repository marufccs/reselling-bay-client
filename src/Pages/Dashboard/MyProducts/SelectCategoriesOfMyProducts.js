import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import SelectCategory from "../AddProduct/SelectCategory";


const SelectCategoriesOfMyProducts = () => {

    const [testData, setTestData] = useState(' ');
    
    const { data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-market-server-eight.vercel.app/categories`);
            const data = await res.json();
            return data
        }
    })
    
    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
                 <h2 className='text-3xl font-semibold mt-12'>Select the category to manage your products</h2>
                 <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-24'>
                    {
                        categories.map(category => <SelectCategory key={category._id} testData={testData} setTestData={setTestData} category={category}></SelectCategory>  )
                    }
                 </div>
        </div>
    );
};

export default SelectCategoriesOfMyProducts;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const data = useLoaderData();
    // console.log(data);

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    })
    // console.log(categories);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        // const img= form.img.value;
        const price= form.price.value;
        const condition= form.condition.value;
        const number= form.number.value;
        const location= form.location.value;
        const originalPrice= form.originalPrice.value;
        const resalePrice= form.resalePrice.value;
        const purchaseYear= form.purchaseYear.value;
        const description= form.description.value;
        const product = {
            productName: name,
                // productImg: imgData.data.url,
                productPrice: price,
                productCondition: condition,
                sellerPhoneNumber: number,
                location: location,
                productOriginalPrice: originalPrice,
                productResalePrice: resalePrice,
                productYearOfPurchase: purchaseYear,
                productDescription: description

            }

            console.log(product);
        // const image = data.img[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
        //         console.log(imgData.data.url);
               

                // // save doctor information to the database
                // fetch('http://localhost:5000/doctors', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json', 
                //         authorization: `bearer ${localStorage.getItem('accessToken')}`
                //     },
                //     body: JSON.stringify(product)
                // })
                // .then(res => res.json())
                // .then(result =>{
                //     console.log(result);
                   
                // })
            }
        // })
    // }

    return (
        <div>
            <h2 className='text-3xl font-semibold mt-12'>Add Your Product Here</h2>
            <div className='lg:mx-auto'>
            <form onClick={handleAddProduct} className='grid grid-cols-1 lg:ml-96 sm:mx-auto gap-3 mt-10'>

                        <input type="text" name='name'  placeholder="Product Name" className="input sm:w-3/4 lg:w-1/2 input-bordered" />
{/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                  

                       
                        <input type="file" name='img'  placeholder="Product Image" className="input sm:w-3/4 lg:w-1/2 input-bordered" />
{/* {errors.img && <p className='text-red-500'>{errors.img.message}</p>} */}
                     

                        <input  type="price" name='price' placeholder="Product Price" className="input sm:w-3/4 lg:w-1/2 input-bordered" />
{/* {errors.price && <p className='text-red-500'>{errors.price.message}</p>} */}

                        <select name='condition' className="select select-bordered sm:w-3/4 lg:w-1/2">
                        <option disabled selected>Product Condition</option>
                         <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        </select>
{/* {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>} */}

                        <input type="text" name='number' placeholder="Your Phone Number" className="input sm:w-3/4 lg:w-1/2 input-bordered" />
{/* {errors.number && <p className='text-red-500'>{errors.number.message}</p>} */}

                        <input type="text" name='location' placeholder="Your Location" className="input sm:w-3/4 lg:w-1/2 input-bordered" required/>
{/* {errors.location && <p className='text-red-500'>{errors.location.message}</p>} */}

                        <input type="text" name='originalPrice'  placeholder="Original Price" className="input sm:w-3/4 lg:w-1/2 input-bordered" required/>
{/* {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>} */}

                        <input type="text" name='resalePrice' placeholder="Resale Price" className="input sm:w-3/4 lg:w-1/2 input-bordered" required/>
{/* {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>} */}

                        <input type="text" name='purchaseYear' placeholder="Year of Purchase" className="input sm:w-3/4 lg:w-1/2 input-bordered" required/>
{/* {errors.yearOfPurchase && <p className='text-red-500'>{errors.yearOfPurchase.message}</p>} */}

                        <textarea name='description' className="textarea textarea-bordered sm:w-3/4 lg:w-1/2" placeholder="Product Description"></textarea>

                        <br />

                        <input className='btn btn-accent sm:w-3/4 lg:w-1/2' type="submit" value="Submit" />
                    </form>
            </div>
        </div>
    );
};

export default AddProduct;
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import {addToBasket , removeFromBasket} from '../slices/basketSlice'

function CheckoutItem({
    id, 
    title, 
    price, 
    description, 
    category, 
    image, 
    rating, 
    isprime
}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const item = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image, 
            rating, 
            isprime 
        };
        dispatch(addToBasket(item));
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    };

    return (
        <div className="grid grid-cols-5 bg-white p-5">
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            <div className="col-span-3 mx-5">
                <div>{title}</div>
                <div className="flex text-yellow-400">
                {Array(rating).fill().map((_,i) => (
                    <StarIcon width={16} height={16}/>
                ))}
                </div>

                <div className="line-clamp-3  text-xs md:text-sm my-2">
                    {description}
                </div>
                
                <div>
                    <Currency quantity={price}/>
                </div>
                {isprime && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" loading="lazy" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">Free Next-day Delivery </p>
                    </div>
                )}
            </div>

            <div className="flex flex-col text-sm space-y-2 my-auto">
                <button className="button" onClick={addItemToBasket}>Add to Cart</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem;

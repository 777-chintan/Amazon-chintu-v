import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'
import Header from '../components/Header'
import { selectItems,selectTotal } from '../slices/basketSlice'
import { useSession } from 'next-auth/client';
import Currency from "react-currency-formatter";


function Checkout() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    return (
        <div className="bg-gray-100">
            <Header />
 
            <main className="lg:flex max-w-screen-xl mx-auto">
                {/* checkout items */}
                <div className="flex-grow shadow-sm mx-5">
                    <Image 
                        src="http://links.papareact.com/ikj"
                        height={250}
                        width={1020}
                        objectFit="contain"
                    />

                    <div className="flex flex-col space-y-10 p-5 bg-white" >
                        <h1 className="text-3xl border-b pb-4">
                        {items.length>0?"Your Basket":"Basket is empty"}
                        </h1>
                    </div>

                    <div >
                        {items.map((item,i) =>(
                            <CheckoutItem 
                                key={i}
                                id={item.id} 
                                title={item.title} 
                                price={item.price}
                                description={item.description} 
                                category={item.category}
                                image={item.image}
                                rating={item.rating} 
                                isprime={item.isprime}
                            />
                        ))}
                    </div>

                </div>

                {/* checkout right side */}
                <div className="bg-white flex flex-col p-10">
                    {items.length > 0 && (
                        <>
                            <h2 className="flex whitespace-nowrap">Subtotal ({items.length} items) : {
                                <span className="font-bold">
                                    <Currency quantity={total} />
                                </span>
                            } </h2>
                            <button disabled={!session} className={`button mt-2 whitespace-nowrap my-auto ${
                                !session && 'from-gray-300 to-gray-500 text-black border-gray-200 cursor-not-allowed'
                                }`}>
                                {!session ? "Sign In to Checkout":"Checkout"}
                            </button>
                        </>

                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";


const ProductsByBrand = () => {

    const products = useLoaderData();
    console.log(products);

    const [isSeeMore, setIsSeeMore] = useState(false);
    const [isSeeLess, setIsSeeLess] = useState(false);

    return (
        <div className="max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-20">
            
        <Banner></Banner>
           
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                products ? isSeeMore ? isSeeLess ? products.slice(0, 6).map(product => <ProductCard key={product._id} product={product}></ProductCard>) :  products.map(product => <ProductCard key={product._id} product={product}></ProductCard>): products.slice(0, 6).map(product => <ProductCard key={product._id} product={product}></ProductCard>): ""
            }
            
            </div>
            
            
            <div className="text-center my-5">
            {
                products ? products.length > 6 &&(isSeeMore ? <button className="bg-red-300 px-2 py-1 rounded-lg " onClick={()=> {setIsSeeLess(!isSeeLess)
                setIsSeeMore(false)}}>See Less</button> : <button className="bg-green-300 px-2 py-1 rounded-lg " onClick={()=> {setIsSeeMore(!isSeeMore)
                setIsSeeLess(false)}} >See More</button> ):""
            }
            </div>
           
            
            
        </div>
        // <div>
        //     {
        //     products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        // }
        // </div>
    );
};

export default ProductsByBrand;
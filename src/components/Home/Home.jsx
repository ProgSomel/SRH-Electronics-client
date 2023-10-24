import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { DiApple } from 'react-icons/di';
import { FcGoogle } from 'react-icons/fc';
import {SiSamsung, SiOneplus, SiHuawei, SiAsus } from 'react-icons/si';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-8">
                <h1 className="text-5xl font-bold italic text-orange-300 text-center">Shop by Brands</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-12  ">
                    <NavLink to='/brands/apple'> <div className="flex items-center gap-2 text-2xl font-semibold"><DiApple></DiApple>Apple </div></NavLink>

                    <NavLink to='/brands/samsung'> <div className="flex items-center gap-2 text-2xl font-semibold text-blue-500"><SiSamsung></SiSamsung>SAMSUNG</div></NavLink>

                    <NavLink to='/brands/oneplus'> <div className="flex items-center gap-2 text-2xl font-semibold text-red-500"><SiOneplus></SiOneplus> Oneplus</div></NavLink>

                    <NavLink to='/brands/google'> <div className="flex items-center gap-2 text-2xl font-semibold text-yellow-500"><FcGoogle></FcGoogle> Google</div></NavLink>

                    <NavLink to='/brands/huawei'> <div className="flex items-center gap-2 text-2xl font-semibold text-black"><span className="text-red-400"><SiHuawei></SiHuawei></span> Huawei</div></NavLink>

                    <NavLink to='/brands/asus'> <div className="flex items-center gap-2 text-2xl font-semibold text-gray-500"><span className="text-red-400"><SiAsus></SiAsus></span> Asus</div></NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
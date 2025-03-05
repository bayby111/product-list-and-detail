// import HeroSection from "Components/Banner/HeroSection";
// import AboutUs from "Components/Home/AboutUs";
// import BlogNews from "Components/Home/BlogNews";
// import ServiceInfo from "Components/Home/ServiceInfo";
// import Testimonials from "Components/Home/Testimonials";
// import ProductSection from "Components/Product/ProductSection";
import { useState } from "react";

const HomeView = () => {

    // const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 8, 9, 10]);
    var ar = [15, 2, 30, 4, 6, 17, 50, 2];
    const [second, setSecond] = useState([]);

    const handleSort=()=>{
        const FindSecondLargest = [...new Set(ar)];
        FindSecondLargest.sort((a,b)=> a - b);
        setSecond(FindSecondLargest[5]);
    }


    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                    <h3 className=" text-gray-800"> Hello sLe Minh Khang Test</h3>
                    <label className="mb-2 text-gray-600 block">
                       danh sách một mảng để tìm số lớn thứ 2 trong array
                    </label>
                    
                    <div className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <span>{JSON.stringify(ar)}</span>
                    </div>
                    <button
                    onClick={handleSort}
                        className="w-60 h-12 mt-4 bg-slate-500 text-white font-semibold rounded-lg border border-gray-700 hover:bg-slate-600 active:bg-slate-700 transition duration-300"
                    >
                        Tìm số lớn thứ hai
                    </button>
                    <div>display số lớn thứ 2 trong mãng là  {second}</div>
                </div>
            </div>


        </div>
    );
}
export default HomeView;
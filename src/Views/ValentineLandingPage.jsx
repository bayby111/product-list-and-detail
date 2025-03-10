import React from "react";
import Banner from "component/ValentineLanding/Banner";
import FallingFlower from "component/ValentineLanding/FallingFlower";
import FlashSaleTimer from "component/ValentineLanding/FlashSaleTimer";
import ExclusiveBenefits from "component/ValentineLanding/ExclusiveBenefits";
import Product1 from "component/ValentineLanding/Product1";
import Product2 from "component/ValentineLanding/Product2";
import Product3 from "component/ValentineLanding/Product3";
import Product4 from "component/ValentineLanding/Product4";
import Product5 from "component/ValentineLanding/Product5";
import Product6 from "component/ValentineLanding/Product6";




const ValentineLandingPage = () => {
    

    return (
        <div className=" bg-white min-h-screen font-sans relative overflow-hidden animate-fadeIn" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BQKlMe5yOun1PAPpZ00yQMRNIjlGrszxJA&s')" }}>
            
            {/* banner Header */}
            <Banner/>

             {/* falling flower */}
              <FallingFlower/>

            <div className="container mx-auto max-w-6xl px-4 space-y-4">

                {/* Flash Sale Timer;*/}
               <FlashSaleTimer/>

               {/* Exclusive Benefits */}
                <ExclusiveBenefits/>


                {/* Product Section 1 */}
                <Product1/>

                { /* Product Section 2 */}
                <Product2/>

                { /* Product Section 3 */}
                <Product3/>
               
                { /* Product Section 4 */}
                <Product4/>
               
                { /* Product Section 5 */}
                <Product5/>


                { /* Product Section 6 */}
                <Product6/>

            </div>

        </div>
    );
};


export default ValentineLandingPage;

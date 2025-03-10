import React from "react";
import banner_valentine from "../../asset/image/banner-valentine.png";
const Banner = () => {
    return(
      <div>
          {/* banner Header */}
         <div className="text-center w-full h-[360px] py-10 bg-gray-100 shadow-md" style={{ backgroundImage: `url(${banner_valentine})` }}></div>
      </div>
    );
}
export default Banner;
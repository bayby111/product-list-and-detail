import React from "react";
import { useNavigate } from "react-router-dom";
import gift from "../../asset/image/giftbox.png"

const FlashSaleTimer = () => {

      const navigate = useNavigate();

    return (
        <div>
            <div className="text-center py-16 px-6">
                <div className="flex flex-row  items-center justify-center gap-2 sm:gap-4  whitespace-nowrap">

                    {[
                        { value: "2", label: "NGÀY" },
                        { value: "7", label: "GIỜ" },
                        { value: "14", label: "PHÚT" },
                        { value: "36", label: "GIÂY" },
                    ].map((item, index) => (
                        <div key={index} className="w-20 h-20 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold hover:animate-shake">
                            <img src={gift} alt="Hộp quà" className="w-12 h-12 animate-bounce" />
                            <div className="flex flex-col items-center justify-center bg-white text-red-500 w-16 h-12 rounded-md shadow-inner">
                                <span className="text-2xl font-bold">{item.value}</span>
                                <span className="text-xs font-semibold">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-2" >
                    <h2 className="text-3xl font-semibold text-gray-700">Trao yêu thương - Đón nhận hạnh phúc</h2>
                    <p className="text-gray-500 mt-3">Ưu đãi đặc biệt đến 30% khi đặt hàng ngay hôm nay!</p>
                    <button onClick={() => navigate("/product")} className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-pink-700 transform transition duration-300 hover:scale-105">
                        Mua ngay
                    </button>
                </div>


            </div>
        </div>
    );

}

export default FlashSaleTimer;
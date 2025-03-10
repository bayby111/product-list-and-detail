import React from "react";
const ExclusiveBenefits = () => {
    return (   
        <div>
     <div className="bg-yellow-50  border-4 border-pink-500 rounded-3xl p-6 text-center shadow-lg">

                    <div className="flex flex-col items-center justify-center">
                        <div className="relative  bg-gradient-to-b from-yellow-300 to-yellow-500 text-red-600 px-10 py-6 rounded-full shadow-lg max-w-3xl text-center border-4 border-yellow-500">
                            <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
                                9 Đặc Quyền Mua Hàng
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-red-700 mt-2 drop-shadow-lg">
                                Tại Bạch Long Mobile
                            </p>
                        </div>

                        {/* Danh sách đặc quyền */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { icon: "https://i.imgur.com/VJPVGq6.png", title: "Trúng Vàng 9999", url: "/trung-vang-9999" },
                                { icon: "https://i.imgur.com/5jKXABm.png", title: "Trúng iPhone 16e", url: "/trung-iphone-16e" },
                                { icon: "https://i.imgur.com/xIhkl3P.png", title: "100% Trúng Quà", url: "/trung-qua" },
                                { icon: "https://i.imgur.com/SmByFxf.png", title: "Giảm Đến 60%", url: "/giam-60" },
                                { icon: "https://i.imgur.com/Vz1JhZz.png", title: "Miễn Phí Giao Hàng", url: "/mien-phi-giao-hang" },
                                { icon: "https://i.imgur.com/DVxzqgT.png", title: "Giảm 300K", url: "/giam-300k" },
                                { icon: "https://i.imgur.com/PExhGqz.png", title: "Trả Góp 0%", url: "/tra-gop-0" },
                                { icon: "https://i.imgur.com/gmt51cq.png", title: "Trợ Giá 100%", url: "/tro-gia-100" },
                                { icon: "https://i.imgur.com/Fn2AdZy.png", title: "Bảo Hành 60 Ngày", url: "/bao-hanh-60-ngay" },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3 transition transform hover:scale-105 hover:bg-orange-600 cursor-pointer"
                                >
                                    <img src={item.icon} alt={item.title} className="w-10 h-10" />
                                    <span className="text-lg font-semibold">{item.title}</span>
                                </a>
                            ))}
                        </div>

                    </div>


                </div>
        </div>    
);
}

export default ExclusiveBenefits;
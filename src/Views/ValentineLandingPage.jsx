import { fetchProducts } from "API/GetProductQuery";
import { ProductContext } from "context/contextProduct";
import React, { useContext, useEffect, useState } from "react";
// import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
// import { SiZalo } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { formatVND } from "utils/formatTime/formatVND";
import gift from "../asset/image/giftbox.png"

const ValentineLandingPage = () => {
    const [products, setProducts] = useState([]);
    const { setProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProducts(10, 1).then((data) => {
            if (data.items) {
                setProducts(data.items[0]?.items || []);
                setProduct(data.items[0]?.items);
                localStorage.setItem("product", JSON.stringify(data.items[0]?.items));
            }
        });
        const createFallingFlowers = () => {
            const container = document.querySelector(".falling-flowers");
            if (!container) return;

            for (let i = 0; i < 10; i++) {
                const flower = document.createElement("div");
                flower.className = "flower";
                flower.style.left = `${Math.random() * 100}vw`; // Rơi trên toàn bộ chiều rộng
                flower.style.animationDuration = `${3 + Math.random() * 5}s`;
                flower.innerHTML = "🌸"; // Hoặc dùng ảnh

                container.appendChild(flower);

                // Xóa hoa sau khi rơi hết
                setTimeout(() => {
                    flower.remove();
                }, 8000);
            }
        };

        const interval = setInterval(createFallingFlowers, 1500); // Cứ 1s thêm 5 hoa mới
        return () => clearInterval(interval); // Cleanup khi component bị hủy

    }, []);

    return (
        <div className=" bg-white min-h-screen font-sans relative overflow-hidden animate-fadeIn" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BQKlMe5yOun1PAPpZ00yQMRNIjlGrszxJA&s')" }}>
            {/* Falling Flowers Effect */}
            <div className="falling-flowers"></div>
            {/* Header */}
            <div className="text-center py-10 bg-gray-100 shadow-md" style={{ backgroundImage: "url('https://www.shutterstock.com/image-vector/set-valentines-day-greeting-card-260nw-2579082343.jpg')" }}>
                <h1 className="text-4xl font-bold text-white">Valentine Trắng - Yêu thương thuần khiết</h1>
                <p className="text-gray-600 mt-2">Gửi tặng món quà tinh tế cho người bạn yêu thương!</p>
            </div>

            {/* Hero Section */}
            <section className="text-center py-16 px-6">
                <h2 className="text-3xl font-semibold text-gray-700">Trao yêu thương - Đón nhận hạnh phúc</h2>
                <p className="text-gray-500 mt-3">Ưu đãi đặc biệt đến 30% khi đặt hàng ngay hôm nay!</p>
                <button onClick={()=>navigate("/product")} className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-pink-700 transform transition duration-300 hover:scale-105">
                    Mua ngay
                </button>


            </section>

            {/* banner gifts */}
            <div className="relative flex flex-col flex-wrap items-center justify-center max-w-full gap-6h-60 border border-red-600 bg-yellow-300 rounded-full">
                <div className="flex items-center px-4 py-8 gap-6">
                    <div className="w-20 h-20 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold ">
                        <img src={gift} alt="Hộp quà" className="w-20 h-20 animate-bounce" />
                        <span >2</span>
                        <span >NGÀY</span>
                    </div>

                    <div className="w-20 h-20 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold ">
                        <img src={gift} alt="Hộp quà" className="w-20 h-20 animate-bounce" />
                        <span>7</span>
                        <span>GIỜ</span>
                    </div>

                    <div className="w-20 h-20 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold">
                        <img src={gift} alt="Hộp quà" className="w-20 h-20 animate-bounce" />
                        <span>14</span>
                        <span>PHÚT</span>
                    </div>

                    <div className="w-20 h-20 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold hover:animate-shake">
                        <img src={gift} alt="Hộp quà" className="w-20 h-20 animate-bounce" />
                        <span>36</span>
                        <span>GIÂY</span>
                    </div>
                </div>
                <div className="m-4">
                    <img src="https://cdn.nhanlucnganhluat.vn/uploads/images/6B2955B0/logo/2019-06/bach-long-logo.jpg" alt="Hộp quà" className="w-80 h-20 rounded-full" />
                </div>
                <div >
                    <h4 className="text-4xl font-bold text-red-500">🎁 MUA NGAY - NHẬN QUÀ LIỀN TAY 🎁</h4>
                    <p className="text-lg mt-4 font-medium">
                        💕 **Đặt hàng hôm nay** và nhận ngay <span className="text-red-700 font-extrabold text-2xl">QUÀ TẶNG ĐẶC BIỆT</span> 🎀!
                    </p>
                    <p className="text-md mt-2 bg-white text-red-600 px-4 py-2 rounded-full font-semibold animate-bounce">
                        🛍️ **Tặng ngay 1 Airpod 2 hoặc voucher trị giá 600K** khi mua hàng!
                    </p>
                </div>
            </div>


            {/* Product Section 1 */}
            <div className="p-4 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((item) => (
                        <div
                            key={item.product.sku}
                            onClick={() => navigate(`/product-List/${item.product.sku}`)}
                            className="border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300 relative p-4 hover: border-red-300 hover:ring-2 hover:ring-red-400 cursor-pointer "
                        >
                            <div className="group p-6  text-center transition duration-300  hover:scale-105  relative">
                                <div className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded border border-red-600 font-bold">
                                    Trả góp 0%
                                </div>
                                <div className="relative mt-8">
                                    <img
                                        src={item.product.image.url}
                                        alt={item.product.name}
                                        className="w-60 h-60 object-cover border-b-2 mx-auto border-yellow-500  hover:-translate-y-2 transition group-hover:scale-110 "
                                    />
                                    <img
                                        src="https://cdn-media.sforum.vn/storage/app/media/trannghia/qua-8-3-3.jpg"
                                        alt="sale"
                                        className="absolute bottom-2 left-2 w-40 group-hover:scale-110   "
                                    />
                                </div>
                                <div className="mt-3 p-2 bg-red-50 rounded-md">
                                    <span className="font-bold text-xs mt-2 text-gray-800 ">
                                        {item.product.name}
                                    </span>
                                    <p className="text-red-600 font-extrabold text-base mt-1">
                                        {formatVND(item.sale_price)}
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-400 line-through text-xs">
                                            {formatVND(item.price_original)}
                                        </p>
                                        <span className="bg-white text-red-600 border border-red-600 text-xs px-2 py-1 rounded font-bold">-36%</span>
                                    </div>
                                    <div className="text-center px-2 py-1 mt-4 w-full bg-red-200 text-red-500 text-xs rounded-lg">
                                        <span>
                                            Giá thu bảng giá bán - Trợ giá lên đến 100%
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>
            </div>

            {/* banner Product Section disscount */}
            <div className="relative flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 px-8 rounded-full shadow-xl border-4 border-pink-400">
                <span className="text-4xl font-extrabold text-white drop-shadow-lg">COUPON</span>
                <div className="ml-4 text-right">
                    <p className="text-lg font-bold text-white">Giảm ngay</p>
                    <p className="text-3xl font-extrabold text-yellow-300">800K-300K</p>
                </div>

            </div>

            {/* Product Section 2 */}
            <div className="p-4 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((item) => (
                        <div
                            key={item.product.sku}
                            onClick={() => navigate(`/product-List/${item.product.sku}`)}
                            className="border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300 relative p-4 hover: border-red-300 hover:ring-2 hover:ring-red-400 cursor-pointer "
                        >
                            <div className="group bg-white p-6 text-center transition duration-300  hover:scale-105  relative">
                                <div className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded border border-red-600 font-bold">
                                    Trả góp 0%
                                </div>
                                <div className="relative mt-8">
                                    <img
                                        src={item.product.image.url}
                                        alt={item.product.name}
                                        className="w-60 h-60 object-cover border-b-2 mx-auto border-yellow-500  hover:-translate-y-2 transition group-hover:scale-110 "
                                    />
                                    <img
                                        src="https://cdn-media.sforum.vn/storage/app/media/trannghia/qua-8-3-3.jpg"
                                        alt="sale"
                                        className="absolute bottom-2 left-2 w-40 group-hover:scale-110   "
                                    />
                                </div>
                                <div className="mt-3 p-2 bg-red-50 rounded-md">
                                    <span className="font-bold text-xs mt-2 text-gray-800 ">
                                        {item.product.name}
                                    </span>
                                    <p className="text-red-600 font-extrabold text-base mt-1">
                                        {formatVND(item.sale_price)}
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-400 line-through text-sm">
                                            {formatVND(item.price_original)}
                                        </p>
                                        <span className="bg-white text-red-600 border border-red-600 text-xs px-2 py-1 rounded font-bold">-36%</span>
                                    </div>
                                    <div className="text-center px-2 py-1 mt-4 w-full bg-red-200 text-red-500 text-xs rounded-lg">
                                        <span>
                                            Giá thu bảng giá bán - Trợ giá lên đến 100%
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>
            </div>

            {/* banner Product Section big sale */}
            <div className="relative flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 px-8 rounded-full shadow-xl border-4 border-pink-400">

                {/* Nơ trang trí */}
                <img src="https://i.imgur.com/Zy6DkP1.png" alt="Bow" className="absolute left-4 w-12 h-12" />


                <div className="absolute top-0 -mt-3 bg-white px-4 py-1 rounded-full text-red-500 text-sm font-bold shadow-md">
                    SINH NHẬT THÁNG 3
                </div>


                <span className="text-3xl font-extrabold text-white drop-shadow-lg">TẶNG NÀNG <span className="text-yellow-300">800K</span></span>


                <img src="https://i.imgur.com/7zZkDZf.png" alt="Hearts" className="absolute right-4 w-12 h-12" />

            </div>

            {/* Product Section 3 */}
            <div className="p-4 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((item) => (
                        <div
                            key={item.product.sku}
                            onClick={() => navigate(`/product-List/${item.product.sku}`)}
                            className="border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300 relative p-4 hover: border-red-300 hover:ring-2 hover:ring-red-400 cursor-pointer "
                        >
                            <div className="group bg-white p-6 rounded-lg text-center transition duration-300  hover:scale-105  relative">
                                <div className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded border border-red-600 font-bold">
                                    Trả góp 0%
                                </div>
                                <div className="relative mt-8">
                                    <img
                                        src={item.product.image.url}
                                        alt={item.product.name}
                                        className="w-60 h-60 object-cover border-b-2 mx-auto border-yellow-500  hover:-translate-y-2 transition group-hover:scale-110 "
                                    />
                                    <img
                                        src="https://cdn-media.sforum.vn/storage/app/media/trannghia/qua-8-3-3.jpg"
                                        alt="sale"
                                        className="absolute bottom-2 left-2 w-40 group-hover:scale-110   "
                                    />
                                </div>
                                <div className="mt-3 p-2 bg-red-50 rounded-md">
                                    <span className="font-bold text-xs mt-2 text-gray-800 ">
                                        {item.product.name}
                                    </span>
                                    <p className="text-red-600 font-extrabold text-base mt-1">
                                        {formatVND(item.sale_price)}
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-400 line-through text-sm">
                                            {formatVND(item.price_original)}
                                        </p>
                                        <span className="bg-white text-red-600 border border-red-600 text-xs px-2 py-1 rounded font-bold">-36%</span>
                                    </div>
                                    <div className="text-center px-2 py-1 mt-4 w-full bg-red-200 text-red-500 text-xs rounded-lg">
                                        <span>
                                            Giá thu bảng giá bán - Trợ giá lên đến 100%
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>
            </div>

            {/* Customer Reviews */}
            <section className="bg-gray-100 py-12 px-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Khách hàng nói gì?</h2>
                <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-pink-100 p-6 rounded-lg shadow-md text-center w-80">
                            <p className="italic">“{review.text}”</p>
                            <p className="mt-3 font-semibold">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <div className="bg-yellow-300 border-4 border-pink-500 rounded-lg p-6 text-center shadow-lg">

                {/* Tiêu đề */}
                <h2 className="text-3xl font-extrabold text-red-600 drop-shadow-lg">
                    🎉 9 Đặc Quyền Mua Hàng 🎉
                </h2>
                <p className="text-xl text-red-500 font-semibold mt-2">
                    Tại <span className="text-red-700 font-bold">Bạch Long Mobile</span>
                </p>

                {/* Danh sách đặc quyền */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                    {/* Đặc quyền 1 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/VJPVGq6.png" alt="Gold" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Trúng Vàng 9999</span>
                    </div>

                    {/* Đặc quyền 2 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/5jKXABm.png" alt="iPhone" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Trúng iPhone 16e</span>
                    </div>

                    {/* Đặc quyền 3 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/xIhkl3P.png" alt="Gift" className="w-10 h-10" />
                        <span className="text-lg font-semibold">100% Trúng Quà</span>
                    </div>

                    {/* Đặc quyền 4 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/SmByFxf.png" alt="Discount" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Giảm Đến 60%</span>
                    </div>

                    {/* Đặc quyền 5 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/Vz1JhZz.png" alt="Free Shipping" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Miễn Phí Giao Hàng</span>
                    </div>

                    {/* Đặc quyền 6 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/DVxzqgT.png" alt="300k Discount" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Giảm 300K</span>
                    </div>

                    {/* Đặc quyền 7 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/PExhGqz.png" alt="Installment" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Trả Góp 0%</span>
                    </div>

                    {/* Đặc quyền 8 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/gmt51cq.png" alt="Exchange Support" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Trợ Giá 100%</span>
                    </div>

                    {/* Đặc quyền 9 */}
                    <div className="bg-orange-500 text-white py-3 px-4 rounded-lg shadow-md flex items-center space-x-3">
                        <img src="https://i.imgur.com/Fn2AdZy.png" alt="Warranty" className="w-10 h-10" />
                        <span className="text-lg font-semibold">Bảo Hành 60 Ngày</span>
                    </div>

                </div>

                {/* CTA - Nút nhận ưu đãi */}
                <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-red-500 transition duration-300 shadow-md">
                    Nhận Ưu Đãi Ngay
                </button>

            </div>

        </div>
    );
};

const reviews = [
    { text: "Quà tặng đẹp, bạn gái tôi rất thích!", author: "Minh T." },
    { text: "Giao hàng nhanh chóng, chất lượng tốt!", author: "Linh P." },
    { text: "Dịch vụ chu đáo, chắc chắn sẽ quay lại mua hàng!", author: "Hải D." },
];

export default ValentineLandingPage;

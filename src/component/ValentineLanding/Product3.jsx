import { fetchProducts } from "API/GetProductQuery";
import { ProductContext } from "context/contextProduct";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatVND } from "utils/formatTime/formatVND";

const Product3 = () => {

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
    }, []);
    return (<div>
        <div className="p-4 rounded-3xl ">

            {/* Banner 3 - Giảm giá Valentine Trắng */}
            <div className="flex justify-center w-full">
                <div className="relative flex items-center justify-between w-full max-w-screen-lg px-12 py-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg border-4 border-pink-400  transition transform duration-300 min-h-[100px]">
                    <img src="https://i.imgur.com/NM50Xa5.png" alt="Nơ" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 md:w-16 md:h-16" />
                    <div className="flex flex-col text-center text-white">
                        <p className="text-lg md:text-xl font-bold bg-white text-pink-600 px-6 py-1 rounded-full uppercase">
                            SINH NHẬT THÁNG 3
                        </p>
                        <p className="text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                            TẶNG NÀNG <span className="text-yellow-300 text-4xl md:text-6xl">800K</span>
                        </p>
                    </div>
                    <img src="https://i.imgur.com/vb3O2F3.png" alt="Trái tim" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 animate-pulse" />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 mt-4">
                {products.map((item) => (
                    <div
                        key={item.product.sku}
                        onClick={() => navigate(`/product-List/${item.product.sku}`)}
                        className="border border-pink-300 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 hover:scale-105 relative p-3 hover:ring-2 hover:ring-red-400 cursor-pointer group "
                    >
                        {/* Tag Khuyến Mãi */}
                        <div className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded-tr-xl rounded-bl-xl  border border-red-600 font-bold">
                            Trả góp 0%
                        </div>

                        {/* Hình ảnh sản phẩm */}
                        <div className="relative flex justify-center items-center pt-6 mt-8">
                            <img
                                src={item.product.image.url}
                                alt={item.product.name}
                                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover border-b-2 mx-auto border-red-300  hover:-translate-y-2 transition group-hover:scale-110"
                            />
                        </div>

                        {/* Thông tin sản phẩm */}
                        <div className="mt-3 p-2 bg-red-50 rounded-md text-center">
                            <p className="font-semibold text-xs md:text-sm lg:text-base sm:truncate">
                                {item.product.name}
                            </p>
                            <p className="text-red-600 font-bold text-lg md:text-xl">
                                {formatVND(item.sale_price)}
                            </p>

                            <div className="flex items-center justify-center space-x-2 text-xs md:text-sm">
                                <p className="text-gray-400 line-through">
                                    {formatVND(item.price_original)}
                                </p>
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded border border-red-500 font-bold">
                                    -{item.discountPercentage}%
                                </span>
                            </div>
                            <div className="text-center px-2 py-1 mt-4 w-full bg-red-200 text-red-500 text-xs rounded-lg">
                                <span>
                                    Giá thu bảng giá bán - Trợ giá lên đến 100%
                                </span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button className="bg-white text-black text-lg font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-red-500 hover:scale-105 active:bg-pink-700">
                    Xem Thêm
                </button>
            </div>
        </div>
    </div>);

}

export default Product3;
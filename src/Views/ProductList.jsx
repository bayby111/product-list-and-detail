import { fetchProducts } from "API/GetProductQuery";
import { ProductContext } from "context/contextProduct";
import React, { useContext, useEffect, useState } from "react";
import tang_airpod from '../asset/image/tang_airpod.jpg';
import { useNavigate } from "react-router-dom";
import { formatVND } from "utils/formatTime/formatVND";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({ current_page: 1, page_size: 10, total_pages: 1 });
  const image_list = [
    { imageId: 1, url: "https://didongviet.vn/dchannel/wp-content/uploads/2023/03/hinh-anh-valentine-trang-didongviet-15.jpg" },
    { imageId: 2, url: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/3/14/loi-chuc-ngay-valentine-trang-14-3-14-17103812588931964034343-20-0-735-1144-crop-1710381978489681920316.jpg" },
    { imageId: 3, url: "https://didongviet.vn/dchannel/wp-content/uploads/2023/03/hinh-anh-valentine-trang-didongviet-cover.jpg" },
  ]
  const { setProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    fetchProducts(pageInfo.page_size, pageInfo.current_page).then((data) => {
      if (data.items) {
        setProducts(data.items[0]?.items || []);
        setProduct(data.items[0]?.items);
        localStorage.setItem("product", JSON.stringify(data.items[0]?.items));
        setPageInfo(data.page_info);
      }
    });
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [pageInfo.current_page, currentBanner]);

  const nextSlide = () => {
    setCurrentBanner((prevIndex) => (prevIndex + 1) % image_list.length);
  };

  const prevSlide = () => {
    setCurrentBanner((prevIndex) => (prevIndex - 1 + image_list.length) % image_list.length);
  };

  return (

    <div>
      {/* section landing page */}
      <div className="flex items-center justify-center p-8">
        <div className="border-red-600 relative w-full max-w-2xl mx-autoborder ">
         
          <img
            onClick={() => navigate("/valentinel-landing-page")}
            src={image_list[currentBanner].url}
            alt={`image-${image_list[currentBanner].imageId}`}
            className="w-full h-64 object-cover rounded-lg transition-opacity duration-500 cursor-pointer"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            ▶
          </button>

          {/* Chỉ số ảnh */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {image_list.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentBanner ? "bg-white" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* hiển thị danh sách sẩn phẩm */}
      <div className="container mx-auto p-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600 uppercase">
          Danh Sách Sản Phẩm
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <div
              key={item.product.sku}
              onClick={() => navigate(`/product-List/${item.product.sku}`)}
              className="border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300 relative p-4 hover: border-red-300 hover:ring-2 hover:ring-red-400 cursor-pointer "
            >
              <div className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded border border-red-600 font-bold">
                Trả góp 0%
              </div>
              <div className="relative mt-8">
                <img
                  src={item.product.image.url}
                  alt={item.product.name}
                  className="w-60 h-60 object-cover border-b-2 border-yellow-500  hover:-translate-y-2 "
                />
                <img
                  src={tang_airpod}
                  alt="sale"
                  className="absolute bottom-2 left-2 w-60"
                />
              </div>
              <div className="mt-3 p-2 bg-red-50 rounded-md">
                <div className="flex items-center space-x-2 text-sm text-black font-bold">
                  <span className="bg-yellow-400 px-1 py-0.5 rounded text-[10px]">🔔 Kết thúc: 03 Ngày - 12:26:10</span>
                </div>
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
                <p className="text-red-600 text-xs font-semibold mt-1">
                  Trả trước từ {formatVND(item.sale_price * 0.1)}
                </p>
                <div className="flex items-center space-x-2 mt-2 text-sm">
                  <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full ">
                    🔥 Còn 5/20 sản phẩm
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

        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            onClick={() =>
              setPageInfo((prev) => ({ ...prev, current_page: prev.current_page - 1 }))
            }
            disabled={pageInfo.current_page === 1}
          >
            Trang trước
          </button>
          <span className="px-4 py-2 font-semibold text-gray-700">
            {pageInfo.current_page} / {pageInfo.total_pages}
          </span>
          <button
            className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            onClick={() =>
              setPageInfo((prev) => ({ ...prev, current_page: prev.current_page + 1 }))
            }
            disabled={pageInfo.current_page >= pageInfo.total_pages}
          >
            Trang sau
          </button>
        </div>
      </div>
    </div>

  );
};


export default ProductList;

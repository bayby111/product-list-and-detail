import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__4.png",
  "https://cdn.viettelstore.vn/Images/Product/ProductImage/66855595.jpeg",
  "https://clickbuy.com.vn/uploads/pro/iphone-14-256gb-cu-dep-99-lg-197465.jpg",
  "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129",
];

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-90 border border-gray-500 p-4 rounded-xl flex flex-col relative">
      {/* Khung chứa ảnh */}
      <div className="relative flex justify-center items-center">
        {/* Ảnh chính */}
        <img src={images[currentImage]} alt="iPhone 15 Pro" className="w-80 h-80" />

        {/* Nút Previous */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={prevImage}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Nút Next */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={nextImage}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Danh sách ảnh nhỏ */}
      <div className="flex gap-2 mt-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${currentImage === index ? "border-yellow-500 scale-105" : "border-gray-300"
              }`}
            onClick={() => setCurrentImage(index)}
            alt={`Thumbnail ${index + 1}`} // Bổ sung alt để tránh cảnh báo
          />
        ))}
      </div>

    </div>
  );
}

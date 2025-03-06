import { ProductGallery } from "component/ProductGallery";
import { ProductContext } from "context/contextProduct";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatVND } from "utils/formatTime/formatVND";

const ProductDetail = () => {
  const { sku } = useParams();
  const { product } = useContext(ProductContext);
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [selectedStorage, setSelectedStorage] = useState("128GB");
  const [selectedColor, setSelectedColor] = useState("Blue Titanium");
  const [isExpanded, setIsExpanded] = useState(false);
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Máy cũ giá rẻ", path: "/may-cu-gia-re" },
    { name: "iPhone 15 Series", path: "/iphone-15-series" },
    { name: "iPhone 15 Pro", path: "/iphone-15-pro" },
    { name: "iPhone 15 Pro 128GB Chính Hãng 99%", path: "/iphone-15-pro-128gb" },
  ];
  const storages = ["128GB", "256GB", "512GB", "1TB"];
  const colors = [
    { name: "White Titanium", price: "18.490.000 VNĐ" },
    { name: "Natural Titanium", price: "18.490.000 VNĐ" },
    { name: "Black Titanium", price: "18.290.000 VNĐ" },
    { name: "Blue Titanium", price: "18.190.000 VNĐ" },
  ];
  const offers = [
    { icon: "💳", text: "[Tháng 3]: Cà thẻ MIỄN PHÍ 100% với Visa, MasterCard" },
    { icon: "🏠", text: "[Tháng 3]: Giảm đến 700.000 khi thanh toán qua Home Paylater" },
    { icon: "💰", text: "[Tháng 3]: Giảm đến 700.000 khi thanh toán qua Kredivo" },
    { icon: "🏦", text: "[Tháng 3]: Giảm đến 500.000 khi trả góp qua HD Saison, Home Credit, Mcredit, Shinhan" },
    { icon: "", text: "[Tháng 3]: Chấp nhận thanh toán qua Apple Pay" },
    { icon: "⚕️", text: "[Tháng 3]: Cung cấp dịch vụ bảo hành Apple Care" }
  ];

  useEffect(() => {
    const leftSection = document.getElementById("scrollable-section-left");
    const rightSection = document.getElementById("scrollable-section-right");
  
    const handleScroll = () => {
      const checkScrollEnd = (element) => {
        if (element) {
          const { scrollTop, scrollHeight, clientHeight } = element;
          return scrollTop + clientHeight >= scrollHeight - 20;
        }
        return false;
      };
  
      if (checkScrollEnd(leftSection) || checkScrollEnd(rightSection)) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };
  
    if (leftSection) leftSection.addEventListener("scroll", handleScroll);
    if (rightSection) rightSection.addEventListener("scroll", handleScroll);
  
    return () => {
      if (leftSection) leftSection.removeEventListener("scroll", handleScroll);
      if (rightSection) rightSection.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  if (!product) {
    return <p className="text-center mt-10 text-lg">Đang tải...</p>;
  }

  // Tìm sản phẩm theo SKU
  const productDetails = product.find((p) => p.product.sku === sku);
  console.log(productDetails);

  if (!productDetails) {
    return <p className="text-center mt-10 text-red-500 text-lg">Sản phẩm không tồn tại.</p>;
  }

  const handleBuyNow = () => {
    alert(`Bạn đã mua: ${productDetails.product.name} với giá ${productDetails.sale_price.toLocaleString()} đ`);
    // Thêm logic xử lý giỏ hàng hoặc thanh toán tại đây
  };
  const handleAddCart = () => {
    alert(`Bạn đã thêm: ${productDetails.product.name} với giá ${productDetails.sale_price.toLocaleString()} đ vào vỏ hàng thành cong`);
    // Thêm logic xử lý giỏ hàng hoặc thanh toán tại đây
  };

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-6 h-screen">
      {/* Phần bên trái - Thông tin sản phẩm */}
      <div
        id="scrollable-section-left"
        className="col-span-2 h-full overflow-y-auto p-4 bg-white shadow-lg rounded-lg"
      >
        <nav className="text-sm text-gray-600">
          <ul className="flex items-center space-x-1">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <Link
                  to={breadcrumb.path}
                  className={`hover:text-blue-500 ${index === breadcrumbs.length - 1 ? "text-gray-900 font-semibold" : ""
                    }`}
                >
                  {breadcrumb.name}
                </Link>
                {index !== breadcrumbs.length - 1 && <span className="mx-1">›</span>}
              </li>
            ))}
          </ul>
        </nav>

        {/* hiển thị danh sách hình ảnh sản phẩm */}
        <ProductGallery />
        {/* thông tin sẩn phẩm  */}

        <div className="mt-2 flex justify-between gap-4">
          <div className="w-1/2 border border-gray-300 text-sm rounded-md p-4">
            <span className="font-semibold">Thông tin sản phẩm</span>
            <p>
              Hàng được thu lại từ khách có nhu cầu bán lại, thu cũ đổi mới,
              ngoại hình đẹp 99% như máy mới.
            </p>
            <p>
              Bao test 60 ngày đổi trả tại Bạch Long Mobile nếu có lỗi do NSX (
              <Link
                className="text-red-500"
                to="https://bachlongmobile.com/promotion/tet-apple-bao-hanh-toan-dien/"
              >
                Khi nâng cấp gói bảo hành toàn diện
              </Link>
              )
            </p>
            <p>Bảo hành 12 tháng</p>
          </div>


          <div className="w-1/2 text-right">
            <span className="font-semibold">Có 7 cửa hàng có sản phẩm</span>
            <div className="border border-gray-300 rounded-xl text-sm p-4">
              <p>136 Trần Phú, P.4, Q.5 </p>
              <p>225 Trần Quang Khải, P.Tân Định, Q.1</p>
              <p>251 - 253 Trần Hưng Đạo, P.Cô Giang</p>
              <p>581 Nguyễn Thị Thập, P.Tân Phong</p>
              <p>316 - 318 Ba Tháng Hai, P.12, Q.10</p>
              <p>480 - 482 Quang Trung, P.10, Gò Vấp</p>
              <p>480 - 482 Quang Trung, P.10, Gò Vấp</p>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          {/* Tiêu đề chính */}
          <h2 className="text-2xl font-bold text-gray-900">
            Lý do nên mua <span className="text-black">{productDetails.product.name}</span>
          </h2>

          {/* Đoạn mô tả */}
          <p className="text-gray-700 mt-2">
            <strong>{productDetails.product.name}</strong> mang đến sự lựa chọn tối ưu cho người dùng muốn sở hữu công nghệ đỉnh cao với chi phí hợp lý. Dưới đây là những lý do bạn nên cân nhắc ngay:
          </p>

          {/* Danh sách gạch đầu dòng */}
          <ul className="list-disc pl-6 mt-4 text-gray-800">
            <li>
              <strong>Thiết kế cao cấp, đẳng cấp vượt trội:</strong> Sở hữu khung titanium bền bỉ và mặt lưng kính cường lực mờ, chiếc máy vẫn giữ được nét tinh tế như máy mới.
            </li>
            <li>
              <strong>Hiệu năng mạnh mẽ, xử lý mượt mà:</strong> Chip A17 Pro với tiến trình 3nm cho khả năng vận hành nhanh chóng và tiết kiệm năng lượng.
            </li>
            <li>
              <strong>Camera chất lượng hàng đầu:</strong> Hệ thống camera đa chức năng mang đến hình ảnh sắc nét, hỗ trợ sáng tạo mọi lúc, mọi nơi.
            </li>
            <li>
              <strong>Giá thành hấp dẫn:</strong> Sản phẩm cũ 99% giúp bạn tiết kiệm chi phí nhưng vẫn trải nghiệm đầy đủ tính năng cao cấp.
            </li>
            <li>
              <strong>Bảo hành và kiểm định rõ ràng:</strong> Các sản phẩm cũ thường được bảo hành tại cửa hàng, đảm bảo chất lượng cho người mua.
            </li>
          </ul>
        </div>
      </div>
      {/* nội dung bên phải */}
      <div id="scrollable-section-right" className="h-full overflow-y-auto">
        <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg space-y-4">

          <h2 className="text-2xl font-bold"> {productDetails.product.name}</h2>
          <div className="grid grid-cols-4 gap-2">
            {storages.map((storage) => (
              <button
                key={storage}
                onClick={() => setSelectedStorage(storage)}
                className={`border border-gray-300 p-2 rounded-lg text-sm font-semibold ${selectedStorage === storage
                  ? "bg-yellow-400 text-black"
                  : "bg-white"
                  }`}
              >
                {storage}
              </button>
            ))}
          </div>
          <h3 className="font-semibold">
            Chọn màu để xem giá và chi nhánh có hàng
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`flex flex-col items-center p-2 border rounded-lg ${selectedColor === color.name
                  ? "border-yellow-400 bg-yellow-100"
                  : "border-gray-300"
                  }`}
              >
                <img src="https://via.placeholder.com/50" alt={color.name} />
                <span className="text-xs">{color.name}</span>
                <span className="text-sm font-bold">{color.price}</span>
              </button>
            ))}
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-gray-500 line-through text-sm">
              {formatVND(productDetails.price_original)}
            </div>
            <div className="flex justify-between items-center">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -44%
              </span>
              <span className="text-xl font-bold text-red-500">
                {formatVND(productDetails.sale_price)}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="border border-red-500 text-red-500 font-semibold p-3 rounded-lg">
              Mua BHTD
            </button>
            <button className="border border-gray-300 text-gray-800 font-semibold p-3 rounded-lg">
              Mua thẳng
            </button>
          </div>
          <div className="bg-yellow-500 p-3 rounded-lg text-white text-center font-bold">
            📢 Thu Cũ Lên Đời - 100% Giá Trị Máy
          </div>

          <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg space-y-3">

            <div className="grid grid-cols-3 gap-2">
              <button onClick={handleBuyNow} className="col-span-2 bg-red-600 text-white font-bold p-3 rounded-lg">
                Mua ngay
                <p className="text-sm font-normal">Giao hàng tận nơi hoặc tại cửa hàng</p>
              </button>
              <button onClick={handleAddCart} className="border border-red-500 text-red-500 p-3 rounded-lg flex items-center justify-center">
                🛒 Giỏ hàng
              </button>
            </div>


            <div className="grid grid-cols-2 gap-2">
              <button className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="font-bold">Trả góp 0%</span>
                <p className="text-sm">Duyệt nhanh qua điện thoại</p>
              </button>
              <button className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="font-bold">Trả góp 0% qua thẻ</span>
                <p className="text-sm">Visa, Master Card, JCB, AMEX</p>
              </button>
            </div>


            <div className="grid grid-cols-2 gap-2">
              <button className="bg-yellow-400 text-black p-3 rounded-lg flex items-center justify-center gap-2">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="white" />
                  <path d="M23.9999 6C14.0586 6 6 13.7146 6 23.9999C6 30.1805 8.93877 35.6255 13.4926 39.0873C12.5286 42.0515 11.0535 44.1972 9.30492 46.0591C8.53072 46.9059 9.5337 48.1665 10.5656 47.6457C13.3663 46.1738 16.0876 44.1656 18.4025 42.1257C20.1188 42.6832 22.0128 42.9998 24.0002 42.9998C33.9415 42.9998 42 35.2852 42 24.0001C42 13.7148 33.9415 6 23.9999 6Z" fill="#0084FF" />
                  <text x="15" y="30" fontSize="12" fontWeight="bold" fill="white">Zalo</text>
                </svg>
                <span className="font-bold">Chat Zalo</span>
              </button>
              <button className="bg-yellow-400 text-black p-3 rounded-lg flex items-center justify-center gap-2">
                📞 <span className="font-bold">Gọi Ngay Giá Tốt</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold p-3">
            KHUYẾN MÃI HOT
          </div>


          <div className="p-4 space-y-3 text-gray-800">

            <div className="flex items-start gap-2">
              <span className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
                1
              </span>
              <p>
                <span className="font-bold">[Tháng 3]:</span> PHỤ KIỆN MUA 1 TẶNG 1 - Combo phụ kiện siêu HOT
                giảm đến 60% - Phụ kiện mua kèm giảm đến 50%
              </p>
            </div>


            <div className="flex items-start gap-2">
              <span className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
                2
              </span>
              <p>
                <span className="font-bold">[Tháng 3]:</span> APPLE Mua 1 Tặng 1: Tặng ngay tai nghe Airpods
                Pro 2 hoặc Combo Dán màn hình + Cáp sạc + Ốp tùy chọn. Cốc sạc cao cấp 20w (Mua BHTD).
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-yellow-400 text-black font-bold p-3">
            DỊCH VỤ ƯU ĐÃI "ĐỘC QUYỀN" KHI MUA SẢN PHẨM
          </div>
          <div className="p-4 space-y-3 text-gray-800">
            {[
              "[Tháng 3]: GIÁ THU BẰNG GIÁ BÁN - Thu cũ đổi mới trợ giá lên đến 100% giá trị máy",
              "[Tháng 3]: TRẢ GÓP SIÊU TỐC - lãi suất 0% | 0% phụ phí | 0% lợi nhuận - giảm đến 700.000đ",
              "[Tháng 3]: Miễn phí chuyển đi cho khách hàng tham quan mua sắm tại hệ thống Bạch Long Mobile",
              "[Tháng 3]: Giảm ngay 300k khi thanh toán chuyển khoản 100%",
              "[Tháng 3]: Độc quyền 60 ngày đổi trả miễn phí",
              "[Tháng 3]: Giao hàng siêu tốc miễn phí 1H"
            ].map((offer, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  {index + 1}
                </span>
                <p className="text-gray-800">{offer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="bg-gray-700 text-white font-bold p-3">
            ƯU ĐÃI THANH TOÁN KHI MUA HÀNG
          </div>


          <div className="p-4 space-y-3 text-gray-800">
            {offers.slice(0, isExpanded ? offers.length : 3).map((offer, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  {index + 1}
                </span>
                <p className="text-gray-800 flex items-center gap-2">
                  <span className="text-xl">{offer.icon}</span> {offer.text}
                </p>
              </div>
            ))}
          </div>


          <div className="p-3 flex justify-center bg-gray-100">
            <button
              className="bg-white border border-gray-300 px-6 py-2 rounded-lg text-gray-800 hover:bg-gray-200 transition"
              onClick={toggleExpand}
            >
              {isExpanded ? "Thu gọn ⬆️" : "Xem thêm ⬇️"}
            </button>
          </div>
        </div>

      </div>


      {showFloatingBar && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-4 px-6 flex justify-between items-center border-t">
         <img className="w-20 h-20" src={productDetails.product.image.url} alt="" />
          <span className="text-lg font-bold">{productDetails.product.name}</span>
          <div className="flex gap-3">
            <button onClick={handleBuyNow} className="bg-red-500 text-white px-6 py-3 rounded-lg">
              Mua ngay
            </button>
            <button onClick={handleAddCart} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
              Giỏ hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

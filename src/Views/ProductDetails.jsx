import { ProductContext } from "context/contextProduct";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { sku } = useParams();
  const { product } = useContext(ProductContext);
  const navigate = useNavigate();

  if (!product) {
    return <p className="text-center mt-10 text-lg">Đang tải...</p>;
  }

  // Tìm sản phẩm theo SKU
  const productDetails = product.find((p) => p.product.sku === sku);

  if (!productDetails) {
    return <p className="text-center mt-10 text-red-500 text-lg">Sản phẩm không tồn tại.</p>;
  }

  const handleBuyNow = () => {
    alert(`Bạn đã mua: ${productDetails.product.name} với giá ${productDetails.sale_price.toLocaleString()} đ`);
    // Thêm logic xử lý giỏ hàng hoặc thanh toán tại đây
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        {/* Hình ảnh sản phẩm */}
        <img
          src={productDetails.product.image?.url || ""}
          alt={productDetails.product.name || ""}
          className="w-80 h-80 object-cover rounded-lg shadow-md"
        />

        {/* Thông tin sản phẩm */}
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-2xl font-bold">{productDetails.product.name}</h2>
          <p className="text-red-500 text-xl font-bold mt-2">
            Giá bán: {productDetails.sale_price ? productDetails.sale_price.toLocaleString() : ""} đ
          </p>
          <p className="text-gray-400 line-through">
            Giá gốc: {productDetails.price_original ? productDetails.price_original.toLocaleString() : ""} đ
          </p>

          {/* Nút Mua hàng */}
          <button
            onClick={handleBuyNow}
            className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Mua ngay
          </button>
        </div>
      </div>

      {/* Nút Quay lại */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          ⬅ Quay lại
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

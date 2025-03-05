import { fetchProducts } from "API/GetProductQuery";
import { ProductContext } from "context/contextProduct";
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({ current_page: 1, page_size: 10 });
  const {setProduct} = useContext(ProductContext);
  useEffect(() => {
    fetchProducts(pageInfo.page_size, pageInfo.current_page).then((data) => {
      if (data.items) {
        setProducts(data.items[0]?.items || []);
        setProduct(data.items[0]?.items);
        localStorage.setItem("product", JSON.stringify(data.items[0]?.items))
        setPageInfo(data.page_info);
      }
    });
  }, [pageInfo.current_page]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Danh Sách Sản Phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.product.sku} className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition duration-300">
            <img
              src={item.product.image.url}
              alt={item.product.name}
              className="w-full h-65 object-cover "
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.product.name}</h3>
              <p className="text-red-500 font-bold text-lg">{item.sale_price.toLocaleString()} đ</p>
              <p className="text-gray-400 line-through">{item.price_original.toLocaleString()} đ</p>
              <Link
                to={`/product/${item.product.sku}`}
                className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
          onClick={() => setPageInfo((prev) => ({ ...prev, current_page: prev.current_page - 1 }))}
          disabled={pageInfo.current_page === 1}
        >
          Trang trước
        </button>
        <span className="px-4 py-2">{pageInfo.current_page} / {pageInfo.total_pages}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
          onClick={() => setPageInfo((prev) => ({ ...prev, current_page: prev.current_page + 1 }))}
          disabled={pageInfo.current_page >= pageInfo.total_pages}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};


export default ProductList;

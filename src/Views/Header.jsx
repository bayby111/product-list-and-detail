import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo hoặc Tên trang */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        {/* Thanh điều hướng */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-500">Sản phẩm</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Liên hệ</Link>
        </nav>

        {/* Nút Giỏ hàng */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            2
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

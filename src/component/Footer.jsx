import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Links */}
        <div>
          <h3 className="font-semibold mb-3">Thông tin</h3>
          <ul className="space-y-2">
            <li>Giới thiệu Bạch Long Mobile</li>
            <li>Giới thiệu Bạch Long Care</li>
            <li>Hướng dẫn mua hàng Online</li>
            <li>Hướng dẫn sử dụng Voucher</li>
            <li>Hình thức thanh toán</li>
            <li>Chính sách bảo hành</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Hỗ trợ khách hàng</h3>
          <ul className="space-y-2">
            <li>Quy trình giao hàng</li>
            <li>Quy định sao lưu dữ liệu</li>
            <li>Khách hàng doanh nghiệp</li>
            <li>Trả góp 0% lãi suất</li>
            <li>Đổi cũ lấy mới</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-3">Thông tin liên hệ</h3>
          <p><strong>Mua hàng:</strong> <span className="text-blue-600">1900.63.64.69</span> (8h00 - 21h30)</p>
          <p><strong>Bảo hành:</strong> <span className="text-blue-600">1900.63.69.81</span> (9h00 - 18h30)</p>
          <p><strong>Hợp tác kinh doanh:</strong> <span className="text-blue-600">0908.038.038</span></p>
          <p><strong>Email:</strong> <span className="text-blue-600">director@bachlongmobile.com</span></p>
        </div>

        {/* Social Media & Payment */}
        <div>
          <h3 className="font-semibold mb-3">Kết nối với chúng tôi</h3>
          <div className="flex space-x-3 mb-4">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaTiktok className="text-black text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaYoutube className="text-red-500 text-2xl cursor-pointer" />
            <SiZalo className="text-blue-500 text-2xl cursor-pointer" />
          </div>
          <h3 className="font-semibold mb-3">Phương thức thanh toán</h3>
          <div className="flex space-x-3">
            <img src="/visa.png" alt="Visa" className="h-8" />
            <img src="/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="/applepay.png" alt="Apple Pay" className="h-8" />
            <img src="/homecredit.png" alt="Home Credit" className="h-8" />
          </div>
        </div>
      </div>

      {/* Store Dropdown */}
      <div className="text-center mt-8">
        <select className="border p-2 rounded-md">
          <option>Bạch Long Mobile</option>
          <option>Bạch Long Care</option>
        </select>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2019. Công ty TNHH Thương mại công nghệ Bạch Long. GPDKKD: 0311776538 do KH & ĐT TP.HCM cấp ngày 03/05/2012<br />
        134 - 136 Trần Phú, Phường 4, Quận 5, TP.HCM
      </div>
    </footer>
  );
};

export default Footer;

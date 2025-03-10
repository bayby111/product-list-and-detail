import { useState } from "react";
import { motion } from "framer-motion";

export default function WomensDayMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const [gift, setGift] = useState(null);
  const gifts = [
    "💎 Một ngày may mắn!",
    "🌹 Một lời chúc đặc biệt!",
    "🎁 Một món quà bí mật!",
    "🍫 Một thanh socola ngọt ngào!",
    "💌 Một lá thư tình yêu!",
    "🎈 Một bóng bay hạnh phúc!",
    "🎉 Một bữa tiệc vui vẻ!",
    "🎶 Một bản nhạc ngọt ngào!",
    "🎀 Một chiếc nơ xinh xắn!",
    "🌈 Một cầu vồng rực rỡ!",
    "💖 Một cái ôm ảo ấm áp!"
  ];

  const getRandomGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };
  const handleToggle = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-pink-200 to-pink-500 flex flex-col items-center justify-center overflow-hidden">
      {/* Hiệu ứng bokeh lung linh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: Math.random() * 50 }}
            animate={{ opacity: [0.1, 0.5, 0], scale: [0.8, 1, 1.2], y: -100 }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Nút mở quà */}
      {!isOpen && (
        <motion.button
          onClick={handleToggle}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="z-10 mb-4 bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg text-xl font-semibold hover:bg-pink-700 transition-all"
        >
          💝 Mở hộp quà 💝
        </motion.button>
      )}

      {/* Sliding Panels */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-600 to-pink-400 shadow-lg"
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-600 to-pink-400 shadow-lg"
      />

      {/* Hiệu ứng hoa bay khi mở */}
      {isOpen &&
        Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{
              duration: 3 + Math.random() * 2,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="absolute text-pink-200"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50 + 50}%`,
            }}
          >
            🌸
          </motion.div>
        ))}

      {/* Lời chúc lung linh */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10 text-center text-white text-4xl font-bold mt-4 p-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-red-400 animate-pulse"
          style={{
            textShadow: "0px 0px 10px rgba(255,255,255,0.8), 0px 0px 20px rgba(255,200,200,0.8)",
          }}
        >
          🌸 Chúc mừng ngày 8/3! 🌸<br />
          Em là ánh sáng trong cuộc đời anh, luôn mạnh mẽ và rực rỡ như bông hoa xinh đẹp! 💖✨<p className="mt-4 text-lg font-light">Ngày xưa có một chàng trai yêu một cô gái, và mỗi ngày 8/3, anh ấy luôn tìm cách khiến cô ấy mỉm cười. Hôm nay, anh ấy muốn gửi đến em một món quà đặc biệt, không chỉ là những dòng chữ, mà là cả trái tim anh. 💕</p>
          <div className="flex justify-center mt-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-6xl"
            >
              👨‍💼💐
            </motion.div>
          </div>
          <div className="mt-6">
            <motion.button
              onClick={getRandomGift}
              whileHover={{ scale: 1.1 }}
              className="mt-4 bg-yellow-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition text-xl font-semibold"
            >
              🎲 Chơi & Nhận Quà 🎲
            </motion.button>
            {gift && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mt-4 text-2xl font-bold text-yellow-200"
              >
                {gift}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

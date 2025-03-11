import React, { useEffect } from "react";

const FallingFlower = () => {
  const createFallingFlower = () => {
    const flower = document.createElement("div");
    flower.className = "flower";
    const flowerSize = Math.random() + 0.1; // Kích thước ngẫu nhiên
    const flowerPos = Math.random() * 90 + 4; // Vị trí ngang theo phần trăm
    const fallingTime = Math.floor(Math.random() * 10) + 5; // Thời gian rơi từ 5 đến 15 giây

    flower.style.width = "40px";
    flower.style.height = "40px";
    flower.style.left = `${flowerPos}%`;
    flower.style.transform = `scale(${flowerSize})`;
    // Sử dụng animation với tên "falling-flower" đã được định nghĩa trong CSS
    flower.style.animation = `falling-flower ${fallingTime}s linear infinite`;

    // Tạo một phần tử span để chứa emoji hoa
    const emojiElement = document.createElement("span");
    emojiElement.innerText = "🌸";
    emojiElement.className = "envelope";
    emojiElement.style.width = "100%";
    emojiElement.style.height = "100%";

    // Thêm emoji vào phần tử hoa
    flower.appendChild(emojiElement);
    // Thêm hoa vào container có class "falling-flowers"
    document.querySelector(".falling-flowers")?.appendChild(flower);
  };

  const removeFlower = () => {
    // Lấy tất cả các phần tử có class "flower" và xóa khi chúng gần chạm đáy màn hình
    document.querySelectorAll(".flower").forEach((flower) => {
      if (
        flower instanceof HTMLElement &&
        flower.offsetTop > document.documentElement.clientHeight - 100
      ) {
        flower.remove();
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createFallingFlower();
      removeFlower();
    }, 500);
    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return <div className="falling-flowers"></div>;
};

export default FallingFlower;

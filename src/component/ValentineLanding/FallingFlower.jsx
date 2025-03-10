import React from "react";
import { useEffect } from "react";

const FallingFlower = () => {

    
    useEffect(() => {
       
       const createFlower =()=> {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.left = Math.random() * window.innerWidth + 'px';
            flower.style.animationDuration = Math.random() * 3 + 2 + 's';
            flower.innerHTML = `<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRn6H9vcmzAO18JfteTIQC2NYCfZ3kP6Dr_IdQsJuc0N03sVpEzHfZA5KECFLYtgqjdZu_6XAXPmK5Fgn_xiO4ruyAB0p1L1KVlRLuxMX4">`;
            document.getElementById('container').appendChild(flower);
            setTimeout(() => {
                flower.remove();
            }, 5000);
        }
        const interval = setInterval(createFlower, 1500); // Cứ 1s thêm 5 hoa mới
        return () => clearInterval(interval); // Cleanup khi component bị hủy

    }, []);

    return (
     <div>
        {/* Falling Flowers Effect */}
        <div className="flower-container" id="container"></div>
     </div>
    );

}

export default FallingFlower;
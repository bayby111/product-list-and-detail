import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();
 const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
      const StoreProduct = localStorage.getItem("product");
      if(StoreProduct){
        try {
            setProduct(JSON.parse(StoreProduct)); // ✅ Chuyển JSON string thành object
          } catch (error) {
            console.error("Lỗi khi parse JSON từ localStorage:", error);
            setProduct([]); // Tránh lỗi khi dữ liệu không hợp lệ
          }
      }
    },[])
  
    
    return (
      <ProductContext.Provider value={{ product, setProduct}}>
        {children}
      </ProductContext.Provider>
    );
  };

  export {ProductContext,ProductProvider }


  

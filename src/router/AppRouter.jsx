import { Route, Routes } from "react-router-dom";
import HomeView from "Views/HomeView";
import ProductDetail from "Views/ProductDetails";
import ProductList from "Views/ProductList";
import Layout from "Views/shared/Layout";
import ValentineLandingPage from "Views/ValentineLandingPage";

function MyRouter() {
    return (

        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element ={<HomeView/>} />
                <Route path="/valentinel-landing-page" element ={<ValentineLandingPage/>} />
                <Route path="/product" element ={<ProductList/>} />
                <Route path="/product-List/:sku" element ={<ProductDetail/>} />
            </Route>
        </Routes>

    );
}

export default MyRouter;
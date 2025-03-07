import { Outlet } from "react-router-dom";
import Header from "component/Header";
import Footer from "component/Footer";

const Layout = () => {
    return (
        <div>
            {/* hiển thị nav */}
            <div><Header/></div>
            
            {/* hiển thị nội dung chính */}
            <div><Outlet/></div>

            {/* hiển thị footer */}
            <div><Footer/></div>
        </div>
    );
}

export default Layout;
import { Routes, Route } from "react-router-dom";
// User
import HomePage from "../pages/user/home";
import UserLoginPage from "../pages/user/login/loginPage";

// Admin
import AdminHome from "../pages/admin/dashboard/index";
import DashboardPage from "../pages/admin/dashboard/mainContainer";
import ListCategory from "../pages/admin/dashboard/categoryPages/listCategoryPage";
import AddCategory from "../pages/admin/dashboard/categoryPages/addCategoryPage";
import ListProduct from "../pages/admin/dashboard/productsPages/listProductPage";
import AddProduct from "../pages/admin/dashboard/productsPages/addProductPage";
import ProductDetails from "../pages/admin/dashboard/productsPages/productDetailsPage";
import StockList from "../pages/admin/dashboard/stockPages/listStockPage";
import AddStock from "../pages/admin/dashboard/stockPages/addStockPage";
import StockDetails from "../pages/admin/dashboard/stockPages/stockDetailsPage";
import UserList from "../pages/admin/dashboard/userPages/listUserPage";
import AddUser from "../pages/admin/dashboard/userPages/addUserPage";
import UserDetails from "../pages/admin/dashboard/userPages/userDetailsPage";
import PublicRouting from "../routes/publicRoutes";
import PrivateRouting from "../routes/privateRoutes";
import CustomerProductDetails from "../pages/user/productDetails";
import CartPage from "../pages/user/cart";
import OrderList from "../pages/user/accounts/order";
import OrderDetails from "../pages/user/accounts/order/orderDetailsPage";
import Profile from "../pages/user/accounts/profile";
import Payment from "../pages/user/accounts/payment";
import RegisterPage from "../pages/user/register/registerPage";

import RouterList from "./routerList";
import AboutUs from "../pages/user/about";

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const CustomRouters = () => {
  return (
    <Routes>
      <Route element={<PublicRouting />}>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<UserLoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="product-details" element={<CustomerProductDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="order-list" element={<OrderList />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="payments" element={<Payment />} />
        <Route path={RouterList.user.about} element={<AboutUs />} />
      </Route>
      <Route path="/admin" element={<PrivateRouting />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="category" element={<ListCategory />} />
        <Route path="add-category" element={<AddCategory />} />
        <Route path="products" element={<ListProduct />} />
        <Route path="add-products" element={<AddProduct />} />
        <Route path="products-details" element={<ProductDetails />} />
        <Route path="stocks" element={<StockList />} />
        <Route path="add-stock" element={<AddStock />} />
        <Route path="stock-details" element={<StockDetails />} />
        <Route path="users" element={<UserList />} />
        <Route path="add-users" element={<AddUser />} />
        <Route path="users-details" element={<UserDetails />} />
        <Route path="add-user" element={<AddUser />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRouters;

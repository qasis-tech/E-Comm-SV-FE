import { Routes, Route, Navigate } from "react-router-dom";
// User
import HomePage from "../pages/user/home";
import UserLoginPage from "../pages/user/login/loginPage";
import ResetPassword from "../pages/user/resetpassword/forgotPasswordPage";
// Admin
import AdminHome from "../pages/admin/dashboard/index";
import DashboardPage from "../pages/admin/dashboard/mainContainer";
import ListCategory from "../pages/admin/categoryPages/listCategoryPage";
import AddCategory from "../pages/admin/categoryPages/addCategoryPage";
import ListProduct from "../pages/admin/productsPages/listProductPage";
import AddProduct from "../pages/admin/productsPages/addProductPage";
import ProductDetails from "../pages/admin/productsPages/productDetailsPage";
import StockList from "../pages/admin/stockPages/listStockPage";
import AddStock from "../pages/admin/stockPages/addStockPage";
import StockDetails from "../pages/admin/stockPages/stockDetailsPage";
import UserList from "../pages/admin/userPages/listUserPage";
import AddUser from "../pages/admin/userPages/addUserPage";
// User
import UserDetails from "../pages/admin/userPages/userDetailsPage";
import PublicRouting from "../routes/publicRoutes";
import PrivateRouting from "../routes/privateRoutes";
import CustomerProductDetails from "../pages/user/productDetails";
import CartPage from "../pages/user/cart";
// import OrderList from "../pages/user/accounts/order";
// import OrderDetails from "../pages/user/accounts/order/orderDetailsPage";
import Profile from "../pages/user/accounts/profile";
import Payment from "../pages/user/accounts/payment";
import RegisterPage from "../pages/user/register/registerPage";
import PageNotFound from "../pages/user/pageNotFound";
import OrderDetails from "../pages/admin/orderPages/orderDetailsPage";
import OrderList from "../pages/admin/orderPages/orderPage";
import Categorydetails from "../pages/admin/categoryPages/categorydetailspage";
import HeaderNav from "../components/TopNavbar";

import RouterList from "./routerList";
import AboutUs from "../pages/user/about";
import ContactUs from "../pages/user/contact";
import { useEffect, useState } from "react";
import WhishList from "../pages/user/accounts/whishlist";
import Order from "../pages/user/accounts/order";
import ProductList from "../pages/user/productlist";
import { authCheck } from "./auth";
import Home from "../pages/admin/Home/Home";

const CustomRouters = () => {
  const [isUser, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    const { isUser, isAdmin } = authCheck();
    setUser(isUser);
    setAdmin(isAdmin);
  }, []);

  return (
    <Routes>
      <Route element={<PublicRouting />}>
        <Route path="/" element={<HomePage />} />
        <Route path={RouterList.user.login} element={<UserLoginPage />} />
        <Route path={RouterList.user.register} element={<RegisterPage />} />
        <Route
          path={RouterList.user.resetpassword}
          element={<ResetPassword />}
        />
        <Route
          path={RouterList.user.productList}
          element={<CustomerProductDetails />}
        />
        <Route path={RouterList.user.cart} element={<CartPage />} />
        <Route path={RouterList.user.profile} element={<Profile />} />
        <Route path="order" element={<Order />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="payments" element={<Payment />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="whishlist" element={<WhishList />} />
        <Route path={RouterList.user.about} element={<AboutUs />} />
        <Route path={RouterList.user.contact} element={<ContactUs />} />
        <Route path="navbar" element={<HeaderNav />} />
      </Route>
      <Route path="/admin" element={<PrivateRouting />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path={RouterList.admin.categoryList}
          element={<ListCategory />}
        />
        <Route path={RouterList.admin.addCategory} element={<AddCategory />} />
        <Route path="category-details/:id" element={<Categorydetails />} />
        <Route path={RouterList.admin.productList} element={<ListProduct />} />
        <Route path="add-products" element={<AddProduct />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path={RouterList.admin.stockList} element={<StockList />} />
        <Route path="add-stock" element={<AddStock />} />
        <Route path="stock-details/:id" element={<StockDetails />} />
        <Route path={RouterList.admin.userList} element={<UserList />} />
        <Route path={RouterList.admin.addUser} element={<AddUser />} />
        <Route path="users-details/:id" element={<UserDetails />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="order-details/:id" element={<OrderDetails />} />
        <Route path={RouterList.admin.orderList} element={<OrderList />} />
        <Route path={RouterList.admin.homeManage} element={<Home />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRouters;

import { Routes, Route } from "react-router-dom";

import RegisterPage from "../pages/registerPage";
import Login from "../pages/loginPage";
import CategoryAdd from "../pages/categoryAddPage";
import Category from "../pages/categoryPage";
import MainContainer from "../pages/mainContainer";
import ProductList from "../pages/productPage";
import ProductAdd from "../pages/productAddPage";
import OrderList from "../pages/orderPage";
import OrderDetails from "../pages/orderDetailsPage";
import StockList from "../pages/stockPage";
import UserList from "../pages/userPage";
import UserDetails from "../pages/userDetailsPage";
import StockAdd from "../pages/stockAddPage";
import ProductDetails from "../pages/productDetailsPage";
import RouterList from "./routerList";
const Routers = () => {
  return (
    <Routes>
      <Route path={RouterList.login} element={<Login />} />
      <Route path={RouterList.dashboard} element={<MainContainer />} />
      <Route path={RouterList.register} element={<RegisterPage />} />
      <Route path={RouterList.categoryList} element={<Category />} />
      <Route path={RouterList.addCategory} element={<CategoryAdd />} />
      <Route path={RouterList.productList} element={<ProductList />} />
      <Route path={RouterList.addProduct} element={<ProductAdd />} />
      <Route path={RouterList.productDetails} element={<ProductDetails />} />
      <Route path={RouterList.orderList} element={<OrderList />} />
      <Route path={RouterList.orderDetails} element={<OrderDetails />} />
      <Route path={RouterList.stockList} element={<StockList />} />
      <Route path={RouterList.addStock} element={<StockAdd />} />
      <Route path={RouterList.userList} element={<UserList />} />
      <Route path={RouterList.userDetails} element={<UserDetails />} />
    </Routes>
  );
};

export default Routers;

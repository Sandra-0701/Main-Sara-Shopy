import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/login";
import App from "../App";
import CartPage from "../cart/cart";
import CategoryPage from "../category/category";
import ContactPage from "../contact/contact";
import ProductsPage from "../products/productsList";
import ViewProduct from "../products/viewProduct";
import WishlistPage from "../wishlist/wishlist";
import OrderDetails from "../orders/order";
import OrderHistory from "../order-history/orderHistory";
import CheckoutPage from "../checkout/checkout";
import ProfilePage from "../profile/profile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/category",
    element: <CategoryPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/product-list",
    element: <ProductsPage/>,
  },
  {
    path: "/view-product",
    element: <ViewProduct/>,
  },
  {
    path: "/wishlist",
    element: <WishlistPage/>,
  },
  {
    path: "/order-details",
    element: <OrderDetails/>,
  },
  {
    path: "/order-history",
    element: <OrderHistory/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
]);

export default router;
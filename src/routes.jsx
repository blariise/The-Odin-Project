import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Shop from "./routes/shop.jsx";
import Cart from "./routes/cart.jsx";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
];

export default routes;

import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">{"Home"}</NavLink>
      <NavLink to="/shop">{"Shop"}</NavLink>
      <NavLink to="/cart">{"Cart"}</NavLink>
    </nav>
  );
}

import Food from "@/pages/Food/food";
import Order from "@/pages/Order/order";
import Search from "@/pages/Search/search";
import User from "@/pages/User/user";
export default [
  {
    name: "Food",
    path: "/food",
    component: Food,
  },
  {
    name: "Order",
    path: "/order",
    component: Order,
  },
  {
    name: "Search",
    path: "/search",
    component: Search,
  },
  {
    name: "User",
    path: "/user",
    component: User,
  },
  {
    path: "/",
    redirect:'/food'
  },
];
import elctronic from "./assets/electronics.png";
import fashion from "./assets/fashion.png";
import beauty from "./assets/beauty.jpg";
import sport from "./assets/sports.jpg";
import home from "./assets/home.jpg";
import all from "./assets/emptycart.png";

export const catogoare = [
  {
    id: 1,
    name: "All", // All ko top par rakhna standard practice hai
    Image: all
  },
  {
    id: 2,
    name: "Electronics", // "Electronic Item" ko "Electronics" kar diya
    Image: elctronic
  },
  {
    id: 3,
    name: "Fashion",
    Image: fashion
  },
  {
    id: 4,
    name: "Beauty",
    Image: beauty
  },
  {
    id: 5,
    name: "Sports", // "Sport" ko "Sports" kar diya
    Image: sport
  },
  {
    id: 6,
    name: "Home & Kitchen", // "Home & Item" ko "Home & Kitchen" kar diya
    Image: home
  }
];
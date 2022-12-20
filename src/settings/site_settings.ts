import { ROUTES } from "../utils/routes";

export const subSideNav = [
  {
    id: 1,
    label: "Dashboard",
    slug: ROUTES?.HOME,
    icon: "Dashboard",
    children: null,
  },
  {
    id: 2,
    label: "Categories",
    slug: ROUTES?.CATEGORIES,
    icon: "Categories",
    children: [
      {
        label: "Category List",
        slug: ROUTES?.CATEGORIES,
        icon: "",
      },
      {
        label: "Add Category",
        slug: ROUTES?.ADDCATEGORIES,
        icon: "",
      },
    ],
  },
  {
    id: 3,
    label: "Products",
    slug: ROUTES?.PRODUCTS,
    icon: "products",
    children: [
      {
        label: "Product List",
        slug: ROUTES?.PRODUCTS,
        icon: "",
      },
      {
        label: "Add Product",
        slug: ROUTES?.ADDPRODUCTS,
        icon: "",
      },
    ],
  },
  {
    id: 4,
    label: "Orders",
    slug: ROUTES?.ORDERS,
    icon: "",
    children: [
      {
        label: "Order List",
        slug: ROUTES?.ORDERS,
        icon: "",
      },
      {
        label: "Update Order",
        slug: ROUTES?.ADDORDERS,
        icon: "",
      },
    ],
  },
  {
    id: 5,
    label: "Users",
    slug: "/users",
    icon: "",
    children: null,
  },
];

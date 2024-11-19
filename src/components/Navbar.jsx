import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavItem({ label }) {
  return (
    <Link to={label === "Home" ? "/" : label.toLowerCase()}>
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" />
      <NavItem label="Cart" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

export function NavbarSimple() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const selector = useSelector((state) => state.cart.cart);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="white" className="sticky top-0 z-10" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            color="blue-gray"
            className="mr-4 cursor-pointer text-lg font-bold"
          >
            Ecomerce Cart
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Link to="cart">
          <Button
            size="sm"
            className="hidden lg:flex lg:relative lg:items-center"
          >
            <span className="absolute top-2 left-8 px-1 text-[12px] rounded-full bg-white text-black">
              {selector.length}
            </span>
            <ShoppingBagIcon className="h-6 w-6" />
          </Button>
        </Link>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Link to="cart">
            <Button
              className="mb-2  flex justify-center items-center"
              fullWidth
            >
              <div className="relative">
                <span className="absolute top-50 left-50 px-1 text-[12px] rounded-full bg-white text-black">
                  {selector.length}
                </span>
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;

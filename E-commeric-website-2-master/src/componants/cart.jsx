import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";

const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);
  
  
  useEffect(() => {
    const cartItemsArr = localStorage.getItem("cartList");
    const parseCartItemsArr = JSON.parse(cartItemsArr);

    setCartItems(parseCartItemsArr);
  }, []);

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer (false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Typography 
          className="text-center mt-3 bg-danger rounded-4 text-white" variant="h6">Cart Items</Typography>
          {cartItems?.map((item,index) => {
            return (
              
              <Box key={index}>
                <img width={"100px"} className="mt-3" src={item.img} alt="logo" />
                <span>{item.name}</span>
                <span>{item.Price}</span>
              </Box>
          
            );
          })}
        </Box>
      </Drawer>
    </div>
  );
};


export default CartList;

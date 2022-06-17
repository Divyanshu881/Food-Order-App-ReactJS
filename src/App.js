import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";
function App() {

  const [activate,setActivate]=useState(false);

  const closeCartlHandler = (event)=>{
        setActivate(false);
  };

  const openCartHandler =(event)=>{
    setActivate(true);
  }
 
  return (
    <CartProvider>
      {activate && <Cart onClose={closeCartlHandler}/>}
      <Header onClick ={openCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;

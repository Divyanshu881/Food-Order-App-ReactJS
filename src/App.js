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
  const orderModalHandler =(event)=>{
        console.log('Odering .....');
  }
  return (
    <CartProvider>
      {activate && <Cart onClose={closeCartlHandler} onOrder={orderModalHandler}/>}
      <Header onClick ={openCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;

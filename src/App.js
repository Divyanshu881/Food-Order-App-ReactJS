import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
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
    <React.Fragment>
      {activate && <Cart onClose={closeCartlHandler} onOrder={orderModalHandler}/>}
      <Header onClick ={openCartHandler}/>
      <Meals/>
    </React.Fragment>
  );
}

export default App;

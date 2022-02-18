import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './component/Home';
import Shop from './component/Shop';
import Contact from './component/Contact'
import Simpleslider from './component/Slider/Simpleslider';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import Forgot from './component/Forgot';
import Toys from './component/Toys';
import Trousers from './component/Clothes/Trousers';
import Shirts from './component/Clothes/Shirts';
import Accessories from './component/Accessories/Accessories';
import Backpacks from './component/Accessories/Backpacks';
import Hats from './component/Accessories/Hats';
import Clothes from './component/Clothes/Clothes';
import Singleproduct from './component/Singleproduct';
import Product1 from './component/ProductsDetail/Product1';
import Product2 from './component/ProductsDetail/Product2';
import Product3 from './component/ProductsDetail/Product3';
import Product4 from './component/ProductsDetail/Product4';
import Product5 from './component/ProductsDetail/Product5';
import Product6 from './component/ProductsDetail/Product6';
import ToyProduct1 from './component/ProductsDetail/ToyProduct1';
import ToyProduct2 from './component/ProductsDetail/ToyProduct2';
import ToyProduct3 from './component/ProductsDetail/ToyProduct3';
import ToyProduct4 from './component/ProductsDetail/ToyProduct4';
import ToyProduct5 from './component/ProductsDetail/ToyProduct5';
import ToyProduct6 from './component/ProductsDetail/ToyProduct6';
import ToyProduct7 from './component/ProductsDetail/ToyProduct7';
import ToyProduct8 from './component/ProductsDetail/ToyProduct8';
import ToyProduct9 from './component/ProductsDetail/ToyProduct9';
import ToyProduct10 from './component/ProductsDetail/ToyProduct10';
import ToyProduct12 from './component/ProductsDetail/ToyProduct12';
import ToyProduct11 from './component/ProductsDetail/ToyProduct11';
import BackpackProduct1 from './component/ProductsDetail/BackpackProduct1';
import BackpackProduct2 from './component/ProductsDetail/BackpackProduct2';
import BackpackProduct3 from './component/ProductsDetail/BackpackProduct3';
import BackpackProduct4 from './component/ProductsDetail/BackpackProduct4';
import BackpackProduct5 from './component/ProductsDetail/BackpackProduct5';
import BackpackProduct6 from './component/ProductsDetail/BackpackProduct6';
import HatProduct1 from './component/ProductsDetail/HatProduct1';
import HatProduct2 from './component/ProductsDetail/HatProduct2';
import HatProduct3 from './component/ProductsDetail/HatProduct3';
import HatProduct4 from './component/ProductsDetail/HatProduct4';
import HatProduct5 from './component/ProductsDetail/HatProduct5';
import HatProduct6 from './component/ProductsDetail/HatProduct6';
import Shirt1 from './component/ProductsDetail/Shirt1';
import Shirt2 from './component/ProductsDetail/Shirt2';
import Shirt3 from './component/ProductsDetail/Shirt3';
import Shirt4 from './component/ProductsDetail/Shirt4';
import Shirt6 from './component/ProductsDetail/Shirt6';
import Shirt5 from './component/ProductsDetail/Shirt5';
import Trouser1 from './component/ProductsDetail/Trouser1';
import Trouser2 from './component/ProductsDetail/Trouser2';
import Trouser3 from './component/ProductsDetail/Trouser3';
import Trouser4 from './component/ProductsDetail/Trouser4';
import Trouser5 from './component/ProductsDetail/Trouser5';
import Trouser6 from './component/ProductsDetail/Trouser6';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Popip from './component/Popup';
import Popup from './component/Popup';

function App() {
  
  return (
    <div>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/popup" component={Popup}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/simpleslider" component={Simpleslider}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}/>
        <Route path="/forgot" component={Forgot}/>
        <Route path="/toys" component={Toys}></Route>
        <Route path="/trousers" component={Trousers}></Route>
        <Route path="/shirts" component={Shirts}></Route>
        <Route path="/accessories" component={Accessories}></Route>
        <Route path="/backpacks" component={Backpacks}></Route>
        <Route path="/hats" component={Hats}></Route>
        <Route path="/clothes" component={Clothes}></Route>
        <Route path="/singleproduct" component={Singleproduct}></Route>
        <Route path="/product1" component={Product1}></Route>
        <Route path="/product2" component={Product2}></Route>
        <Route path="/product3" component={Product3}></Route>
        <Route path="/product4" component={Product4}></Route>
        <Route path="/product5" component={Product5}></Route>
        <Route path="/product6" component={Product6}></Route>
        <Route path="/toyproduct1" component={ToyProduct1}></Route>
        <Route path="/toyproduct2" component={ToyProduct2}></Route>
        <Route path="/toyproduct3" component={ToyProduct3}></Route>
        <Route path="/toyproduct4" component={ToyProduct4}></Route>
        <Route path="/toyproduct5" component={ToyProduct5}></Route>
        <Route path="/toyproduct6" component={ToyProduct6}></Route>
        <Route path="/toyproduct7" component={ToyProduct7}></Route>
        <Route path="/toyproduct8" component={ToyProduct8}></Route>
        <Route path="/toyproduct9" component={ToyProduct9}></Route>
        <Route path="/toyproduct10" component={ToyProduct10}></Route>
        <Route path="/toyproduct11" component={ToyProduct11}></Route>
        <Route path="/toyproduct12" component={ToyProduct12}></Route>
        <Route path="/backpackproduct1" component={BackpackProduct1}></Route>
        <Route path="/backpackproduct2" component={BackpackProduct2}></Route>
        <Route path="/backpackproduct3" component={BackpackProduct3}></Route>
        <Route path="/backpackproduct4" component={BackpackProduct4}></Route>
        <Route path="/backpackproduct5" component={BackpackProduct5}></Route>
        <Route path="/backpackproduct6" component={BackpackProduct6}></Route>
        <Route path="/hatProduct1" component={HatProduct1}></Route>
        <Route path="/hatProduct2" component={HatProduct2}></Route>
        <Route path="/hatProduct3" component={HatProduct3}></Route>
        <Route path="/hatProduct4" component={HatProduct4}></Route>
        <Route path="/hatProduct5" component={HatProduct5}></Route>
        <Route path="/hatProduct6" component={HatProduct6}></Route>
        <Route path="/shirt1" component={Shirt1}></Route>
        <Route path="/shirt2" component={Shirt2}></Route>
        <Route path="/shirt3" component={Shirt3}></Route>
        <Route path="/shirt4" component={Shirt4}></Route>
        <Route path="/shirt5" component={Shirt5}></Route>
        <Route path="/shirt6" component={Shirt6}></Route>
        <Route path="/trouser1" component={Trouser1}></Route>
        <Route path="/trouser2" component={Trouser2}></Route>
        <Route path="/trouser3" component={Trouser3}></Route>
        <Route path="/trouser4" component={Trouser4}></Route>
        <Route path="/trouser5" component={Trouser5}></Route>
        <Route path="/trouser6" component={Trouser6}></Route>
        
      </div>
    </Router>
  </div>
  );
}

export default App;

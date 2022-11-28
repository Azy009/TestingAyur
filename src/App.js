import "./App.css";
import Home from "./Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Blogfullwidth from "./Blogfullwidth";
import Faq from "./Faq";
import Error from "./Error";
import Cart from "./Cart";
import Blogdetails from "./Blogdetails";
import Checkout from "./Checkout";
import Productdtls from "./Productdtls";
import Suncare from "./sun-care";
import Haircare from "./hair-care";
import Skincare from "./skin-care";
import Bodycare from "./body-care";
import Facecare from "./face-care";
import Login from "./Login";
import Register from "./Register";
import MyAccount from "./Account";
import Account1 from "./component/Account1";
import Account2 from "./component/Account2";
import Account3 from "./component/Account3";
import Updateprofile from "./Updateprofile";
import Accountup from "./Accountup";
import Accountpp from "./Accountpp";
function App() {
  return (
    <div className="App">
      <Routes >
   <Route path="/" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="shopfullwidth" element={<Blogfullwidth />} />
      <Route path="faq" element={<Faq />} />
      <Route path="error" element={<Error />} />
      <Route path="cart" element={<Cart />} />
      <Route path="blog-details/:name" element={<Blogdetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product-details/:name" element={<Productdtls />} />
      <Route path="sun-care" element={<Suncare />} />
      <Route path="hair-care" element={<Haircare />} />
      <Route path="skin-care" element={<Skincare />} />
      <Route path="body-care" element={<Bodycare />} />
      <Route path="face-care" element={<Facecare />} />
      <Route path="login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Updateprofile" element={<Updateprofile />} />
      <Route path="MyAccount" element={<MyAccount />} >
        <Route index element={<Account1 />} />
        <Route path="account2" element={<Account2 />} />
        <Route path="account3" element={<Account3 />} />
        <Route path="accountup" element={<Accountup />} />
        <Route path="accountpp" element={<Accountpp />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;

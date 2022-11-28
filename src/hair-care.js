import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Minibolgwidth from "./Minibolgwidth";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
import { useGetAllProductByCategoryQuery } from "./services/apifile";
const Haircare = () => {
  const productsdata = useGetAllProductByCategoryQuery("hair-care");
  const superproduct = productsdata.data;
  if (productsdata.isLoading === true) {
    return <div></div>;
  } else {
    return (
      <div>
        <Socialmedia />
        <Helmet>
          <title>blog full width</title>
          <meta name="description" content="ayur blog full width page" />
          <meta
            name="keywords"
            content="herbal product, body care, face care"
          />
        </Helmet>
        <Header />
        <Scrolltotop />
        <Menu />
        <Pagebredcame title="Hair care" subtitle="LET YOUR HAIR SWAY WITH BOUNCE." />
        <div className="fullwidth">
          <div className="fullmenu">
            {superproduct.data[0].map((item) => (
              <Minibolgwidth
                ptitle={item.product_title}
                url={item.image1}
                sellp={item.selling_price}
                mrppr={item.mrp_price}
                prurl={item.pg_url}
                productid={item.product_id}
              />
            ))}
          </div>
         
        </div>

        <Footer />
        <Lastfooter />
      </div>
    );
  }
};
export default Haircare;

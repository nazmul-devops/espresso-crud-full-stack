import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Helmet>
        <title>
          Home Page
        </title>
      </Helmet>
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://nazmul-ph-resources.s3.ap-south-1.amazonaws.com/coffee-store-espresso-emporium-main/images/Rectangle+1menu_bg.png)",
        }}
      >
        <Link to="/">
          <div className="text-neutral-content">
            <div className="flex justify-center items-center gap-2 py-4">
              <img
                className="w-[75px] h-[90px]"
                src="https://nazmul-ph-resources.s3.ap-south-1.amazonaws.com/coffee-store-espresso-emporium-main/images/more/logo1.png"
                alt="logo"
              />
              <h1 className="mb-5 text-5xl font-bold font-rancho pt-5">
                Espresso Emporium
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

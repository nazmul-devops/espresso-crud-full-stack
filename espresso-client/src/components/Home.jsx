import Header from "./Header";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const response = useLoaderData();
  const coffees = JSON.parse(response.body);
  console.log(coffees);
  return (
    <div>
      <Header></Header>

      <div className="text-center">
        <p className="text-[#1B1A1A] text-xl font-railway my-5">
          --- Sip & Savor ---
        </p>
        <h1 className="text-6xl font-rancho mb-5">Our Popular Products</h1>
        <Link to="/add_coffee">
          <button className="bg-[#E3B577] py-3 px-5 rounded-lg mb-5">
            Add Coffee{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
            >
              <path
                d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z"
                fill="#331A15"
              />
            </svg>
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* coffee card  */}
          {coffees.map(coffee => (
            <div key={coffee.id} className="bg-[#F5F4F1] my-10 rounded-xl shadow-lg">
              <div className="flex  rounded-xl justify-center items-center">
                <img src={coffee.photo} alt="" />
                <div className="text-left">
                  <p>ID: {coffee._id}</p>
                  <p>Name: {coffee.name}</p>
                  <p>Supplier: {coffee.supplier}</p>
                  <p>Category: {coffee.category}</p>
                  <p>Price: {coffee.price}</p>
                  <p>Taste: {coffee.taste}</p>
                  <p>Details: {coffee.details}</p>
                </div>
              </div>
              <div className="my-5 space-x-3">
                <Link to={`/update_coffee/${coffee._id}`}>
                  <button className="btn btn-info" type="button">
                    Edit
                  </button>
                </Link>
                <Link to={`/update_coffee/${coffee._id}`}>
                  <button className="btn btn-error" type="button">
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;

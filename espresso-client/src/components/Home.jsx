import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-3xl text-center font-bold my-8">
        This is Home component.
      </h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  console.log(loadedCoffee);

  const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      price,
      taste,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5001/coffees/${loadedCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <Header></Header>
      <div className="bg-[#F4F3F0] p-16 max-w-7xl mx-auto mb-32">
        <Helmet>
          <title>Update Existing Coffee</title>
        </Helmet>
        <div className="text-center">
          <h1 className="font-rancho  text-5xl">Update Existing Coffee</h1>
          <p className="my-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at <br /> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed <br /> to using Content here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Name</span>
              <span className="label-text text-xl">ID: {loadedCoffee._id}</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Name"
              name="name"
              defaultValue={loadedCoffee.name}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Supplier"
              name="supplier"
              defaultValue={loadedCoffee.supplier}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Category</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Category"
              name="category"
              defaultValue={loadedCoffee.category}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Price"
              name="price"
              defaultValue={loadedCoffee.price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Taste"
              name="taste"
              defaultValue={loadedCoffee.taste}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Details</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Details"
              name="details"
              defaultValue={loadedCoffee.details}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photo"
              defaultValue={loadedCoffee.photo}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn capitalize text-2xl font-rancho bg-[#D2B48C] hover:bg-[#6f4d21] hover:text-white">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;

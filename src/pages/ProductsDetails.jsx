import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductsDetails() {
  const [product, setProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const { id } = useParams();

  const notify = () => {
    toast.success("Item added to bag", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        if (response.status == 200) {
          setProduct(response.data.data);
          setSelectedColor(response.data.data.attributes.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex items-center gap-2 mb-6 py-2">
          <Link to="/" className="text-[#394a6e] text-base hover:underline">
            Home
          </Link>
          <span className="text-gray-300">&gt;</span>
          <Link
            to="/products"
            className="text-[#394a6e] text-base hover:underline"
          >
            Products
          </Link>
        </div>
        {product.id && (
          <div className="flex  gap-x-16">
            <img
              src={product.attributes.image}
              alt=""
              className="w-[512px] h-[384px] object-cover rounded-md"
            />
            <div className="max-w-[512px]">
              <h1 className="text-[#394a6e] capitalize text-3xl font-bold">
                {product.attributes.title}
              </h1>
              <h4 className="text-xl  font-bold mt-2 text-gray-400">
                {product.attributes.company}
              </h4>
              <p className=" mt-3 text-xl text-[#394a6e]">
                {product.attributes.price / 100}
              </p>
              <p className="mt-6 leading-8 text-[#394a6e]">
                {product.attributes.description}
              </p>
              <h4 className="mt-6 text-[#394a6e] text-md font-medium tracking-wider capitalize mb-2">
                colors
              </h4>
              <div className="flex items-center gap-2">
                {product.attributes.colors.length > 0 &&
                  product.attributes.colors.map((color, index) => {
                    return (
                      <>
                        <span
                          key={index}
                          className="block w-6 h-6 bg-blue-700 rounded-full cursor-pointer"
                          style={{
                            backgroundColor: color,
                            border:
                              color == selectedColor
                                ? "2px solid blue"
                                : "none",
                          }}
                          onClick={() => {
                            setSelectedColor(color);
                          }}
                        ></span>
                      </>
                    );
                  })}
              </div>
              <label htmlFor="amount">
                <h4 className="py-2 px-1 text-[#394a6e] text-md ">Amount</h4>
              </label>
              <select
                id="amount"
                className="select select-primary w-full max-w-xs"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button
                onClick={notify}
                className="bg-[#463aa1] px-4 py-3.5 uppercase text-sm text-[#dbd4ed] rounded-md block mt-10"
              >
                Add to bag
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductsDetails;

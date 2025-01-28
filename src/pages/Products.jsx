import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sortBy, setSortBy] = useState("a-z");
  const [price, setPrice] = useState(100000);
  const [shipping, setShipping] = useState(false);
  const [loading, setLoading] = useState(false);
  function getData(url) {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setProducts(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData(
      "https://strapi-store-server.onrender.com/api/products?_page=3&_limit=10"
    );
  }, []);

  useEffect(() => {}, []);
  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://strapi-store-server.onrender.com/api/products?search=${search}&category=${category}&company=${company}&order=${sortBy}&price=${price}`;
    getData(url);
  }

  function handleReset() {
    setSearch("");
    setCategory("all");
    setCompany("all");
    setSortBy("a-z");
    setPrice(100000);
    setShipping(false);
  }

  return (
    <div className="py-20">
      <div className="container">
        {!loading && (
          <>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-4 place-items-center rounded-md px-8 py-4 gap-x-4 gap-y-8 bg-[#F0F6FF]"
            >
              <div className="w-full">
                <label htmlFor="search">
                  <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                    Search Product
                  </h4>
                </label>
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  id="search"
                  type="text"
                  className="input input-bordered input-sm w-full max-w-xs"
                />
              </div>
              <div className="w-full">
                <label htmlFor="category">
                  <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                    Select category
                  </h4>
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  id="category"
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option value="all">all</option>
                  <option>Tables</option>
                  <option>Chairs</option>
                  <option>Kids</option>
                  <option>Sofas</option>
                  <option>Beds</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="company">
                  <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                    Select company
                  </h4>
                </label>
                <select
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  id="company"
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option>all</option>
                  <option>Modenza</option>
                  <option>Luxora</option>
                  <option>Chairs</option>
                  <option>Artifex</option>
                  <option>Comfora</option>
                  <option>Homestead</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="sortBy">
                  <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                    Sort By
                  </h4>
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                  }}
                  id="sortBy"
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option>a-z</option>
                  <option>z-a</option>
                  <option>high</option>
                  <option>low</option>
                </select>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between py-2 px-1">
                  <label htmlFor="price">
                    <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                      Select Price
                    </h4>
                  </label>
                  <span className="text-[#394e6a] text-base">${price}</span>
                </div>
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                  }}
                  id="price"
                  type="range"
                  min={0}
                  max={100000}
                  step="1000"
                  className="range range-sm range-primary"
                />
                <div className="flex items-center justify-between text-xs px-2 ">
                  <span className="text-[#394e6a] font-bold text-[12px]">
                    0
                  </span>
                  <span className="text-[#394e6a] font-bold text-[12px]">
                    Max: $1,000,00
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <label htmlFor="shipping">
                  <h4 className="text-[#394e6a]  text-sm font-thin py-2 px-1 capitalize">
                    Free Shipping
                  </h4>
                </label>
                <input
                  onChange={(e) => {
                    setShipping(e.target.checked);
                  }}
                  id="shipping"
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                  checked={shipping}
                />
              </div>
              <div className=" w-full">
                <button className="btn btn-primary w-full">SEARCH</button>
              </div>
              <div className=" w-full">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary w-full"
                >
                  RESET
                </button>
              </div>
            </form>

            <div className="grid grid-cols-3 gap-4 pt-12">
              {products.length > 0 &&
                products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full shadow-xl pt-4 pl-4 pr-4 pb-8 rounded-xl text-center cursor-pointer hover:shadow-2xl transition duration-300"
                      onClick={() => {
                        handleRedirect(product.id);
                      }}
                    >
                      <img
                        src={product.attributes.image}
                        alt="image"
                        className="rounded-xl h-64 md:h-48 w-full object-cover mb-8"
                      />
                      <h2 className="capitalize tracking-wider text-[#394e6a] text-xl font-bold mb-2">
                        {product.attributes.title}
                      </h2>
                      <span className="text-base text-[#463AA1]">
                        {product.attributes.price}
                      </span>
                    </div>
                  );
                })}
            </div>
            {products.length == 0 && (
              <p className="text-2xl mt-7 text-[#394e6a] w-full ">
                Sorry, no products matched your search...
              </p>
            )}
          </>
        )}

        {loading && (
          <div
            className="flex items-center justify-center "
            style={{ height: "calc(70vh - 109px)" }}
          >
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Products;

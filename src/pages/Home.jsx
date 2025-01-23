import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((response) => {
        if (response.status == 200) {
          setProducts(response.data.data);
          console.log(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div className="py-20">
      <div className="container ">
        {!loading && (
          <>
            <div className="flex items-center gap-24">
              <div className="max-w-[496px]">
                <h1 className=" text-4xl font-bold tracking-tight sm:text-6xl text-[#394e6a] mb-8">
                  We are changing the way people shop
                </h1>
                <p className="max-w-xl text-[#394e6a]  text-lg leading-8 mb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore repellat explicabo enim soluta temporibus asperiores
                  aut obcaecati perferendis porro nobis.
                </p>
                <Link to="/products" className="block bg-[#057aff] px-4 py-3 text-[#dbe1ff] rounded-lg  ">
                  OUR PRODUCTS
                </Link>
              </div>
              <div className="corusel-wrapper max-w-[496px] overflow-x-scroll flex items-center gap-3 bg-gray-800 p-3 rounded-xl">
                <div className="flex-shrink-0">
                  <img
                    className="w-[320px] h-[416px] object-cover rounded-xl"
                    src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
                    alt=""
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-[320px] h-[416px] object-cover rounded-xl"
                    src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
                    alt=""
                  />
                </div>
                w
                <div className="flex-shrink-0">
                  <img
                    className="w-[320px] h-[416px] object-cover rounded-xl"
                    src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
                    alt=""
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-[320px] h-[416px] object-cover rounded-xl"
                    src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pt-24">
              <h2 className="text-3xl text-[#394e6a]   font-medium tracking-wider capitalize  border-b border-base-300 pb-5">
                Featured Products
              </h2>
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
            </div>
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
export default Home;

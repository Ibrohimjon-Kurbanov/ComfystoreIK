import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { edit, remove } from "../store/cardSlice";
function Card() {
  const card = useSelector((state) => state.card.value);
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.error(message, {
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

  let subtotal = 0;
  for (let i = 0; i < card.length; i++) {
    const price = Number(card[i].product.attributes.price);
    const count = card[i].count || 1;
    subtotal += price * count;
  }

  const shipping = 5.0;
  const tax = subtotal * 0.1;
  const orderTotal = subtotal + shipping + tax;

  function handleRemove(id, color) {
    console.log("ochirildi");
    dispatch(remove({ id, color }));
    notify("Item removed from cart");
  }
  function handleEdit(id, color, count) {
    dispatch(edit({ id, color, count }));
    notify("Item updated");
  }
  return (
    <div className="py-20">
      <div className="container">
        {card.length === 0 ? (
          <h2 className="text-3xl text-[#394e6a]   font-medium tracking-wider capitalize  border-b border-base-300 pb-6">
            Your cart is empty
          </h2>
        ) : (
          <h2 className="text-3xl text-[#394e6a]   font-medium tracking-wider capitalize  border-b border-base-300 pb-6">
            Shopping Cart
          </h2>
        )}

        {card.length > 0 && (
          <div className="mt-8 flex items-start justify-between gap-8">
            <div className="w-full flex-1">
              {card.length > 0 &&
                card.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 mb-4 py-4 rounded-lg text-left"
                    >
                      <img
                        src={item.product.attributes.image}
                        alt="image"
                        className="w-[128px] h-[128px] rounded-lg object-cover"
                      />
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[#39436a]">
                          {item.product.attributes.title}
                        </h3>
                        <h4 className="text-sm text-[#c7c9d1]">
                          {item.product.attributes.company}
                        </h4>
                        <p className="flex items-center gap-1.5">
                          Color:
                          <span
                            className="block w-4 h-4 rounded-full cursor-pointer"
                            style={{ backgroundColor: `${item.color}` }}
                          ></span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="amount">
                          <span className="text-[14px] text-[#39436a] font-thin">
                            Amount
                          </span>
                        </label>
                        <select
                          onChange={(e) =>
                            handleEdit(item.id, item.color, e.target.value)
                          }
                          value={item.count}
                          id="amount"
                          className="select select-bordered select-xs w-[55px]"
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => {
                            handleRemove(item.id, item.color);
                          }}
                          className="text-[14px] font-thin text-[#057aff] cursor-pointer"
                        >
                          remove
                        </button>
                      </div>
                      <p className="text-[#39436a]">
                        ${item.product.attributes.price}
                      </p>
                    </div>
                  );
                })}
            </div>

            <div className="p-8 bg-[#F0F6FF] max-w-sm w-full rounded-xl">
              <div className="flex flex-col gap-2.5">
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                  <span className="text-[#39436a] text-12px ">Subtotal</span>
                  <span className="text-[#39436a] text-12px ">
                    ${subtotal / 100}
                  </span>
                </p>
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                  <span className="text-[#39436a] text-12px ">Shipping</span>
                  <span className="text-[#39436a] text-12px ">
                    ${shipping.toFixed(2)}
                  </span>
                </p>
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                  <span className="text-[#39436a] text-12px ">Tax</span>
                  <span className="text-[#39436a] text-12px ">
                    ${tax.toFixed(2)}
                  </span>
                </p>
              </div>
              <p className="flex justify-between text-sm mt-4 pb-2">
                <span className="text-[#39436a] ">Order Total</span>
                <span className="text-[#39436a] ">
                  ${orderTotal.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        )}
        {card.length > 1 && <div className=""></div>}
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}
export default Card;

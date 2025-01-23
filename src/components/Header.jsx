import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-[#021431] py-2 text-neutral-content">
        <div className="container flex justify-end gap-x-6">
          <Link className="text-[14px]  text-[#c7c9d1] hover:underline">
            Sign in / Guest
          </Link>
          <Link className="text-[14px]  text-[#c7c9d1] hover:underline">
            Create Account
          </Link>
        </div>
      </div>
      <header className="bg-[#F0F6FF] py-2.5">
        <div className="container flex items-center justify-between">
          <div className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer">
            <Link to="/" className="text-3xl text-white opacity-65">
              C
            </Link>
          </div>
          <ul className="flex items-center gap-4 font-thin p-2">
            <li>
              <NavLink
                to="/"
                className="nav-link px-3 py-2 text-[15px] text-[#394e6a]  font-thin rounded-md transition-all duration-300  hover:bg-gray-300 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link px-3 py-2 text-[15px] text-[#394e6a]  font-thin rounded-md transition-all duration-300 hover:bg-gray-300 "
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="nav-link px-3 py-2 text-[15px] text-[#394e6a]  font-thin rounded-md transition-all duration-300 hover:bg-gray-300 "
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/card"
                className="nav-link px-3 py-2 text-[15px]  text-[#394e6a] font-thin rounded-md transition-all duration-300 hover:bg-gray-300 "
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width={18}
              height={18}
            >
              <path
                fill="#394e6a"
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </svg>
            <div className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-6 w-6 stroke-none "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#394e6a"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 bg-[#057aff] text-[#dbe1ff] text-[12px] font-bold rounded-2xl w-[22px] h-[16px] flex items-center justify-center  translate-x-[50%] translate-y-[-50%]">
                0
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;

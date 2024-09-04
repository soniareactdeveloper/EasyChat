import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 const data = useSelector((state)=>state.counter.value)

  return (
    <>
      <div className="w-52 h-screen bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] shadow-lg">
        <nav className="flex flex-col p-5 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/card"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Card
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Chat
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Notifications
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] transition-all duration-300 ease-in-out transform hover:scale-105"
                : "text-[#5C7BE0] p-3 rounded-md font-semibold text-[20px] hover:bg-[#5C7BE0] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            }
          >
            Messages
          </NavLink>
        </nav>
          <div className="mt-11 flex flex-col items-center">
              <img
                className="w-[50px] h-[50px] rounded-full border-2 border-[#5C7BE0] shadow-md"
                src={data?.photoURL}
                alt="profile"
              />
            <h2 className="text-[24px] font-semibold text-[#5C7BE0]">{data?.displayName}</h2>
          </div>
      </div>
    </>
  );
};

export default Navbar;

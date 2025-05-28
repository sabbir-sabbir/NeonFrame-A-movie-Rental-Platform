import React, { useState, useContext } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunnySnowing } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import CardDetails from "./cine/CardDetails";
import { movieContext, ThemeContext } from "./context";

const Header = () => {
  const [showCard, setShowCard] = useState(false);
  const { cardData } = useContext(movieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCardShow() {
    setShowCard(true);
  }
  return (
    <>
      {showCard && <CardDetails onClose={() => setShowCard(false)} />}
      <nav className=" h-[46px] flex item-center justify-between bg-sky-500/45 px-10 py-2 hover:h-[50px] transition-all duration-500">
        <div>
          <h2>
            Neon <span>Frame</span>{" "}
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <button>
            {" "}
            <MdNotificationsActive size="30" color="green" />{" "}
          </button>
          <button onClick={()=> setDarkMode(!darkMode)}>

            {darkMode ?  (
              <MdSunnySnowing size="24" color="green" />
            ) : (<BsMoonStarsFill size="24" color="green" />)

            }
            
          </button>
          <button className="relative" onClick={handleCardShow} ><MdOutlineShoppingCart  size="28" color="green" />
          {cardData.length > 0 && (
            <span className="  w-[25px] h-[25px] rounded-full font-medium text-center absolute top-[0px] left-[19px] bg-blue-500/55 text-white   ">{cardData.length}</span>
          )

          }
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

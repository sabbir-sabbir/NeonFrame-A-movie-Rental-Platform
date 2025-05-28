import { useContext } from "react";
import { movieContext } from "../context";

export default function CardDetails({ onClose }) {
  const { cardData, setCardData } = useContext(movieContext);

  function handleDeleteCard(itemId){
    const filterCardItem = cardData.filter((item)=> {
      return item.id !== itemId
    })

    setCardData([...filterCardItem])
  }
  return (
    <>
      <div className="w-[584px] h-auto py-4 px-4 rounded-md  absolute z-[100] top-20 right-16 bg-gradient-to-tl from-white via-white to-[#dc2f02]/55  shadow-2xl">
        <div className="flex flex-col gap-3 ">
          {
            cardData.length === 0 ? (<div className=" w-full text-center text-3xl font-bold ">No! Item Added Here</div>):
          
          
          (cardData.map((item)=> (
            
            <div key={item.id} className=" w-[584px] h-[116px] flex items-center justify-between rounded-md bg-sky-400 p-2 backdrop-blur-3xl hover:w-[600px] hover:h-[125px] transition-all duration-500">
              <div  className="space-y-2">
                <h3 className="text-xl font-semibold text-white ">{item.title}</h3>
                <p className="font-light ">{item.genre}</p>
                <p className="bg-amber-200 px-2 py-1 rounded-lg w-[80px]"> Tk - {item.price}</p>
              </div>

              <div>
                <button onClick={()=> handleDeleteCard(item.id)}>Remove</button>
              </div>
            </div>
          )))

          }
        </div>
      </div>
      {/* absolute z-[100] top-20 right-16 */}
      <button className="absolute z-[100] w-[120px] h-auto  top-[47px] right-[65px] bg-red-500  text-white font-medium px-1 py-1 rounded-md  hover:w-[150px] transition-all duration-300  " onClick={onClose}>
        Cancel
      </button>
    </>
  );
}

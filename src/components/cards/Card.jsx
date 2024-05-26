import { useEffect, useRef } from "react";

const Card = ({ card, index }) => {
  const cardRef = useRef();
  useEffect(() => {
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current.style.opacity = "1";
      }, index * 30);
    }
  }, []);
  return (
    <div
      ref={cardRef}
      className="p-5 border-[1.5px] border-[#D7DFE9] rounded shadow-lg shadow-gray-300/30 opacity-0 transition-all duration-300 hover:scale-105"
    >
      <div className="flex">
        <div>
          <div className="p-2 border-[#D7DFE9] border-[2.5px] rounded-md">
            <img
              src={card.icon_url}
              alt="Icon"
              className="size-9 object-cover rounded-md"
            />
          </div>
        </div>
        <div className="pl-5 flex flex-col justify-between">
          <div className="text-lg font-medium pt-1">{card.title}</div>
          <div className="text-sm font-light pb-1 text-[#7E858E]">
            {card.category}
          </div>
        </div>
      </div>
      <div className="pt-2">
        <a href={card.link} className="text-[#0B69FF] font-light">
          {card.link}
        </a>
      </div>
      <div className="text-[#7E858E] font-light pt-2 max-h-14 line-clamp-2 overflow-hidden text-ellipsis">
        {card.description}
      </div>
    </div>
  );
};

export default Card;

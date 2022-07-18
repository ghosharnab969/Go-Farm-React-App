import React from "react";

const fruits = (props) => {
  const imgSrc = props.imgSrc;
  const name = props.name;
  const price = props.price;
  const weight = props.weight;
  const btnIcon = props.btnIcon;
  const discountPrice = props.discountPrice;
  const strikedOffPrice = props.strikedOffPrice;
  const hotTag = props.hotTag;
  const saleTag = props.saleTag;
  const newTag = props.newTag;
  const soldOut = props.soldOut;

  return (
    <div className="relative mx-8 my-6">
      <img
        className="w-44 h-44 hover:scale-110 hover:transition ease-in-out duration-700 delay-150 "
        src={imgSrc}
        alt={name}
      />
      <div className="h-20 flex flex-col justify-evenly items-left relative bottom-48 right-10">
        {hotTag}
        {newTag}
        {saleTag}
      </div>
      <div className=" absolute top-40 right-10 ">
        <div className="border rounded-sm border-gray-300 w-9 h-8 flex justify-center items-center bottom-46">
          <button>{btnIcon}</button>
        </div>
        <p className="text-black text-sm font-medium   mt-2 banner">{name}</p>
        <p>
          <span className="text-green-500 text-sm banner">{discountPrice}</span>
          <span className="text-slate-400 text-sm banner line-through">
            {strikedOffPrice}
          </span>
          <span className="text-slate-400 text-sm banner">{soldOut}</span>
        </p>
        <p className="text-gray-700 text-sm font-normal  mt-2 banner">
          {weight}
        </p>

        <p className="text-gray-700 text-sm  mt-2 mb-10 banner">{price}</p>
      </div>
    </div>
  );
};

export default fruits;

import React from "react";

function Cards({ item }) {
    //console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="" className="max-w-full h-48"/>
          </figure>
          <div className="card-body">
            <div className="card-title flex justify-between">
              <h2>{item.name}</h2>
              <h2 className="badge badge-secondary h-auto" >{item.category}</h2>
              
            </div>
            <p className="sm:overflow-visible truncate  md:overflow-hidden ">{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className=" px-4 py-1 rounded-full border-[2px] cursor-pointer hover:bg-pink-500 hover:text-white duration-200">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

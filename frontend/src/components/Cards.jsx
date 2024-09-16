import React from "react";

function Cards({ item }) {
  if (!item) {
    // Handle the case where item is undefined
    return <div>Item not found</div>;
  }

  console.log("Item in the card: ", item);

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.price === 0 && (
              <div className="badge badge-secondary">Free</div>
            )}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{item.category}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 px-2 py-1">
              Price: ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

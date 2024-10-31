import React, { useContext } from "react";
import { myContext } from "./Products";
import Star from "./Star";
import { Button } from "flowbite-react";

const Cards = () => {
  const [data, setData] = useContext(myContext);

  const totalPrice = data.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const increment = (id) => {
    setData((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setData((curr) =>
      curr.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };

  const deleteButton = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="fixed top-0 right-0 text-3xl font-bold mt-4 mr-4 dark:text-teal-500">{`Total Quantity: ${totalQuantity}`}</h1>
      <h1 className="fixed top-10 right-0 text-3xl font-bold mt-4 mr-4  dark:text-teal-500">{`Total Price: $${totalPrice.toFixed(
        2
      )}`}</h1>

      {data.map((element) => (
        <div key={element.id} className="bg-white rounded-lg shadow-md mb-4">
          <div className="flex p-4">
            <div className="w-1/3">
              <img
                src={element.image}
                alt="Product"
                className="w-52 h-52 object-cover rounded-lg"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="w-2/3 pl-4">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {element.title}
              </h5>
              <h3 className="text-black">{element.description}</h3>
              <Star rating={element.rating} />

              <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${element.price}
                </span>
                <div className="flex items-center">
                  <Button color="blue" onClick={() => decrement(element.id)}>
                    -
                  </Button>
                  <span className="mx-2  text-black">
                    {element.quantity || 1}
                  </span>
                  <Button color="blue" onClick={() => increment(element.id)}>
                    +
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => deleteButton(element.id)}
                    className="ml-2"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

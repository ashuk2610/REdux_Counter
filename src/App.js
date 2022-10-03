import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);

  const dispatch = useDispatch();

  const inputDataChange = () => {};

  return (
    <>
      <div className="container flex justify-center items-center flex-col min-w-full h-screen">
        <h1 className="text-slate-500 text-xl sm:text-4xl md:text-5xl">
          {" "}
          Increment/Decrement Counter
        </h1>
        <h4 className="text-slate-500 text-lg sm:text-2xl md:text-3xl mt-3">
          using React and Redux
        </h4>

        <div className="counter-container flex justify-center items-center bg-slate-200 mt-10  rounded-lg">
          <a
            className="decr flex justify-center items-center hover:bg-slate-500 rounded-lg"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            -
          </a>
          <input
            type="text"
            className="data border-2 text-center text-green-600 rounded-lg"
            name="number"
            value={myState}
            onChange={inputDataChange}
          />
          <a
            className="incr flex justify-center items-center hover:bg-slate-500"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            +
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

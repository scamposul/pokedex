import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/user.slice";

const UserInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const dispatchUser = () => {
    dispatch(changeName(input));
    navigate("/pokedex");
  };

  return (
    <div className="userInput">
      <h1>Welcome to the world of Pokémon!</h1>
      <p>Insert your name to continue</p>
      <div className="inputRow">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="nameInput"
        />
        <button onClick={dispatchUser} className="sendButton"><i className="fa-solid fa-paper-plane"></i></button>
      </div>
      <br />
      <img src="src\components\oak.png" className="oak" />
      <h3>Name: {input}</h3>
    </div>
  );
};

export default UserInput;

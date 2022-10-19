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
        <button onClick={dispatchUser} className="sendButton">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
      <br />
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2e856d1-b7d1-4b70-ad6f-724be1ffc7b7/de6xo20-7594a7b9-49ab-4ed4-b759-b352e7801780.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyZTg1NmQxLWI3ZDEtNGI3MC1hZDZmLTcyNGJlMWZmYzdiN1wvZGU2eG8yMC03NTk0YTdiOS00OWFiLTRlZDQtYjc1OS1iMzUyZTc4MDE3ODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yhMR3vPVgAkIqSFh4L-V0-NedrcA23p1oHtRcHJFsTs"
        className="oak"
      />
      <h3>Name: {input}</h3>
    </div>
  );
};

export default UserInput;

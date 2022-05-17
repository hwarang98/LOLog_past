import axios from "axios";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Api.css";

function Api() {
  const [summoner, setSummoner] = useState("");
  const navigate = useNavigate();

  const summonerApi = (e) => {
    e.preventDefault();
    console.log("들어옴?");
    axios
      .post(
        "http://localhost:4000/api",
        {
          summoner: summoner,
        },
        {
          headers: { "Content-Type": "application/json;charset=utf-8" },
          withCredentials: true,
        }
      )
      .then((data) => {
        console.log(data.data);
        navigate("/summoner");
      })
      .catch((err) => {
        console.log("❗️ 에러: ", err);
      });
  };
  const onChangeSummoner = useCallback((e) => {
    setSummoner(e.target.value);
  });
  return (
    <div className="container">
      <h1 className="logoText">LOLog</h1>
      <form>
        <input
          type="text"
          placeholder="소환사명"
          onChange={onChangeSummoner}
        ></input>
        <button type="submit" onClick={summonerApi}>
          Log
        </button>
      </form>
    </div>
  );
}
export default Api;

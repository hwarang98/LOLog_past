import axios from "axios";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Api.css";
import Summoners from "./Summoner";

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
        const {
          id,
          accountId,
          puuid,
          name,
          profileIconId,
          revisionDate,
          summonerLevel,
        } = data.data.data;
        axios.post("http://localhost:4000/summoner", {
          id,
          accountId,
          puuid,
          name,
          profileIconId,
          revisionDate,
          summonerLevel,
        });
        navigate("/summoner", { state: data.data.data });
      })
      .catch((err) => console.log("에러뜸: ", err));
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

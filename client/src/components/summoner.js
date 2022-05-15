import axios from "axios";
// require("dotenv").config();
import React, { useEffect, useState, useCallback } from "react";

export default function Summoner() {
  const [summoner, setSummoner] = useState("돌면킬");

  const riotApi = (e) => {
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
        console.log(data);
      })
      .catch((err) => {
        console.log("❗️ 에러: ", err);
      });
  };
  const onChangeSummoner = useCallback((e) => {
    console.log(e.target.value);
    setSummoner(e.target.value);
  });
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="소환사명" onChange={onChangeSummoner} />
        <button type="submit" onClick={riotApi}>
          .Log
        </button>
      </form>
    </div>
  );
}

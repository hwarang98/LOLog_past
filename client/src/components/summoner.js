import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

function Summoners() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState();
  const {
    id,
    accountId,
    puuid,
    name,
    profileIconId,
    revisionDate,
    summonerLevel,
  } = state;
  const userApi = (e) => {
    console.log("검색결과인데 들어옴?");
    const url = "http://localhost:4000/summoner";
    axios
      .post("http://localhost:4000/summoner", {
        id,
        accountId,
        puuid,
        name,
        profileIconId,
        revisionDate,
        summonerLevel,
      })
      .then((data) => {
        const userData = data.data.data;
        // console.log(userData);
        setUserInfo(userData);
        console.log("성공");
      })
      .catch((err) => console.log("에러뜸: ", err));
  };
  console.log(userInfo);
  useEffect(() => {
    return () => {
      userApi();
    };
  }, []);
  return (
    <div>
      <h1>소환사 정보</h1>
      {userInfo &&
        userInfo.map((user) => {
          console.log("user?: ", user.summonerName);
          return (
            <div>
              <li>{user.summonerName}</li>
              <li>
                {user.tier} {user.rank}
              </li>
              <li>{user.wins}승</li>
              <li>{user.losses}패</li>
              {user.queueType}
            </div>
          );
        })}
    </div>
  );
}

export default Summoners;

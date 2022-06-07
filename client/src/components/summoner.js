import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Summoner.css";
import { useLocation } from "react-router";
import TireEmblems from "./TireEmblem";

function Summoners() {
  const [userInfo, setUserInfo] = useState();
  const [freeRankWins, setFreeRankWins] = useState();
  const [freeRankLosses, setFreeRankLosses] = useState();
  const [soloRankWins, setSoloRankWins] = useState();
  const [soloRankLosses, setSoloRankLosses] = useState();
  const [matchList, setMatchList] = useState();
  const { state } = useLocation();
  const {
    id,
    accountId,
    puuid,
    name,
    profileIconId,
    revisionDate,
    summonerLevel,
  } = state;
  const userIcon = `http://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${profileIconId}.png`;
  const userApi = (e) => {
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
        setUserInfo(userData);
        setFreeRankWins(userData[0].wins);
        setFreeRankLosses(userData[0].losses);
        setSoloRankWins(userData[1].wins);
        setSoloRankLosses(userData[1].losses);
      })
      .then(() => {
        axios
          .post("http://localhost:4000/match", {
            puuid,
          })
          .then((data) => {
            const matchData = data.data.data;
            setMatchList(matchData);
          });
      })
      .catch((err) => console.log("에러뜸: ", err));
  };

  useEffect(() => {
    return () => {
      userApi();
    };
  }, []);
  const freeRankGameSum = freeRankWins + freeRankLosses;
  const freeRankWinRate = Math.ceil((freeRankWins / freeRankGameSum) * 100);

  const soloRankGameSum = soloRankWins + soloRankLosses;
  const soloRankWinRate = Math.ceil((soloRankWins / soloRankGameSum) * 100);

  return (
    <div>
      <h1>소환사 정보</h1>
      {userInfo &&
        userInfo.map((user) => {
          return (
            <div key={user.wins}>
              <div className="rankType">{user.queueType}</div>

              <img src={userIcon} style={{ height: 100 }} />
              <TireEmblems userTire={user.tier}></TireEmblems>
              <li>
                {user.summonerName} {summonerLevel}
              </li>
              <li>
                {user.tier} {user.rank}
              </li>
              <li>{user.wins} 승</li>
              <li>{user.losses} 패</li>
              <div className="rankType">
                {user.queueType === "RANKED_FLEX_SR" ? (
                  <li>승률 {freeRankWinRate} %</li>
                ) : (
                  <li>승률 {soloRankWinRate} %</li>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Summoners;

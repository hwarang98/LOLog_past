import React, { useState, useEffect } from "react";
import axios from "axios";

function Summoners() {
  const [userInfo, setUserInfo] = useState("");
  const [id, setId] = useState(
    "OBHZRCKHtthQBE3HZR2ToLk4hX5NJsUetw35yTGfIx7c1hPDRjlq10gVlQ"
  );
  const [accountId, setAccountId] = useState(
    "jAzfVRgCfRkdDxVYs9cVB7TFdQMVLqdrgme-qRZ0Opz3-vD-sP_t_2qj"
  );
  const [puuid, setPuuid] = useState(
    "_4GR53i0CNAsi64X7fepBN0QIZhSkiEgO1QK_hxyIJdEnGS4pzr1VRatAAj0svbs78JXtOaJZy5zuQ"
  );
  const [name, setName] = useState("돌면킬");
  const [profileIconId, setProfileIconId] = useState(4837);
  const [revisionDate, setRevisionDate] = useState(1652591122000);
  const [summonerLevel, setsummonerLevel] = useState(84);

  const userApi = (e) => {
    // e.preventDefault();
    console.log("검색결과인데 들어옴?");
    const url = "http://localhost:4000/summoner";
    axios
      .post("http://localhost:4000/summoner", {
        id: id,
        accountId: accountId,
        puuid: puuid,
        profileIconId: profileIconId,
        revisionDate: revisionDate,
        summonerLevel: summonerLevel,
      })
      .then((data) => {
        console.log(data.data);
        setUserInfo(data.data);
        console.log("성공");
      })
      .catch((err) => console.log("에러뜸: ", err));
  };
  // useEffect(() => {
  //   userApi();
  // });
  return (
    <div>
      <h1>소환사 정보</h1>
      <button onClick={userApi}>ddddd</button>
    </div>
  );
}

export default Summoners;
// {
//   "id": "OBHZRCKHtthQBE3HZR2ToLk4hX5NJsUetw35yTGfIx7c1hPDRjlq10gVlQ",
//   "accountId": "jAzfVRgCfRkdDxVYs9cVB7TFdQMVLqdrgme-qRZ0Opz3-vD-sP_t_2qj",
//   "puuid": "_4GR53i0CNAsi64X7fepBN0QIZhSkiEgO1QK_hxyIJdEnGS4pzr1VRatAAj0svbs78JXtOaJZy5zuQ",
//   "name":"'돌면킬",
//   "profileIconId": 4837,
//   "revisionDate": 1652591122000,
//   "summonerLevel": 84
//   }

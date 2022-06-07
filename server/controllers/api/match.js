require("dotenv").config();
const axios = require("axios");

module.exports = (req, res) => {
  const { puuid } = req.body;
  const URL = "https://asia.api.riotgames.com";
  const headers = {
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": `${process.env.API_KEY}`,
  };

  axios
    .get(`${URL}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`, {
      headers,
      withCredentials: true,
    })
    .then((data) => {
      const matchList = data.data;
      const matchId = matchList[0];
      console.log("matchList: ", matchList);
      axios
        .get(`${URL}/lol/match/v5/matches/${matchId}`, {
          headers,
          withCredentials: true,
        })
        .then((data) => {
          const gameInfo = data.data.info;
          console.log("gameInfo: ", gameInfo);
        });
      // res.status(200).send({ message: "match 보내기 성공", data: data });
    });
};

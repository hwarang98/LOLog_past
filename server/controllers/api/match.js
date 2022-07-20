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
      let gameInfo = [];
      const matchList = data.data;
      console.log("matchList: ", matchList);
      for (let i = 0; i < matchList.length; i++) {
        axios
          .get(`${URL}/lol/match/v5/matches/${matchList[i]}`, {
            headers,
            withCredentials: true,
          })
          .then((data) => {
            gameInfo.push("asd");
          });
      }
      res.status(200).send({ data: gameInfo, message: "성공" });
    });
};

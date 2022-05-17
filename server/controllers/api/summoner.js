require("dotenv").config();
const axios = require("axios");

module.exports = (req, res) => {
  const { summoner } = req.body;
  const URL = "https://kr.api.riotgames.com";
  const headers = {
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": `${process.env.API_KEY}`,
  };

  axios
    .get(
      `${URL}/lol/summoner/v4/summoners/by-name/${encodeURI(
        summoner
      )}?api_key=${process.env.API_KEY}`,
      {
        headers,
        withCredentials: true,
      }
    )
    .then((data) => {
      const summonerInfo = JSON.stringify(data.data).split(",");
      const infoParse = JSON.parse(summonerInfo);
      res.status(200).send({ message: "성공", data: infoParse });
    });
};

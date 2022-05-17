require("dotenv").config();
const axios = require("axios");

module.exports = (req, res) => {
  const stringify = JSON.stringify(req.body).split(",");
  const userData = JSON.parse(stringify);
  const id = userData.id;
  const URL = "https://kr.api.riotgames.com";
  const headers = {
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": `${process.env.API_KEY}`,
  };

  axios
    .get(
      `${URL}/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`,
      {
        headers,
        withCredentials: true,
      }
    )
    .then((data) => {
      const stringify = JSON.stringify(req.body).split(",");
      const userData = JSON.parse(stringify);
      res
        .status(200)
        .send({ message: "summoner 로 보내기 성공", data: userData });
    });
};

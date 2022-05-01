const axios = require("axios");

module.exports = (req, res) => {
  const headers = {
    "X-Riot-Token": `${process.env.API_KEY}`,
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  console.log("req.body: ", req.body);

  axios
    .get(`${process.env.API_URL}/summoner/v4/summoners/by-name/돌면킬`, {
      headers,
    })
    .then((data) => {
      console.log("✅ data: ", data);
    });
};

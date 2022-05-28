import React from "react";

function Emblems(tire) {
  const userTire = tire.userTire;

  const emblems = () => {
    if (userTire === "IRON") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Iron.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "BRONZE") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Bronze.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "SILVER") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Silver.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "GOLD") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Gold.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "PLATINUM") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Platinum.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "DIAMOND") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Diamond.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "MASTER") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Master.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "GRANDMASTER") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Grandmaster.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    } else if (userTire === "CHALLENGER") {
      return (
        <img
          className="userTire"
          src={"img/Emblem_Challenger.png"}
          style={{ height: 100 }}
          alt="tire"
        ></img>
      );
    }
  };
  return (
    <div className="tireEmblems">
      <div>{emblems()}</div>
    </div>
  );
}

export default Emblems;

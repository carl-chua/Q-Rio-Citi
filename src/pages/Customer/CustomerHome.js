import React from "react";
import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import ShoppingCartIcon from "../../assets/ShoppingCartIcon.svg";
import ProfileImage from "../../assets/ProfileImage.png";

export default function CustomerHome() {
  function displayVoucherCard(marginTop, text, number) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: "25px",
            width: "86%",
            marginTop: marginTop,
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent>
            <h4 style={{ color: "#3A3A3A", margin: 0, fontWeight: "normal" }}>
              {text}
            </h4>
            <div
              className="NumVouchersAndSeeAll"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h1 style={{ color: "#003B70", margin: 0, paddingLeft: "6px" }}>
                {number}
              </h1>
              <p style={{ color: "#898A8D", margin: 0, paddingTop: "10px" }}>
                {"See All >"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div
        className="BlueRibbon"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#003B70",
          borderRadius: "50px",
          marginTop: "-50px",
          paddingBottom: "60px",
        }}
      >
        <div
          className="ShoppingCartAndAvatar"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            className="ShoppingCart"
            style={{ paddingTop: "90px", paddingLeft: "20px" }}
          >
            <img src={ShoppingCartIcon} alt="" />
          </div>
          <div
            className="Avatar"
            style={{ paddingTop: "82px", paddingRight: "8px" }}
          >
            <Avatar
              src={ProfileImage}
              alt=""
              style={{ width: "70px", height: "70px" }}
            />
          </div>
        </div>
        <div className="WelcomeText" style={{ marginLeft: "60px" }}>
          <h3 style={{ margin: 0, lineHeight: 0.8, color: "white" }}>
            Good Morning
          </h3>
          <h3 style={{ margin: 0, color: "white" }}>Alex,</h3>
        </div>
      </div>
      {displayVoucherCard("-42px", "Your total vouchers", "27")}
      {displayVoucherCard("8px", "Your unused vouchers", "9")}
      {displayVoucherCard("8px", "Your past vouchers", "18")}
    </div>
  );
}

import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function onClickCustomer() {
    history.push("/customer");
  }

  function onClickMerchant() {
    history.push("/merchant");
  }


  return (
    <div className="Home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid xs={12} style={{ marginBottom: "20px", marginTop: "80px" }}>
            <Button
              style={{ height: "50px" }}
              variant="contained"
              onClick={onClickCustomer}
            >
              Customer
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              style={{ height: "50px" }}
              variant="contained"
              onClick={onClickMerchant}
            >
              Merchant
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

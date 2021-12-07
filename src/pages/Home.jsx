import { Grid, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import ClientListCard from "../components/clients/ClientListCard";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const Contianer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%auto;
  height: 100vh;
`;

const LeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 65px;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  box-shadow: 0 4px 4px -4px ${grey[400]};
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;
const Home = () => {
  return (
    <Contianer>
      <LeftContainer>
        <LeftMenu />
      </LeftContainer>
      <RightContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <CanvasContainer>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10.5}>
              <ClientListCard />
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
        </CanvasContainer>
      </RightContainer>
    </Contianer>
  );
};

export default Home;
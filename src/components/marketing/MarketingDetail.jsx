import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ClientCard from "../clients/ClientCard";
import {
  CanvasCustom,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";
import BasicInfo from "./BasicInfo";
import ExtraInfo from "./ExtraInfo";
import MemoInput from "./MemoInput";
import TmMemoList from "./MemoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/base";
import { putData } from "../modules/PostData";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
`;

const SubTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const MarketingActionWrapper = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const MarketingActionBox = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;
const MarketingDetail = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [getClients, setGetClients] = useState([]);
  const [basicInfo, setBasicInfo] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const { uid } = useParams();

  const getData = async () => {
    setLoading(true);
    const header = { "Content-type": "application/json" };
    try {
      const res = await axios({
        method: "get",
        url: `${BASE_URL}/api/client/find/${uid}`,
        headers: header,
      });

      setBasicInfo({
        clientStatus: res.data.clientStatus,
        clientFavorite: res.data.clientFavorite,
      });
      setExtraInfo({ ...res.data.clientExtra });
      setGetClients(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("불러오기 실패!");
    }
  };

  useEffect(() => {
    //console.log(extraInfo);
    getData();
  }, []);

  const updatedClient = () => {
    const items = { ...basicInfo, ...extraInfo };
    const url = `${BASE_URL}/api/client/find/${uid}`;
    //console.log(items);
    putData(items, url);
  };

  return (
    <Container>
      <CanvasCustom style={{ flex: 1, marginBottom: 20, height: "auto" }}>
        <ComponentHeaderWrapper>
          <ComponentHeaderTitle color={orange[500]}>
            상담 노트
          </ComponentHeaderTitle>
          {JSON.stringify(getClients)}
          <MarketingActionWrapper>
            <Button onClick={updatedClient}>저장</Button>
          </MarketingActionWrapper>
        </ComponentHeaderWrapper>
      </CanvasCustom>
      <ComponentBodyWrapper style={{ border: "none", height: "auto" }}>
        <Grid container spacing={5} justifyContent="space-around" padding={0}>
          <Grid xs={2} item>
            <CanvasCustom>
              <SubTitle>상담 대기</SubTitle>
              <div style={{ width: "100%" }}>
                <Divider />
              </div>
              <ListWrapper>
                <ClientCard />
              </ListWrapper>
            </CanvasCustom>
          </Grid>
          <Grid xs={5} item>
            <Stack direction="column" spacing={2}>
              <CanvasCustom style={{ height: "200px" }}>
                <BasicInfo
                  num={getClients.clientNumber}
                  setBasicInfo={setBasicInfo}
                  basicInfo={basicInfo}
                />
              </CanvasCustom>
              <CanvasCustom style={{ height: "auto" }}>
                <ExtraInfo
                  setGetClients={setGetClients}
                  getClients={getClients}
                  extraInfo={getClients.extraInfo}
                />
              </CanvasCustom>
            </Stack>
          </Grid>
          <Grid xs={5} item>
            <Stack direction="column" spacing={2}>
              <CanvasCustom style={{ height: "200px", padding: "10px" }}>
                <MemoInput />
              </CanvasCustom>
              <CanvasCustom style={{ height: "auto" }}>
                <TmMemoList />
              </CanvasCustom>
            </Stack>
          </Grid>
        </Grid>
      </ComponentBodyWrapper>
    </Container>
  );
};
export default MarketingDetail;

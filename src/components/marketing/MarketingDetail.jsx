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
import { BASE_URL } from "../../config/base";
import { getData, putData } from "../modules/PostData";
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
const MarketingDetail = () => {
  const [resData, setResData] = useState([]);
  const [basicInfo, setBasicInfo] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [memoInfo, setMemoInfo] = useState([]);
  const { uid } = useParams();

  const getUrl = `${BASE_URL}/api/client/find/${uid}`;
  const putUrl = getUrl;

  useEffect(() => {
    const getClient = () => {
      getData(getUrl).then((res) => {
        setResData(res);
        setBasicInfo(() => {
          return {
            clientNumber: res.clientNumber,
            clientStatus: res.clientStatus,
          };
        });
        setExtraInfo(() => {
          return res.clientExtra;
        });
        setMemoInfo(() => {
          return [res.clientMemo];
        });
      });
    };
    getClient();
  }, []);

  const updatedClient = () => {
    const items = {
      clientNumber: basicInfo.clientNumber,
      clientStatus: basicInfo.clientStatus,
      clientExtra: extraInfo,
      clientMemo: memoInfo,
    };
    const url = `${BASE_URL}/api/client/find/${uid}`;
    //putData(items, url);
  };

  // useEffect(() => {
  //   updatedClient();
  // }, [basicInfo, extraInfo, memoList]);

  return (
    <Container>
      <CanvasCustom style={{ flex: 1, marginBottom: 20, height: "auto" }}>
        <ComponentHeaderWrapper>
          <ComponentHeaderTitle color={orange[500]}>
            상담 노트{JSON.stringify(basicInfo)}
            {JSON.stringify(extraInfo)}
          </ComponentHeaderTitle>

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
                <BasicInfo basicInfo={basicInfo} putUrl={putUrl} />
              </CanvasCustom>
              <CanvasCustom style={{ height: "auto" }}>
                <ExtraInfo extraInfo={extraInfo} putUrl={putUrl} />
              </CanvasCustom>
            </Stack>
          </Grid>
          <Grid xs={5} item>
            <Stack direction="column" spacing={2}>
              <CanvasCustom style={{ height: "200px", padding: "10px" }}>
                <MemoInput
                  uid={uid}
                  memoCount={memoInfo.length}
                  memoInfo={memoInfo}
                  setMemoInfo={setMemoInfo}
                />
                {memoInfo.length}
              </CanvasCustom>
              <CanvasCustom style={{ height: "auto" }}>
                <TmMemoList uid={uid} memoInfo={memoInfo} />
              </CanvasCustom>
            </Stack>
          </Grid>
        </Grid>
      </ComponentBodyWrapper>
    </Container>
  );
};
export default MarketingDetail;

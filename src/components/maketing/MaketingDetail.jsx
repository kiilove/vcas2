import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import styled from "styled-components";
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
const MaketingDetail = () => {
  return (
    <Container>
      <CanvasCustom style={{ flex: 1, marginBottom: 20, height: "auto" }}>
        <ComponentHeaderWrapper>
          <ComponentHeaderTitle color={orange[500]}>
            상담 노트
          </ComponentHeaderTitle>
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
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
              </ListWrapper>
            </CanvasCustom>
          </Grid>
          <Grid xs={5} item>
            <Stack direction="column" spacing={2}>
              <CanvasCustom style={{ height: "200px" }}>
                <BasicInfo />
              </CanvasCustom>
              <CanvasCustom style={{ height: "auto" }}>
                <ExtraInfo />
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
export default MaketingDetail;

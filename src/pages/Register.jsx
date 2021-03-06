import { Button, Divider, TextField } from "@mui/material";
import { grey, orange, indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CanvasCustom,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../components/styles/Common";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #292f4d;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RegisterTitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 10px;
`;

const RegisterTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 10px;
`;

const PortalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PortalCanvas = styled.div`
  flex: 1;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  border: 0.5px solid ${grey[400]};
  margin: 10px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${indigo[500]};
  text-decoration: none;
  &:hover {
    color: ${orange[700]};
    cursor: pointer;
  }
`;

const LoginTypo = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${grey[500]};
  text-decoration: none;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <CanvasCustom style={{ width: "600px", padding: "50px" }}>
          <RegisterTitleWrapper>
            <RegisterTitle>????????????</RegisterTitle>
            <RegisterTitle style={{ fontSize: "20px", fontWeight: "400" }}>
              VCAS??? ?????? ????????? ?????? ????????? ???????????????.
            </RegisterTitle>
          </RegisterTitleWrapper>
          <PortalWrapper sx={{ mb: 5 }}>
            <PortalCanvas>
              <img
                src="/img/logos/google.png"
                width="30px"
                alt=""
                style={{ marginRight: "20px" }}
              />{" "}
              ?????????????????? ????????????
            </PortalCanvas>
            <PortalCanvas>
              <img
                src="/img/logos/facebook.png"
                width="30px"
                alt=""
                style={{ marginRight: "20px" }}
              />{" "}
              ???????????????????????? ????????????
            </PortalCanvas>
          </PortalWrapper>

          <Divider sx={{ width: "100%", mb: 5, mt: 5 }}>
            ??????! ???????????? ?????? ????????????
          </Divider>
          <InputWrapper>
            <TextField
              fullWidth
              label="?????????"
              variant="standard"
              color="secondary"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="????????????"
              variant="standard"
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
            />
            <TextField
              fullWidth
              label="??????????????????"
              variant="standard"
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
            />
            <Button
              size="large"
              variant="contained"
              fullWidth
              disableElevation
              color="secondary"
              sx={{ height: 50, fontSize: 20, fontWeight: 600, mt: 2 }}
            >
              ????????????
            </Button>
          </InputWrapper>
          <LoginWrapper>
            <LoginTypo>????????? ?????? ????????? ???????????? </LoginTypo>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <LoginText style={{ marginLeft: 10, marginRight: 10 }}>
                ?????????
              </LoginText>
            </Link>
            <LoginTypo>?????????. </LoginTypo>
          </LoginWrapper>
        </CanvasCustom>
      </Wrapper>
    </Container>
  );
};

export default Register;

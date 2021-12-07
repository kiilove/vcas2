import { faIdCard, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  border-radius: 5px;
  border: 0.5px solid ${grey[300]};
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const ClientCard = () => {
  return (
    <Container>
      <Typography variant="body1">46433464</Typography>
      <Info>
        <Tooltip title="회원정보 바로가기">
          <Icon>
            <FontAwesomeIcon icon={faIdCard} />
          </Icon>
        </Tooltip>
        <Tooltip title="복사하기">
          <Icon>
            <FontAwesomeIcon icon={faPaste} />
          </Icon>
        </Tooltip>
      </Info>
    </Container>
  );
};

export default ClientCard;

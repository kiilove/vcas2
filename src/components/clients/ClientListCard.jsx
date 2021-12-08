import {
  faFileExcel,
  faKeyboard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import CreateClient from "../modals/CreateClient";
import CreateClientExcel from "../modals/CreateClientExcel";
import {
  Canvas,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";
import ClientCard from "./ClientCard";

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
  padding: 20px;
  justify-content: space-between;
`;

const ListActionWrapper = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const ListActionBox = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchIcon = <FontAwesomeIcon icon={faSearch} />;
const ExcelIcon = <FontAwesomeIcon icon={faFileExcel} />;
const KeyboardIcon = <FontAwesomeIcon icon={faKeyboard} />;
const ClientListCard = () => {
  const [openExcel, setOpenExcel] = useState(false);
  const [openSingle, setOpenSingle] = useState(false);

  const handleOpenExcel = () => setOpenExcel(true);
  const handleCloseExcel = () => setOpenExcel(false);
  const handleOpenSingle = () => setOpenSingle(true);
  const handleCloseSingle = () => setOpenSingle(false);

  return (
    <Container>
      <Canvas>
        <ComponentHeaderWrapper>
          <ComponentHeaderTitle color={indigo[500]}>
            고객리스트
          </ComponentHeaderTitle>
          <ListActionWrapper style={{ justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              startIcon={KeyboardIcon}
              onClick={handleOpenSingle}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              건별등록
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="success"
              startIcon={ExcelIcon}
              onClick={handleOpenExcel}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              엑셀등록
            </Button>
            <Modal open={openExcel} onClose={handleCloseExcel}>
              <CreateClientExcel handleClose={handleCloseExcel} />
            </Modal>
            <Modal open={openSingle} onClose={handleCloseSingle}>
              <CreateClient handleClose={handleCloseSingle} />
            </Modal>
          </ListActionWrapper>
        </ComponentHeaderWrapper>
        <ListActionWrapper>
          <ListActionBox>
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="전체보기"
                checked
              />
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="신규고객"
              />
              <FormControlLabel
                value="ing"
                control={<Radio />}
                label="진행중"
              />
              <FormControlLabel
                value="stop"
                control={<Radio />}
                label="중지됨"
              />
            </RadioGroup>
          </ListActionBox>
          <ListActionBox style={{ justifyContent: "flex-end" }}>
            <TextField
              size="small"
              label="결과내 검색"
              sx={{ width: "300px" }}
            />
            <Button
              variant="outlined"
              startIcon={SearchIcon}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              검색
            </Button>
          </ListActionBox>
        </ListActionWrapper>
        <ComponentBodyWrapper>
          <ListWrapper>
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </ListWrapper>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
};

export default ClientListCard;

import {
  faFileExcel,
  faKeyboard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import ImportExcel from "../modals/ImportExcel";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              건별등록
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="success"
              startIcon={ExcelIcon}
              onClick={handleOpen}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              엑셀등록
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ImportExcel handleClose={handleClose} />
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

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { Button, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as frWindowClose } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 24px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid grey;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid grey;
`;

const HeaderTitle = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const InfoTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
`;

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImportExcel = (props) => {
  const [items, setItems] = useState([]);
  const [rows, setRows] = useState(0);

  const sendClose = () => {
    props.handleClose();
  };

  const readExcel = async (file) => {
    try {
      const fileReader = await new FileReader();
      await fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e) => {
        const buggerArray = await e.target.result;

        const wb = await XLSX.read(buggerArray, { type: "buffer" });
        const wsname = await wb.SheetNames[0];
        const ws = await wb.Sheets[wsname];
        const data = await XLSX.utils.sheet_to_json(ws);
        console.log(JSON.stringify(data));
        await setItems(JSON.stringify(data));
        await setRows(data.length);
      };
    } catch (error) {
      console.error({ 읽기에러: error });
    }
  };

  const postData = async () => {
    const header = { "Content-type": "application/json" };
    try {
      await axios({
        method: "post",
        url: "http://localhost:7733/api/client/register/excel",
        headers: header,
        data: JSON.stringify(setItems),
      });
    } catch (error) {
      alert("저장 실패!(서버 연결을 확인하세요.)");
    }
  };

  const excelInfo = { rows };
  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <HeaderTitle>전송할 엑셀파일을 선택하세요.</HeaderTitle>
          <HeaderAction>
            <IconButton sx={{ fontSize: "18px" }} onClick={() => sendClose()}>
              <FontAwesomeIcon icon={frWindowClose} />
            </IconButton>
          </HeaderAction>
        </HeaderWrapper>
        <BodyWrapper>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
          <ButtonGroup>
            <Button variant="outlined" size="small" onClick={postData}>
              전송
            </Button>
          </ButtonGroup>
        </BodyWrapper>
        <FooterWrapper>
          <InfoTitle>
            {excelInfo.rows - 1}건의 데이터를 확인했습니다.{<br />} 전송버튼을
            클릭하면 데이터에 저장됩니다.
          </InfoTitle>
        </FooterWrapper>
      </Wrapper>
    </Container>
  );
};

export default ImportExcel;

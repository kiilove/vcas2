import React from "react";
import styled from "styled-components";

import { Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const ExtraWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  padding-bottom: 20px;
`;
const ExtraSelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExtraInfo = () => {
  return (
    <ExtraWrapper>
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={2}
        height="100px"
        sx={{ mt: 2, mb: 2 }}
      >
        <ExtraSelectBox>
          <FormControl>
            <InputLabel variant="standard">성별</InputLabel>
            <NativeSelect
              defaultValue={"man"}
              inputProps={{
                name: "sex",
                id: "sex-native",
              }}
              sx={{ fontSize: 17 }}
            >
              <option value={"man"}>남성</option>
              <option value={"woman"}>여성</option>
            </NativeSelect>
          </FormControl>
        </ExtraSelectBox>
        <ExtraSelectBox>
          <FormControl>
            <InputLabel variant="standard">연령대</InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "age-native",
              }}
              sx={{ fontSize: 17 }}
            >
              <option value={20}>20대</option>
              <option value={30}>30대</option>
              <option value={40}>40대</option>
              <option value={50}>50대</option>
              <option value={60}>60대</option>
              <option value={70}>70대이상</option>
            </NativeSelect>
          </FormControl>
        </ExtraSelectBox>
        <ExtraSelectBox>
          <FormControl>
            <InputLabel variant="standard">투자경험</InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: "know",
                id: "know-native",
              }}
              sx={{ fontSize: 17 }}
            >
              <option value={0}>파악안됨</option>
              <option value={1}>경험없음</option>
              <option value={2}>경험있음</option>
              <option value={3}>전문가수준</option>
              <option value={4}>업자</option>
            </NativeSelect>
          </FormControl>
        </ExtraSelectBox>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField size="small" label="이름" sx={{ width: "70%" }} />
        <Button variant="outlined" sx={{ ml: 1, height: "40px" }}>
          저장
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField size="small" label="추가연락처" sx={{ width: "70%" }} />
        <Button variant="outlined" sx={{ ml: 1, height: "40px" }}>
          저장
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField size="small" label="기타정보" sx={{ width: "70%" }} />
        <Button variant="outlined" sx={{ ml: 1, height: "40px" }}>
          저장
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField size="small" label="기타정보" sx={{ width: "70%" }} />
        <Button variant="outlined" sx={{ ml: 1, height: "40px" }}>
          저장
        </Button>
      </Stack>
    </ExtraWrapper>
  );
};

export default ExtraInfo;

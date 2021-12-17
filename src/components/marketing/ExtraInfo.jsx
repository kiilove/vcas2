import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FormHelperText, Input, Stack, TextField } from "@mui/material";
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
const ExtraInfo = (props) => {
  const [name, setName] = useState(props.extraInfo.name);
  const [telNum2, setTelNum2] = useState(props.extraInfo.telNum2);
  const [info1, setInfo1] = useState(props.extraInfo.info1);
  const [info2, setInfo2] = useState(props.extraInfo.info2);

  return (
    <ExtraWrapper>
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={2}
        height="100px"
        sx={{ mt: 2, mb: 2 }}
        component="form"
      >
        <ExtraSelectBox>
          <FormControl>
            <InputLabel variant="standard">성별</InputLabel>
            <NativeSelect
              value={props.extraInfo.gender}
              inputProps={{
                name: "gender",
                id: "gender-native",
              }}
              sx={{ fontSize: 17 }}
              onChange={(e) => {
                e.preventDefault();
                props.setExtraInfo({
                  ...props.extraInfo,
                  gender: e.target.value,
                });
              }}
            >
              <option value={"M"}>남성</option>
              <option value={"F"}>여성</option>
            </NativeSelect>
          </FormControl>
        </ExtraSelectBox>
        <ExtraSelectBox>
          <FormControl>
            <InputLabel variant="standard">연령대</InputLabel>
            <NativeSelect
              value={props.extraInfo.age}
              inputProps={{
                name: "age",
                id: "age-native",
              }}
              sx={{ fontSize: 17 }}
              onChange={(e) => {
                e.preventDefault();
                props.setExtraInfo({
                  ...props.extraInfo,
                  age: e.target.value,
                });
              }}
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
              value={props.extraInfo.level}
              inputProps={{
                name: "know",
                id: "know-native",
              }}
              sx={{ fontSize: 17 }}
              onChange={(e) => {
                e.preventDefault();
                props.setExtraInfo({
                  ...props.extraInfo,
                  level: e.target.value,
                });
              }}
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
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField
          id="name"
          size="small"
          sx={{ width: "85%" }}
          InputLabelProps={{ shrink: true }}
          value={props.extraInfo.name}
          label="이름"
          onChange={(e) => {
            e.preventDefault();
            props.setExtraInfo({
              ...props.extraInfo,
              name: e.target.value,
            });
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
        component="form"
      >
        <TextField
          size="small"
          label="추가연락처"
          sx={{ width: "85%" }}
          InputLabelProps={{ shrink: true }}
          value={props.extraInfo.telNum2}
          defaultValue={props.extraInfo.telNum2}
          onChange={(e) => {
            e.preventDefault();
            props.setExtraInfo({
              ...props.extraInfo,
              telNum2: e.target.value,
            });
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
        component="form"
      >
        <TextField
          size="small"
          label="기타정보"
          sx={{ width: "85%" }}
          InputLabelProps={{ shrink: true }}
          value={props.extraInfo.info1}
          onChange={(e) => {
            e.preventDefault();
            props.setExtraInfo({
              ...props.extraInfo,
              info1: e.target.value,
            });
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mb: 3 }}
        component="form"
      >
        <TextField
          size="small"
          label="기타정보"
          sx={{ width: "85%" }}
          InputLabelProps={{ shrink: true }}
          value={props.extraInfo.info2}
          onChange={(e) => {
            e.preventDefault();
            props.setExtraInfo({
              ...props.extraInfo,
              info2: e.target.value,
            });
          }}
        />
      </Stack>
    </ExtraWrapper>
  );
};

export default ExtraInfo;

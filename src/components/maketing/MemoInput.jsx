import React from "react";
import styled from "styled-components";
import { Button, Rating, Stack, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

const MemoWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
`;

const MemoRatingBox = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const MemoRatingTitle = styled.span`
  font-size: 15px;
  color: ${grey[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MemoRating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 3;
`;

const MemoTextBox = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const MemoInput = () => {
  return (
    <MemoWrapper>
      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ mt: 2 }}
      >
        <MemoRatingBox>
          <MemoRatingTitle>중요도</MemoRatingTitle>
          <MemoRating>
            <Rating />
          </MemoRating>
        </MemoRatingBox>
        <MemoTextBox>
          <TextField
            size="small"
            label="메모"
            multiline
            minRows={4}
            maxRows={4}
            sx={{ width: "70%", mb: 1.5 }}
          />
          <Button
            variant="outlined"
            sx={{ width: "50px", height: "110px", mb: 1.5, ml: 1 }}
          >
            작성
          </Button>
        </MemoTextBox>
      </Stack>
    </MemoWrapper>
  );
};

export default MemoInput;

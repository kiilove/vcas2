import React from "react";
import styled from "styled-components";

import { blue, pink, yellow } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookmark as fsBookmark,
  faThumbsUp as fsThumbsUp,
  faThumbsDown as fsThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faThumbsUp as frThumbsUp,
  faBookmark as frBookmark,
  faThumbsDown as frThumbsDown,
} from "@fortawesome/free-regular-svg-icons";

const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoNumber = styled.span`
  height: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 600;
`;

const InfoAction = styled.div`
  height: 100%;
  width: 50%;

  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CheckIcon = styled.span`
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoCheckBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ClientIcon = (icon) => (
  <CheckIcon>
    <FontAwesomeIcon icon={icon} />
  </CheckIcon>
);

const BasicInfo = () => {
  return (
    <InfoWrapper>
      <InfoNumber>010-4643-3464</InfoNumber>
      <InfoAction>
        <InfoCheckBox>
          <Checkbox
            icon={ClientIcon(frThumbsUp)}
            checkedIcon={ClientIcon(fsThumbsUp)}
            sx={{
              color: blue[800],
              "&.Mui-checked": {
                color: blue[800],
              },
            }}
          />
        </InfoCheckBox>
        <InfoCheckBox>
          <Checkbox
            icon={ClientIcon(frThumbsDown)}
            checkedIcon={ClientIcon(fsThumbsDown)}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[800],
              },
            }}
          />
        </InfoCheckBox>
        <InfoCheckBox>
          <Checkbox
            icon={ClientIcon(frBookmark)}
            checkedIcon={ClientIcon(fsBookmark)}
            sx={{
              color: yellow[800],
              "&.Mui-checked": {
                color: yellow[800],
              },
            }}
          />
        </InfoCheckBox>
      </InfoAction>
    </InfoWrapper>
  );
};

export default BasicInfo;

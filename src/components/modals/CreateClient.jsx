import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { green, grey, yellow } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import {
  Canvas,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 460px;
  max-height: 100%;
`;

const CreateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  min-height: 60px;
`;

const CreateInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
`;

const ActionWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

const ActionGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const TrashIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const WarningWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`;

const WarningMessage = styled.span`
  display: flex;
  background-color: ${yellow[300]};
  border-radius: 5px;
  color: ${grey[700]};
  font-size: 12px;
  font-weight: 600;
  padding-left: 20px;
  align-items: center;
  height: 100%;
`;

const CreateClient = () => {
  const [count, setCount] = useState(1);
  const [clientList, setClientList] = useState([{ clientNumer: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...clientList];
    list[index][name] = value;
    setClientList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...clientList];
    list.splice(index, 1);
    setClientList(list);
    count > 0 && setCount(count - 1);
  };

  // handle click event of the Add button
  const handleAddClientList = () => {
    setClientList([...clientList, { clientNumer: "" }]);
    setCount(count + 1);
  };

  return (
    <Container>
      <Canvas>
        <ComponentHeaderWrapper style={{ paddingBottom: "0px" }}>
          <ComponentHeaderTitle color={green[500]}>
            고객 등록
          </ComponentHeaderTitle>
        </ComponentHeaderWrapper>
        {count > 5 && (
          <WarningWrapper>
            <WarningMessage>
              <FontAwesomeIcon icon={faExclamationCircle} />
              <div style={{ marginLeft: 12 }}>
                많은 고객 데이터 등록은 엑셀등록을 활용하세요.
              </div>
            </WarningMessage>
          </WarningWrapper>
        )}
        <ComponentBodyWrapper style={{ flexDirection: "column" }}>
          <ActionWrapper>
            <ActionGroup style={{ justifyContent: "flex-start" }}>
              <Button
                size="small"
                variant="outlined"
                sx={{ mr: 1 }}
                onClick={() => {
                  handleAddClientList();
                }}
              >
                추가
              </Button>
            </ActionGroup>
            <ActionGroup style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                variant="contained"
                sx={{ mr: 1 }}
                disableElevation
                color="success"
              >
                저장
              </Button>
            </ActionGroup>
          </ActionWrapper>
          <CreateWrapper>
            <CreateInput>
              {clientList &&
                clientList.map((item, index) => (
                  <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
                    <InputLabel htmlFor="Phone Number Input">
                      전화번호
                    </InputLabel>
                    <Input
                      size="small"
                      variant="standard"
                      label="전화번호"
                      fullWidth
                      name="clientNumber"
                      value={item.clientNumber}
                      sx={{ marginBottom: 2 }}
                      onChange={(e) => {
                        e.preventDefault();
                        handleInputChange(e, index);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            sx={{ fontSize: 15 }}
                            onClick={() => handleRemoveClick(index)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                ))}
              <TrashIcon></TrashIcon>
            </CreateInput>
          </CreateWrapper>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
};

export default CreateClient;
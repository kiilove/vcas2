import axios from "axios";

export const postData = async (items, url) => {
  const header = { "Content-type": "application/json" };
  try {
    await axios({
      method: "post",
      url,
      headers: header,
      data: items,
    });
    alert("데이터 저장이 완료되었습니다.");
  } catch (error) {
    alert("저장 실패!(서버 연결을 확인하세요.)");
  }
};

export const putData = async (items, url) => {
  const header = { "Content-type": "application/json" };
  try {
    await axios({
      method: "put",
      url,
      headers: header,
      data: items,
    });
    alert("데이터 저장이 완료되었습니다.");
  } catch (error) {
    alert("저장 실패!(서버 연결을 확인하세요.)");
  }
};
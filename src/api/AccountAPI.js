import client from "./client.js"


export const createAccount = async (userId) => {
  try {
    const response = await client.post("/account/register", userId);
    return response.data;
  } catch(error) {
    console.log("계좌 생성 실패", error);
    throw error;
  }
}


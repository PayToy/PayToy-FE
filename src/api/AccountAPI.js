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

export const depositAccount = async (balanceInfo) => {
  try{
    const response = await client.patch("/account/deposit", balanceInfo);
    return response.data;
  } catch(error) {
    console.log("입금 실패", error);
    throw error;
  }
}


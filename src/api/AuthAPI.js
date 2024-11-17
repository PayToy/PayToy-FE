import client from "./client.js"


export const userLogin = async (userInformaiton) => {
  try{
    const response = await client.post("/login", userInformaiton);
    return response;
  } catch(error) {
    console.log("로그인 실패", error);
    throw error;
  }
}

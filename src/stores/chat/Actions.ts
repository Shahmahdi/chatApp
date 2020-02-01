import { default as Chatkit } from '@pusher/chatkit-server';
import { SET_CHAT_USER } from './Types';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:2e9345f4-3477-47d0-b0ae-75a65d37d6f0",
  key: "b04a70a0-165e-43af-80c4-d9d77bf6fffe:wF365yWXE5c57BYC1OlX69F/pgmpCnp95t/besMuDhs="
});

export const createChatkitUser = (userSignupValues: any) => async (dispatch: any) => {
  try {
    const currentUser = await chatkit.createUser({
      id: userSignupValues.username,
      name: userSignupValues.username
    });
    dispatch({ type: SET_CHAT_USER, payload: currentUser });
  } catch (error) {
    console.log(`Chatkit create user error: `, error);
  }
}
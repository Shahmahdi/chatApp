import { SET_CHAT_USER } from "./Types";

const InitialState = {
  currentId: '',
  currentUsername: ''
}

export const ChatReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case SET_CHAT_USER:
      return {
				...state,
        ...action.payload
			};
    default:
      return state;
  }
}
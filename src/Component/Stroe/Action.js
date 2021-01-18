import ActionTypes from "./ActionType";
export const getList = () => {
  const action = { type: ActionTypes.getList };
  return action;
};
export const getMessages = () => {
  const action = { type: ActionTypes.getMessages };
  return action;
};
export const selectListInLeft = (id) => {
  const action = { type: ActionTypes.selectListInLeft, payload: id };
  return action;
};
export const sendMsg =(eventOnChange)=>{
  const action={type:ActionTypes.sendMsg,payload:eventOnChange}
  return action
}
export const findTextinChat=(eventSearch)=>{
  const action ={type:ActionTypes.findTextinChat,payload:eventSearch}
  return action
}

import React, { useContext, useEffect } from "react";
import styles from "./ChatListItem.module.css";
import { DispatchContext, StateContext } from "../../../../App";
import { selectListInLeft } from "../../../Stroe/Action";

export default function ChatListItem(props) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const { recordFromList } = props;
  const textBreak = (text, len) => {
    if (text.length < len) {
      return text;
    }

    const splitText = text.split("");
    const breakeArr = splitText.splice(0, len);
    const t = breakeArr.join("");
    return t + " ...";
  };
  // const SelectedItem = () => {
  //   let classes =           state.selectedChatId === recordFromList.chatListId
  //   ? "selectId container"
  //   : "container"
  //   return classes
  // };
  // useEffect(() => {

  //   console.log("stateUseEffect",state.selectedChatId);
  //  }, [state.selectedChatId])
  const handleClick = () => {
    dispatch(selectListInLeft(recordFromList.chatListId));
  };
  return (
    <>
      <div
        className={
          // state.selectedChatId === recordFromList.chatListId
          //   ? styles.selectId
          //   : styles.unselectId
          styles.container
        }
        onClick={handleClick}
      >
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>{recordFromList.Avatar}</div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyLeft}>
            <div className={styles.space}>{recordFromList.name}</div>
            <div className={styles.lastMsg}>
              {textBreak(recordFromList.lastMessage, 20)}{" "}
            </div>
          </div>
          <div className={styles.bodyRight}>
            <div className={styles.spaceBet}>{recordFromList.time}</div>
            <div className={styles.spaceBt}>
              {recordFromList.unreadMessageCount}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>
    </>
  );
}

import React from "react";
import styles from './ChatListItem.module.css'

export default function ChatListItem(props) {
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
  return (
      <>
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
          <div className={styles.avatar}>{recordFromList.Avatar}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyLeft}>
          <div className={styles.space}>{recordFromList.name}</div>
          <div className={styles.lastMsg}>{textBreak(recordFromList.lastMessage,20)} </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.spaceBet}>{recordFromList.time}</div>
          <div className={styles.spaceBt}>{recordFromList.unreadMessageCount}</div>
        </div>
      </div>
    </div>
   <div className={styles.dividerContainer}>
       <div className={styles.divider}></div>
   </div>
    </>
  );
}

import React, { useContext } from "react";
import { StateContext } from "../../App";
import ChatContent from "./ChatContent/ChatContent";
import PannelChatCss from "./PannelChat.module.css";
import InputBar from "./InputBar/InputBar";

export default function PannelChat() {
  const PrivateMsgList = useContext(StateContext);
  const msgHistoryId = PrivateMsgList.selectedMessegeHistoryId;
  const msgHistory = PrivateMsgList.messegeHistory.filter(
    (record) => record.messegeHistoryId === msgHistoryId
  );
  console.log(msgHistory, msgHistory.senderId);
  return (
    <div className={PannelChatCss.vcontainer}>
      <div className={PannelChatCss.PannelChat1}>
        {msgHistory[0].messeges.map((record) => (
          <ChatContent
            recordPrivateMsg={record}
            other={record.messegeSenderId === msgHistory[0].senderId}
          />
        ))}
      </div>
      <div className={PannelChatCss.inputPanle}>
        <InputBar />
      </div>
    </div>
  );
}

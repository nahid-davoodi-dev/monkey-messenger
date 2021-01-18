import React, { useContext, useEffect } from "react";
import { StateContext } from "../../App";
import ChatContent from "./ChatContent/ChatContent";
import PannelChatCss from "./PannelChat.module.css";
import InputBar from "./InputBar/InputBar";
import StatusBar from './StatusBar/StatusBar'
// import InputBarCss from '.InputBar/InputBar.module.css'

export default function PannelChat() {
  const PrivateMsgList = useContext(StateContext);
  const msgHistoryId = PrivateMsgList.selectedMessegeHistoryId;
  const chatListId = PrivateMsgList.selectedChatId;
  console.log(chatListId,"chatListId");

  const msgHistory = PrivateMsgList.messegeHistory.filter(
    (record) => record.messegeHistoryId === msgHistoryId
    
  );
  const x =PrivateMsgList.chatList.findIndex(record=>record.chatListId ===chatListId)
  // console.log(x,"x");
  // console.log(  PrivateMsgList.chatList,'PrivateMsgList');

  return (
    <div className={PannelChatCss.vcontainer}>
       <div className={PannelChatCss.StatusBar}>
        <StatusBar nameOfHeaderChat={PrivateMsgList.chatList[x].name}/>
      </div>
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

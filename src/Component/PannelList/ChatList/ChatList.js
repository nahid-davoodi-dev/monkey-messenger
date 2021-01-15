
import React, { useContext } from "react";
import { StateContext } from "../../../App";
import ChatListItem from "./ChatListItem/ChatListItem";
import ChatListCss from './ChatList.module.css'

export default function ChatList() {
    const myArrListInPannelList = useContext(StateContext);
    // console.table(myArrListInPannelList.chatList);

    return (
      <ul className={ChatListCss.pannelList1}>
        {myArrListInPannelList.chatList.map((record) => {
          //   console.log(record);
          return (
        <ChatListItem recordFromList={record}/>
          );
        })}
      </ul>
    );
}

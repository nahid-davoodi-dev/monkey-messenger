import React, { useContext, useState } from "react";
import { StateContext } from "../../../App";
import stylesPri from "./ChatContent.module.css";

export default function ChatContent(props) {
  const { recordPrivateMsg, other } = props;
  const state = useContext(StateContext);
  // console.log("aaaaa", recordPrivateMsg, other);
  const CheckSenderId = () => {};
  return (
    <>
      <div className={other ? stylesPri.other : stylesPri.me}>
        {recordPrivateMsg.content}
      </div>
    </>
  );
}

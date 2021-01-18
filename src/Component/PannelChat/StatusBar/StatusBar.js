import React, { useContext, useState } from "react";
import * as Action from "../../Stroe/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchContext, StateContext } from "../../../App";
import StatusBarCss from "./StatusBar.module.css";
import {
  faSearch,
  faPaperclip,
  faWindowRestore,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function StatusBar(props) {
  const [xdisplay, setxdisplay] = useState(false);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const handleSearchInChat = () => {
    setxdisplay(!xdisplay);
    console.log("xdisplay", xdisplay);
    // dispatch(Action.findTextinChat(props.val))
  };
  const handlekeyInSearch = (event) => {
    if (event.key === "Enter") {
      dispatch(Action.findTextinChat(event.target.value));
    }
  };
  return (
    <div className={StatusBarCss.StatusBarContainer}>
      <div className={StatusBarCss.LeftStatus}>
        {props.nameOfHeaderChat}
        <br />
        strategic
        <input
          className={xdisplay ? StatusBarCss.show : StatusBarCss.hide}
          onKeyPress={handlekeyInSearch}
        />
      </div>

      <div className={StatusBarCss.RightStatus}>
    
        <FontAwesomeIcon icon={faSearch} onClick={handleSearchInChat} />
        <FontAwesomeIcon icon={faWindowRestore} />
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </div>
    </div>
  );
}

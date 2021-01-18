import React ,{useContext, useState} from "react";
import InputBarCss from "./InputBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile,faMicrophone,faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { DispatchContext } from "../../../App";
import * as Action from '../../Stroe/Action'
import StatusBar from '../StatusBar/StatusBar'
const InputBar = () => {
  const dispatch =useContext(DispatchContext)
  const [inputValue,setinputValue]=useState("")
 
  
   const handlekey =(event)=>{
    if (event.key==='Enter'){
      // console.log('jtgjejj');
      console.log(event.target.value);

  dispatch(Action.sendMsg(event.target.value))

  setinputValue("")


    }

   }
   const handleChange=(event)=>{
     setinputValue(event.target.value)

   }
  return (
    < div className={InputBarCss.InputContainer}>
      <FontAwesomeIcon className={InputBarCss.leftInput} icon={faPaperclip} />

      <input className={InputBarCss.inputbar} onKeyPress={handlekey}  value={inputValue} onChange={handleChange}/>
      <FontAwesomeIcon  className={InputBarCss.rightInputSmile} icon={faSmile} />
      <FontAwesomeIcon  className={InputBarCss.rightInputMicro} icon={faMicrophone} />
 
    </div>
  );
};
export default InputBar;

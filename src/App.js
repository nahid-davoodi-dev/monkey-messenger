import "./App.css";
import PannelChat from "./Component/PannelChat/PannelChat";
import PannelInfo from "./Component/PannelInfo/PannelInfo";
import PannelList from "./Component/PannelList/PannelList";
import reducer, { INIT_STATE } from "./Component/Stroe/Reducer";
import { useReducer, useState, createContext } from "react";
export const StateContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // const [GetListArr,setGetListArr]=useState({GetListArr:[]})

  return (
    <StateContext.Provider value={state}>
      <PannelList />

      <PannelChat />
      <PannelInfo />
    </StateContext.Provider>
  );
};

export default App;

import "./App.css";
import PannelChat from "./Component/PannelChat/PannelChat";
import PannelInfo from "./Component/PannelInfo/PannelInfo";
import PannelList from "./Component/PannelList/PannelList";
import reducer, { INIT_STATE } from "./Component/Stroe/Reducer";
import React, { useReducer, createContext ,useEffect} from "react";

export const StateContext = createContext();
export const DispatchContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // const [GetListArr,setGetListArr]=useState({GetListArr:[]})

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <PannelList />

        <PannelChat />
        <PannelInfo />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;

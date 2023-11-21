import { arrayTabs } from "../../constants"
import { IUiState } from "../../types";
import { ACTIVE_TAB } from "../action-types";

const initialState = {
  activeTab: arrayTabs[0].id
}

const cacheState = () => {
  const uiInfo = localStorage.getItem('ui');
  return uiInfo ? JSON.parse(uiInfo) : initialState;
}

export default (state: IUiState = cacheState(), action: any) => {
  switch (action.type) {
    case ACTIVE_TAB: {
      return ({
        ...state,
        activeTab: action.tabs
      })
    }
    default: {
      return state
    }
  }
}
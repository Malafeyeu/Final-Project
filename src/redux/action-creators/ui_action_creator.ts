import { ACTIVE_TAB } from "../action-types";


const activeTab = ( tabs: any ) => ({
  type: ACTIVE_TAB,
  tabs,
})

export { activeTab }
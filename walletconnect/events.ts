import { snap } from "@/store";
import { addToConsole } from "@/utils";
import { clearSession } from "./utils";

/**handlers */
export const handle = {
  disconnect(detail: unknown){
    addToConsole({event: "connect",detail}), clearSession()
  },
  connect(detail: unknown){
    addToConsole({event: "connect",detail})
  },
  chainChanged(detail: unknown){
    addToConsole({event: "chainChanged",detail})
  },
  accountsChanged(detail: unknown){
    addToConsole({event: "accountsChanged",detail})
  },
  sessionEvent(detail: unknown){
    addToConsole({event: "sessionEvent",detail})
  },
  displayUri(detail: unknown){
    addToConsole({event: "displayUri",detail})
  },
}

/**Listeners */
export function listeners(){
  const provider = snap.provider()
  if(!provider) return
  
  provider.on('chainChanged', handle.chainChanged)
  provider.on('accountsChanged', handle.accountsChanged)
  provider.on('connect', handle.connect)
  provider.on('session_event', handle.sessionEvent)
  provider.on('display_uri', handle.displayUri)
  provider.on('disconnect', handle.disconnect)
}
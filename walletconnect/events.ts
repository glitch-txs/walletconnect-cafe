import { snap } from "@/store";
import { clearSession } from ".";

/**handlers */
export const handle = {
  disconnect(e: unknown){
    console.log("connect",e), clearSession()
  },
  connect(e: unknown){
    console.log("connect",e)
  },
  chainChanged(e: unknown){
    console.log("chainChanged",e)
  },
  accountsChanged(e: unknown){
    console.log("accountsChanged",e)
  },
  sessionEvent(e: unknown){
    console.log("sessionEvent",e)
  },
  displayUri(e: unknown){
    console.log("displayUri",e)
  },
}

/**Listeners */
export function listeners(){
  const provider = snap.provider()

  if(!provider) throw new Error("Listeners could not initialize, provider is undefined")

  provider.on('chainChanged', handle.chainChanged)
  provider.on('accountsChanged', handle.accountsChanged)
  provider.on('connect', handle.connect)
  provider.on('session_event', handle.sessionEvent)
  provider.on('display_uri', handle.displayUri)
  provider.on('disconnect', handle.disconnect)
}
import { set, snap } from "@/store";

/* Console Functions */
export function addToConsole(log: unknown){
  set.console(p => [...p, JSON.stringify(log, undefined, 2)])
}

export function clearConsole(){
  set.console([])
}

export function logMessage(e: { message: string }){
  addToConsole(e.message)
}

/* Secure provider */
export function getProvider(){
  const provider = snap.provider()
  if(!provider) throw new Error("Provider has not initialized")
  return provider
}
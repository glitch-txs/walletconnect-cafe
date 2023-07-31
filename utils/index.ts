import { set } from "@/store";

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

/* local Storage */

export function clearStorage(){
  localStorage.clear()
  window.location.reload()
}
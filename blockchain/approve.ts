import { getProvider } from "@/walletconnect";
import { ethers, Contract } from 'ethers'
import { erc20ABI } from "./abi/erc20";

export async function approve(){
  const _provider = getProvider()
  const provider = new ethers.BrowserProvider(_provider)
  const signer = await provider.getSigner();

  const contract = new Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", erc20ABI, signer)
  const a = await contract.approve("0xeE241fCbD96847c9886E92ff31D8Ba8c59a912B7", 1)
  console.log(a)
}
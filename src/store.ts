import { create } from "zustand";

export enum StrenghtE{
  WEAK=1,
  MEDUIM,
  GOOD,
  STRONG
}
export interface Password{
  texte:string,
  lenght:number,
  includeNumbers:boolean,
  includeSymbols:boolean,
  includeLowerCases:boolean,
  includeUpperCases:boolean,
  strenght:string | null,
  setText:(generatedPassword:string)=>void,
  setlenght:(lenght:number)=>void,
  setNumbers:()=>void,
  setLowerCases:()=>void,
  setUpperCases:()=>void,
  setSymbols:()=>void,
  setStrenght:()=>void
}

function calculateStrenght(includeLowerCases:boolean , includeSymbols:boolean , includeUpperCases:boolean , includeNumbers:boolean  ):string{
const strenght:number=Number(includeLowerCases) + Number(includeSymbols) + Number(includeUpperCases) + Number(includeNumbers);

return StrenghtE[strenght];
}


export const usePassword=create<Password>((set)=>({
  texte:"########",
  lenght:6,
  includeLowerCases:true,
  includeSymbols:false,
  includeUpperCases:false,
  strenght :null,
  includeNumbers:false,
  setText:(generatedPassword)=>{set({texte:generatedPassword})},
  setlenght:(lenght)=>{set({lenght:lenght})},
  setNumbers:()=>{set(state=>({includeNumbers:!state.includeNumbers}))},
  setLowerCases:()=>{set(state=>({includeLowerCases:!(state.includeLowerCases)}))},
  setUpperCases:()=>{set(state=>({includeUpperCases:!state.includeUpperCases}))},
  setSymbols:()=>{set(state=>({includeSymbols:!state.includeSymbols}))},
  setStrenght:()=>{set(state=>({strenght:calculateStrenght(state.includeLowerCases,state.includeNumbers,state.includeSymbols,state.includeUpperCases)}))}
}))
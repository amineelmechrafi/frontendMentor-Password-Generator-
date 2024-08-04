import { useEffect, useState } from "react";
import Strenght from "./components/Strenght";
import { usePassword } from "./store";
import generatePassword from "./generate";

function App() {
  const [sliderColor, setColor] = useState<string>("hsl(248,15%,11%)");
  const texte = usePassword((state) => state.texte);
  const setText = usePassword((state) => state.setText);
  
  const lenght = usePassword((state) => state.lenght);
  const setLenght = usePassword((state) => state.setlenght);
  
  const includeNumbers = usePassword((state) => state.includeNumbers);
  const setNumbers = usePassword((state) => state.setNumbers);
  
  const includeSymbols = usePassword((state) => state.includeSymbols);
  const setSymbols = usePassword((state) => state.setSymbols);
  
  const includeLowerCases = usePassword((state) => state.includeLowerCases);
  const setLowerCases = usePassword((state) => state.setLowerCases);
  
  const includeUpperCases = usePassword((state) => state.includeUpperCases);
  const setUpperCases = usePassword((state) => state.setUpperCases);
  
  const setStrenght = usePassword((state) => state.setStrenght);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue:number=Number(e.target.value)
    setLenght(sliderValue)
    if(sliderValue==10)
      setColor("hsl(127, 100%, 82%)")
    else{
    setColor(
      "linear-gradient(to right, hsl(127, 100%, 82%) " + 
      ((sliderValue-1)*10.5) + "%, hsl(248, 15%, 11%) " + 
      ( sliderValue) + "%)"
    );
  }
    
  };
  useEffect(()=>{
    setStrenght()
  },[includeLowerCases,includeNumbers,includeSymbols,includeUpperCases])

  return (
    <>
      <section className="grid place-content-center min-h-screen bg-[hsl(248,15%,11%)] font-JetBrains">
        <h2 className="text-center text-[hsl(251,9%,53%)] mb-3">Password Generator</h2>
        <article className="min-h-[400px] w-[90vw] bg-[hsl(248,10%,15%)] text-[hsl(252,11%,91%)] p-4 flex flex-col justify-between gap-5 md:w-[40vw] lg:w-[27vw]">
          <div className="pwd flex justify-between relative mb-4">
            <h2 className="font-semibold text-lg">{texte}</h2>
            <button onClick={()=>{navigator.clipboard.writeText(texte)}}>
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF" />
            </svg></button>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-base">Character Length</h2>
            <h1 className="font-bold text-2xl text-green-300">{lenght}</h1>
          </div>
          <div>
            <input 
            value={lenght}
              onChange={handleSlider} 
              style={{ background: sliderColor }} 
              type="range" 
              min="1" 
              max="10" 
              className="slider w-[100%] appearance-none h-[9px] " 
            />
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li><input onChange={setUpperCases} className="check" id="upperCase" type="checkbox" /><label htmlFor="upperCase">Include UpperCase Letters</label></li>
              <li><input checked={includeLowerCases} onChange={setLowerCases} className="check" id="LowerCase" type="checkbox" /><label htmlFor="">Include Lowercase letters</label></li>
              <li><input onChange={setNumbers} className="check" id="Numbers" type="checkbox" /><label htmlFor="Numbers">Include Numbers</label></li>
              <li><input  onChange={setSymbols} className="check" id="Symbols" type="checkbox" /><label htmlFor="Symbols">Include Symbols</label></li>
            </ul>
          </div>
          <div className="h-14 bg-[hsl(248,15%,11%)] p-4 flex justify-between items-center">
            <h2 className="text-[hsl(251,9%,53%)]">strenght</h2>
            <Strenght />
          </div>

          <button onClick={()=>{setText(generatePassword(lenght,includeLowerCases,includeSymbols,includeUpperCases,includeNumbers))}} className="bg-green-300 flex justify-center items-center h-12 gap-2 text-[hsl(248,15%,11%)] transition-all ease-in-out hover:bg-transparent duration-500 hover:border  hover:border-green-300 hover:text-green-300"><span>Generate</span> <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></button>
        </article>
      </section>
    </>
  );
}

export default App;

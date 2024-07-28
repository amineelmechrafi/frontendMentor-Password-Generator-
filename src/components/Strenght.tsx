import { usePassword } from "../store";
import { StrenghtE } from "../store";
const Strenght = () => {
  const strenghtString = usePassword((state) => state.strenght);
  const strenghtNumber:number=StrenghtE[strenghtString as keyof typeof StrenghtE]
  const numberOfGolds=Array.from({length:strenghtNumber})
  const numberOfNoneGolds=Array.from({length:4-strenghtNumber})
  

  return (
    <div className='flex justify-between items-center gap-2'>
      <h2>{strenghtString}</h2>
      <div className='flex justify-between items-center gap-1'>
         {numberOfGolds.map((_,index)=>(
          <div key={index} className="rect bg-orange-400 border-none"></div>
         ))}
         {numberOfNoneGolds.map((_,index)=>(
          <div key={index} className=" rect border-[2px] border-[hsl(252,11%,91%)] "></div>
         ))}
            
            
      </div>
    </div>
  )
}

export default Strenght

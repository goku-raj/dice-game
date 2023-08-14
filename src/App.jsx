import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame"

function App() {
  const [isPlay, setIsPlay] = useState(true)

  const togglePlay=()=>{
    setIsPlay(prev => !prev);
  }

  return (
    <>
      {isPlay ? <GamePlay /> : <StartGame toggle = {togglePlay}/>}
    </>
  )
}

export default App

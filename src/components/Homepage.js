import react from "react"

import Logo from "../assets/logo.png"
import ButtonZap from "./ButtonZap"
import ExportDecks from "../assets/Decks"
import FlashcardsPage from "./FlashcardsPage"

const Decks = ExportDecks()

export default function HomePage (Props) {

  
  return(

    <div className="home-page">
      <img src={Logo} alt="ZapRecall Logo"/>
        <ButtonZap onClick={Props.onClick} texto={`Praticar ${Props.name}`}/>
    </div>

  )

  
}
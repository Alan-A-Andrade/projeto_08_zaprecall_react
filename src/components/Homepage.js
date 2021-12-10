
import Logo from "../assets/logo.png"
import ButtonZap from "./ButtonZap"
import ExportDecks from "../assets/Decks"

let Decks = ExportDecks()

export default function HomePage ({page}) {

   return(

    <div className="home-page">
      <img src={Logo} alt="ZapRecall Logo"/>
        <div className="list-decks">
        <input placeholder="Sua meta de zaps" />
        {Decks.map((element,index) => <ButtonZap page={page} texto={element.name} key={index}/>)}
        </div>
    </div>

  )

  
}
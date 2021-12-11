
import Logo from "../assets/logo.png"
import ButtonZap from "./ButtonZap"
import ExportDecks from "../assets/Decks"

let Decks = ExportDecks()

export default function HomePage (Props) {

   return(

    <div className="home-page">
      <img src={Logo} alt="ZapRecall Logo"/>
        <div className="list-decks">
        <input type="number" min="1" placeholder="Sua meta de zaps" onChange={Props.getGoal} />
        <p>{Props.failGoal}</p>
        {Decks.map((element,index) => <ButtonZap page={Props.page} texto={element.name} index={index}/>)}
        </div>
    </div>
  ) 
}
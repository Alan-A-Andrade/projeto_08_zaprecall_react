
import Logo from "../assets/logo.png"
import ButtonZap from "./ButtonZap"
import ExportDecks from "../assets/Decks"

let listOfDecks = ExportDecks()

export default function HomePage (Props) {

   return(

    <div className="home-page">
      <img src={Logo} alt="ZapRecall Logo"/>
        <div className="list-decks">
        <input placeholder="Sua meta de zaps" onChange={Props.getGoal} />
        <p>{Props.notValidGoal}</p>
        {listOfDecks.map((element,index) => <ButtonZap dataID={"start-zap-recall"} page={Props.page} texto={element.name} index={index}/>)}
        </div>
    </div>
  ) 
}
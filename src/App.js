import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"

let Decks = ExportDecks()



export default function App () {


    const [Page, SetPage] = react.useState(<HomePage name={Decks[0].name} onClick={()=>ExportPickedDeck()}/>)

    function ExportPickedDeck(){
        SetPage(<FlashcardsPage face={""} cardStatus={"blank"} question={Decks[0].cards[0].question} answer={Decks[0].cards[0].answer} ThisCardNumber={Decks[0].cards[0].cardNumber} NumberOfCards={Decks[0].total}/>)
    }

    return(
  
        <>
            {Page}
        </>
  
    )
  
}
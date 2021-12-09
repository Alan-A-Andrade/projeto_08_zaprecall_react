import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"
import "./assets/css/reset.css"
import "./assets/css/style.css"

let Decks = ExportDecks()


export default function App () {
    
    const [Page, SetPage] = react.useState(RenderHomePage);

    let CardPage = 1;
    let Goal = 0

    function RenderHomePage(){
        
        return(
            <HomePage 
                page= {ExportPickedDeck}
            />
        )
    }

    function ExportPickedDeck(deckName, face, newFace, cardStatus){
 
        let deck = Decks.find(element =>  element.name === deckName )
     
        SetPage(

            <FlashcardsPage
            deckName={deckName}
            deck = {deck}

            CardPage={CardPage}
            
            face = {face}
            newFace = {newFace}
            cardStatus = {cardStatus} 

            Flip = {FlipCard}
            Picked ={UserPick}
            />
        )
    
    }

    function FlipCard(deckName, face, newFace, cardStatus){
        
        let deck = Decks.find(element =>  element.name === deckName )
        
        if(CardPage === deck.total+1){

            CardPage = 1;
            Goal = 0

            SetPage(
                <HomePage 
                    page= {ExportPickedDeck}
                />
            )
        }

        else{

        ExportPickedDeck(deckName, face, newFace, cardStatus)
        }
    }

    function UserPick(deckName, face, newFace, cardStatus){

        if(cardStatus ==="correct"){
        Goal++
        }

        ExportPickedDeck(deckName, face, newFace, cardStatus)
        CardPage++
        console.log(Goal)
    }

    return(
  
        <>
            {Page}
        </>
  
    )
  
}
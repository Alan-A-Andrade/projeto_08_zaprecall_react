import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"

let Decks = ExportDecks()


export default function App () {
    

    const [Page, SetPage] = react.useState(RenderHomePage);

    let CardPage = 1;

    function RenderHomePage(){
        
        return(
            <HomePage 
                page= {ExportPickedDeck}
            />
        )
    }

    function ExportPickedDeck(deckName, face, newFace, cardStatus){
        

        console.log("Renderizei ExportPickedDeck")
        console.log(face)
        console.log(newFace)
        console.log(cardStatus)
        


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

        console.log("Renderizei Flipcard")
        console.log(face)
        console.log(newFace)
        console.log(cardStatus)

                      
        ExportPickedDeck(deckName, face, newFace, cardStatus)
       
    }

    function UserPick(deckName, face, newFace, cardStatus){

        console.log("Renderizei UserPick")
        ExportPickedDeck(deckName, face, newFace, cardStatus)
        CardPage++
      
    }

    return(
  
        <>
            {Page}
        </>
  
    )
  
}
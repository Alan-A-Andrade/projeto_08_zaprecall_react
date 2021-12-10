import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"
import Endgame from "./components/EndGame"
import "./assets/css/reset.css"
import "./assets/css/style.css"

let Decks = ExportDecks()


export default function App () {
    
    const [Page, SetPage] = react.useState(RenderHomePage);

    let CardPage = 1;
    let CorrectAnswers = 0

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

            if(CorrectAnswers===deck.total){

                SetPage(
                    <Endgame
                        EndTitle = "PARABÉNS!"
                        Emoji= " 🥳"
                        EndText = "Você não esqueceu de nenhum flashcard!"
                        page ={BackToHomePage}
                    />
                )
            }
            else{

                SetPage(
                    <Endgame
                    EndTitle = "Putz.."
                    Emoji= " 😥"
                    EndText = "Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!"
                    page ={BackToHomePage}
                />
                )

            }

            CardPage = 1;
            CorrectAnswers = 0
        }

        else{

        ExportPickedDeck(deckName, face, newFace, cardStatus)
        }

    }

    function UserPick(deckName, face, newFace, cardStatus){

        if(cardStatus ==="correct"){
        CorrectAnswers++
        }

        ExportPickedDeck(deckName, face, newFace, cardStatus)
        CardPage++
        console.log(CorrectAnswers)
    }

    function BackToHomePage() {

        SetPage(

            <HomePage 
            page= {ExportPickedDeck} 
            />
        )


    }

    return(
  
        <>
            {Page}
        </>
  
    )
  
}
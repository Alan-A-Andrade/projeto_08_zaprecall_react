import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"
import Endgame from "./components/EndGame"

let Decks = ExportDecks()

export default function App () {
   
	const [Page, SetPage] = react.useState(RenderHomePage);

	let goal = 1;
	let CardPage = 1;
	let CorrectAnswers = 0

	function getGoal (event) {
		goal=event.target.value
	}

	function RenderHomePage(){
				
		return(

			<HomePage 
				page= {ExportPickedDeck} 
				getGoal={getGoal}
				failGoal={""}
			/>
		)
  }

	function ExportPickedDeck(deckName, face, newFace, cardStatus){

		let deck = Decks.find(element => element.name === deckName )

		if(goal <= 1) {

			SetPage(			
			
				<HomePage 
					page= {ExportPickedDeck} 
					failGoal={"Meta deve ser maior que 1"}
					getGoal={getGoal}
				/>
			)
		}

		else if(goal > deck.total){
			SetPage(			
			
				<HomePage 
					page= {ExportPickedDeck} 
					failGoal={`Meta é superior ao número de cards no deck selecionado. Total de cards: ${deck.total}`}
					getGoal={getGoal}
				/>
			)
		}

		else{
	
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
	}

	function FlipCard(deckName, face, newFace, cardStatus){
			
		let deck = Decks.find(element =>  element.name === deckName )

		if(CardPage === deck.total+1){

			if(CorrectAnswers>=goal){

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
						EndText = {`Você esqueceu ${deck.total - CorrectAnswers} flashcards..`}
						EndText2 ="Não desanime! Na próxima você consegue!"
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
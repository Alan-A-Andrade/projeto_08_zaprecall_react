import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"
import Endgame from "./components/EndGame"


let listOfDecks = ExportDecks()
let goal, cardPage, counterCorrectAnswers, notValidGoal = ""

export default function App () {
   
	const [Page, SetPage] = react.useState(RenderHomePage);
	const [StartStage, SetStartStage] = react.useState(Start)

	function Start(){
		cardPage = 1;
		counterCorrectAnswers = 0
		goal = 0
	}

	function getGoal (event) {
		goal=parseInt(event.target.value)
	}

	function RenderHomePage(){
				
		return(

			<HomePage 
				nextPage= {RenderFlashCard} 
				getGoal={getGoal}
				notValidGoal={notValidGoal}
			/>
		)
	}

	function RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor){

		let deck = listOfDecks.find(element => element.name === deckName )

		let isGoalValid = !(goal <= 1 || goal > deck.total || isNaN(goal))
		

		if(isGoalValid === false) {

			switch(true) {

				case goal <= 1:
					notValidGoal = "Meta deve ser maior que 1"
					break;

				case goal > deck.total:
					notValidGoal = `Meta é superior ao número de cards no deck. Total de cards: ${deck.total}`
					break;
				
				default:
					notValidGoal = "Meta deve ser um número inteiro"
			}

			SetPage(			
			
				<HomePage 
					nextPage= {RenderFlashCard} 
					notValidGoal={notValidGoal}
					getGoal={getGoal}
				/>
			)
		}


		else{
	
			SetPage(

				<FlashcardsPage
					deck = {deck}
					deckName={deckName}
					cardPage={cardPage}
					faceToShow = {faceToShow}
					faceToFlip = {faceToFlip}
					borderColor = {borderColor} 
					Flip = {FlipCard}
					Pick ={UserPick}
				/>
			)   
		}
	}

	function FlipCard(deckName, faceToShow, faceToFlip, borderColor){
			
		let deck = listOfDecks.find(element =>  element.name === deckName )

		if(cardPage === deck.total+1){

			if(counterCorrectAnswers>=goal){

				SetPage(
					<Endgame
						EndTitle = "PARABÉNS!"
						Emoji= " 🥳"
						EndText = "Você não esqueceu de nenhum flashcard!"
						nextPage ={BackToHomePage}
					/>
				)
			}

			else{

				SetPage(
					<Endgame
						EndTitle = "Putz.."
						Emoji= " 😥"
						EndText = {`Você esqueceu ${deck.total - counterCorrectAnswers} flashcards..`}
						EndText2 ="Não desanime! Na próxima você consegue!"
						nextPage ={BackToHomePage}
					/>
				)
			}

			SetStartStage(Start)
		}

		else{

			RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor)
		}
	}

	function UserPick(deckName, faceToShow, faceToFlip, borderColor){

		if(borderColor ==="correct"){

			counterCorrectAnswers++
		}

		RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor)

		cardPage++
	}

	function BackToHomePage() {

		SetPage(

			<HomePage 
				nextPage= {RenderFlashCard} 
			/>
		)
	}

	return(

		<>
			{Page}
		</>
	)
}
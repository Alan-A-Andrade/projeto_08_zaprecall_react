import react from "react"
import HomePage from "./components/Homepage"
import FlashcardsPage from "./components/FlashcardsPage"
import ExportDecks from "./assets/Decks"
import Endgame from "./components/EndGame"


let Decks = ExportDecks()
let goal, CardPage, CorrectAnswers

export default function App () {
   
	const [Page, SetPage] = react.useState(RenderHomePage);

	const [StartState, SetStartStage] = react.useState(Start)

	function Start(){
		goal = 1;
		CardPage = 1;
		CorrectAnswers = 0
	}

	function getGoal (event) {
		goal=event.target.value
	}

	function RenderHomePage(){
				
		return(

			<HomePage 
				page= {RenderFlashCard} 
				getGoal={getGoal}
				notValidGoal={""}
			/>
		)
  }

	function RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor){

		let deck = Decks.find(element => element.name === deckName )

		if(goal <= 1) {

			SetPage(			
			
				<HomePage 
					page= {RenderFlashCard} 
					notValidGoal={"Meta deve ser maior que 1"}
					getGoal={getGoal}
				/>
			)
		}

		else if(goal > deck.total){
			SetPage(			
			
				<HomePage 
					page= {RenderFlashCard} 
					notValidGoal={`Meta é superior ao número de cards no deck. Total de cards: ${deck.total}`}
					getGoal={getGoal}
				/>
			)
		}

		else{
	
			SetPage(

				<FlashcardsPage
					deck = {deck}
					deckName={deckName}
					CardPage={CardPage}
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

			SetStartStage(Start)
		}

		else{

			RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor)
		}
	}

	function UserPick(deckName, faceToShow, faceToFlip, borderColor){

		if(borderColor ==="correct"){

			CorrectAnswers++
		}

		RenderFlashCard(deckName, faceToShow, faceToFlip, borderColor)

		CardPage++
	}

	function BackToHomePage() {

		SetPage(

			<HomePage 
				page= {RenderFlashCard} 
			/>
		)
	}

	return(

		<>
			{Page}
		</>
	)
}
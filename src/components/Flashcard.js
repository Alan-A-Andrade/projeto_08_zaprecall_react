import FlashcardHeader from "./FlashcardHeader"
import FlashcardFooter from "./FlashcardFooter"

export default function Flashcard(Props) {

	let deck = Props.deck
	let CardPage = Props.CardPage

	return(
			
		<div data-identifier="flashcard" className={`flashcard ${Props.faceToShow} ${Props.borderColor}`}>
			<FlashcardHeader 
				questionText={deck.cards[CardPage-1].question} 
				cardNumber={CardPage} 
				cardTotal={deck.total}
			/>
			<h1>{deck.cards[CardPage-1].question}</h1>
			<p>{deck.cards[CardPage-1].answer}</p>
			<FlashcardFooter 
				deckName={Props.deckName} 
				faceToShow={Props.faceToShow} 
				faceToFlip={Props.faceToFlip} 
				borderColor={Props.borderColor}
				Flip={Props.Flip} 
				Pick={Props.Pick} 
			/>
		</div>
	)


}
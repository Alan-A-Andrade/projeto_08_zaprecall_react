import TurnIcon from "../assets/turn.png"

export default function FlashcardFooter(Props){

	return(
		<nav className="flashcard-footer">
			<img data-identifier="arrow" onClick={() => Props.Flip(Props.deckName, Props.faceToFlip, Props.faceToShow , "blank")} src={TurnIcon} alt="Turn icon" />
			<div onClick={() => Props.Pick(Props.deckName, "backface", "frontface" , "neutral")} className="answer">Aprendi agora</div>
			<div onClick={() => Props.Pick(Props.deckName, "backface", "frontface" , "incorrect")} className="answer">Não Lembrei</div>
			<div onClick={() => Props.Pick(Props.deckName, "backface", "frontface" ,"unsure")} className="answer">Lembrei com esforço</div>
			<div onClick={() => Props.Pick(Props.deckName, "backface", "frontface" ,"correct")} className="answer">Zap!</div>
		</nav>


	)
}


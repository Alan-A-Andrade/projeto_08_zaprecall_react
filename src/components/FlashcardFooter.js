import TurnIcon from "../assets/turn.png"

export default function FlashcardFooter(Props){

	let listOfOptions = [
		{borderColor: "neutral", OptionsText: "Aprendi agora"},
		{borderColor: "incorrect", OptionsText: "Não Lembrei"},
		{borderColor: "unsure", OptionsText: "Lembrei com esforço"},
		{borderColor: "correct", OptionsText: "Zap!"}
	]

	function OptionBox (Props) {
		return(
			<div onClick={() => Props.Pick(Props.deckName, "backface", "frontface" , Props.borderColor)} className="answer">
			 <p>{Props.OptionsText}</p>
			</div>
		)
	}

	return(
		<nav className="flashcard-footer">
			<img 
				data-identifier="arrow" 
				onClick={() => Props.Flip(Props.deckName, Props.faceToFlip, Props.faceToShow , "blank")} 
				src={TurnIcon} 
				alt="Turn icon" 
			/>

			{listOfOptions.map(element =>
				
					<OptionBox 
						Pick={Props.Pick}
						deckName={Props.deckName} 
						borderColor={element.borderColor} 
						OptionsText={element.OptionsText} 
					/>
				)		
			}
		</nav>
	)
}


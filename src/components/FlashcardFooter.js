import TurnIcon from "../assets/turn.png"

export default function FlashcardFooter(Props){

    return(
        <nav className="flashcard-footer">
            <img onClick={() => Props.Flip(Props.deckName, Props.newFace, Props.face , Props.cardStatus)} src={TurnIcon} alt="Turn icon" />
            <div onClick={() => Props.Picked(Props.deckName, "backface", "frontface" , "neutral")} className="answer">Aprendi agora</div>
            <div onClick={() => Props.Picked(Props.deckName, "backface", "fronface" , "incorrect")} className="answer">Não Lembrei</div>
            <div onClick={() => Props.Picked(Props.deckName, "backface", "frontface" ,"unsure")} className="answer">Lembrei com esforço</div>
            <div onClick={() => Props.Picked(Props.deckName, "backface", "frontface" ,"correct")} className="answer">Zap!</div>
        </nav>


    )
}


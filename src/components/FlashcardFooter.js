import TurnIcon from "../assets/turn.png"

export default function FlashcardFooter(Props){
    return(
        <nav className="flashcard-footer">
            <img src={TurnIcon} alt="Turn icon" />
            <div className="answer">Aprendi agora</div>
            <div className="answer">Não Lembrei</div>
            <div className="answer">Lembrei com esforço</div>
            <div className="answer">Zap!</div>
        </nav>


    )
}


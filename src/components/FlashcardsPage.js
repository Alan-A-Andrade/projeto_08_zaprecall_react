import HeaderZap from "./HeaderZap"
import Flashcard from "./Flashcard"

export default function FlashcardsPage(Props) {

    return(
        <div className="flashcard-page">
            <HeaderZap/>
            <Flashcard face={Props.face} cardStatus={Props.cardStatus} question={Props.question} answer={Props.answer} ThisCardNumber={Props.ThisCardNumber} NumberOfCards={Props.NumberOfCards}/>
        </div>
    )
}
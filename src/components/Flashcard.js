import FlashcardHeader from "./FlashcardHeader"
import FlashcardFooter from "./FlashcardFooter"

export default function Flashcard(Props) {

    let face = ""
    //colocar "backface" acima para alterar.
    let cardStatus = ""
    //colocar "blank" "neutral" "incorrect" "unsure" "correct"

    let question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    let answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven."

    return(
        <div className={`flashcard ${Props.face} ${Props.cardStatus}`}>
            <FlashcardHeader questionText={Props.question} cardNumber={Props.ThisCardNumber} cardTotal={Props.NumberOfCards}/>
            <h1>{Props.question}</h1>
            <p>{Props.answer}</p>
            <FlashcardFooter/>
        </div>
    )
}
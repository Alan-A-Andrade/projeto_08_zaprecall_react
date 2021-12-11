export default function FlashcardHeader(Props){
  return(
    <div className="flashcard-header">
      <h1>{Props.questionText}</h1>
      <p data-identifier="counter">{Props.cardNumber}/{Props.cardTotal}</p>
    </div>

  )
}
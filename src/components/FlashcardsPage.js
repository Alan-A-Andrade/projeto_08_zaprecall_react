import HeaderZap from "./HeaderZap"
import Flashcard from "./Flashcard"

export default function FlashcardsPage(Props) {

  return(
    <div className="flashcard-page">
      <HeaderZap/>
      <h1 className="deck-name">{Props.deckName}</h1>
      <Flashcard 
        deck={Props.deck}
        deckName={Props.deckName}
        cardPage={Props.cardPage}
        faceToShow={Props.faceToShow} 
        faceToFlip={Props.faceToFlip}
        borderColor={Props.borderColor} 
        Flip={Props.Flip}
        Pick={Props.Pick}
      />
    </div>
  )
}


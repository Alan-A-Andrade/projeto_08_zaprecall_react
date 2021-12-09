import HeaderZap from "./HeaderZap"
import Flashcard from "./Flashcard"

export default function FlashcardsPage(Props) {

    return(
        <div className="flashcard-page">
            <HeaderZap/>
            <h1 className="deck-name">{Props.deckName}</h1>
            <Flashcard 
                deckName={Props.deckName}
                deck={Props.deck}

                CardPage={Props.CardPage}

                face={Props.face} 
                newFace={Props.newFace}
                cardStatus={Props.cardStatus} 
  
                Flip={Props.Flip}
                Picked={Props.Picked}
            />
        </div>
    )
}


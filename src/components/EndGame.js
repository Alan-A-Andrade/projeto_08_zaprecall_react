import HeaderZap from "./HeaderZap";
import ButtonZap from "./ButtonZap";

export default function Endgame(Props){

  return(

    <div className="endgame-page">
      <HeaderZap />
      <div>
        <h1>{Props.EndTitle}</h1>
        <h1>{Props.Emoji}</h1>
      </div>
      <p>{Props.EndText}</p>
      <p>{Props.EndText2}</p>
      <ButtonZap nextPage={Props.nextPage} texto="Tentar novamente"/>
    </div>
  )
}
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
        <ButtonZap page={Props.page} texto="Tentar novamente"/>
    </div>

)

}
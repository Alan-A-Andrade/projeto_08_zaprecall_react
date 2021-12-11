import NextIcon from "../assets/next.png"

export default function ButtonZap (Props) {

  return(

    <div data-identifier="start-zap-recall" key={Props.index} onClick={() => Props.page(Props.texto, "frontface", "backface", "blank")} className="button-zap">
      <h1>{Props.texto}</h1>
      <img src={NextIcon} alt={`Butão para Prosseguir com ${Props.texto}`}/>
    </div>
  )
}
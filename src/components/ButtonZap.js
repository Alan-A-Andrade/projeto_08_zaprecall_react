import NextIcon from "../assets/next.png"

export default function ButtonZap (Props) {

    return(
  
      <div onClick={Props.onClick} className="button-zap">
        <h1>{Props.texto}</h1>
        <img src={NextIcon} alt={`Butão para Prosseguir com ${Props.texto}`}/>
      </div>
  
    )
  
  }
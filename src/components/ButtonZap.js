import NextIcon from "../assets/next.png"

export default function ButtonZap ({texto, page, key}) {

    return(
  
      <div key={key} onClick={() => page(texto, "frontface", "backface", "blank")} className="button-zap">
        <h1>{texto}</h1>
        <img src={NextIcon} alt={`Butão para Prosseguir com ${texto}`}/>
      </div>
  
    )
  
  }
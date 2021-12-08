import Logo from "../assets/logo.png"
import ButtonZap from "./ButtonZap"


export default function HomePage () {

    return(
  
      <div className="home-page">
        <img src={Logo} alt="ZapRecall Logo"/>
        <ButtonZap texto={"Praticar React"}/>
      </div>
  
    )
  
  }
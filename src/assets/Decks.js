export default function ExportDecks () {

let Decks = [

{name: "React" , cards: ReactCards , total: ReactCards.length},
{name: "Combinados do React" , cards: CombinadosReact , total: CombinadosReact.length}

]

return Decks

}

const ReactCards = [

{cardNumber: "1" , question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
{cardNumber: "2" , question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
{cardNumber: "3" , question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
{cardNumber: "4" , question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
{cardNumber: "5" , question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
{cardNumber: "6" , question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
{cardNumber: "7" , question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
{cardNumber: "8" , question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},

]

const CombinadosReact = [

{cardNumber: "1" , question: "O React ...", answer: "...diminui o trabalho, mas aumenta complexidade"},
{cardNumber: "2" , question: "No início...", answer: "vai parecer que vocês estão regredindo"},
{cardNumber: "3" , question: "Parece...", answer: "muita burocracia, mas no futuro se paga"},
{cardNumber: "4" , question: "Algumas coisas...", answer: "vão ser mágicas, mas com o tempo vamos entender"},
{cardNumber: "5" , question: "Vai mudar...", answer: "a forma como vocês trabalham, o que vai doer um pouco"},

]
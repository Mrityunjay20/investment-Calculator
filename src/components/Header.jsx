import HeaderImage from '../assets/investment-calculator-logo.png'

export default function Header(){
    return (

        <div id='header'>
            <img src={HeaderImage} alt="header image"/>
            <h1>Investment Calculator</h1>
        </div>
    )
}
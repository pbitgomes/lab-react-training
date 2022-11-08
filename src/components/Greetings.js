import './style.css'

function Greetings(props) {
    if (props.lang === "de") {
        return (<p className='greeting'>Hallo {props.children} </p>)
    }
    if (props.lang === "en") {
        return (<p className='greeting'>Good Morning {props.children} </p>)
    }
    if (props.lang === "es") {
        return (<p className='greeting'>Buenos días {props.children} </p>)
    }
    if (props.lang === "fr") {
        return (<p className='greeting'>Bonjour {props.children} </p>)
    }
}

export default Greetings
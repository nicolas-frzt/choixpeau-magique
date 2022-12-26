import "../styles/Button.css";


function Button( {text, linkTo} ) {
    const action = () => {
        linkTo();
        setTimeout(function(){
            window.scrollTo(0,0)
        }, 0)
    }

    return (
        <div className="boutton" onClick={action}>
            <h3>{text}</h3>
        </div>
    )
}

export default Button;
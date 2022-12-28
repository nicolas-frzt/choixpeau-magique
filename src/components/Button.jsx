import "../styles/Button.css";


function Button( {text, linkTo, color} ) {
    const action = () => {
        linkTo();
        setTimeout(function(){
            window.scrollTo(0,0)
        }, 0)
    }

    return (
        <div className="boutton" onClick={action} style={{backgroundColor: color}}>
            <h3>{text}</h3>
        </div>
    )
}

Button.defaultProps = {
    color: "brown"
}


export default Button;
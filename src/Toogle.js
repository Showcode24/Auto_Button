import { useState } from "react";
const Toogle = () => {
    const [ buttonFeat, setButtonFeat ] = useState("click me!")

    function handleButtonClick() {
        console.log("The user has clicked me")
        setButtonFeat("Thank you for clicking me")
    }
    return ( 
        <div className="Button">
        <button onClick={handleButtonClick} className={buttonFeat === "Click me!" ? "" : "clicked"}>{buttonFeat}</button>  
    </div>
     );
}
 
export default Toogle;
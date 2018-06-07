
// When the button is clicked
const buttonClick = () => {
    // Check the value entered by the user and assign it to the variable "sideValue"
    const sideValue = document.querySelector("#sides").value;



    // Conditions
    // if the input is valid, generate a random number
    // convert side value to a number
    if (Number(sideValue) > 0) {
        const generatedNumber = Math.round(Math.random() * (sideValue - 1) + 1);
        // Display that random number
        document.querySelector("#dice").textContent = generatedNumber;

    } else {
        // If the input box is blank
        if (sideValue === '') {
            alert("Please enter a number of sides!");
        // if the input is invalid
        } else { 
            alert("Please enter a valid number of sides!") ;    
        }
    }
}
//
// Emma Johnson
// Mar 4, 2024
// Form Validation
//


// Variable to refrence the form
let form = document.forms.myForm


// Check input when the user clicks the submit button
form.addEventListener("submit", function(event) {
    event.preventDefault()
    validateInput(form)
})


// Function to check the input and display an appropriate message
function validateInput (form) {

    let input = form.elements.inputField.value

    if (/^[a-zA-Z0-9]+$/.test(input)) {
        window.alert("Form submitted successfully.")
        form.submit()
    } else {
        window.alert("Please enter alphanumeric data.")
    }
}
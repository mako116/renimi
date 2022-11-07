const isValidEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(String(email).toLowerCase())
}

const form = document.getElementById('my-form')
const EmailInput = document.querySelector('input[name="email"]')
const passInput = document.querySelector('input[name="password"]')
const yo = document.querySelector('.bitcoin_option')
const thankYou = document.querySelector('.thank-you')
const inputs = [EmailInput, passInput]


let isFormValid = false
let yoValid = false
let isvalidationOn = false


// ???? //////////////// different .,.<
const resetELM = (elm) => {
    elm.classList.remove("invalid")
    elm.nextElementSibling.classList.add("hidden")

}

const invalidateElm = (elm) => {
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden")

}

const validateInputs = () => {
    if (!isvalidationOn) return;

    passInput.classList.remove("invalid")
    passInput.nextElementSibling.classList.add("hidden")
    isFormValid = true
    yoValid = true
    resetELM(EmailInput)


    // space
    if (!isValidEmail(EmailInput.value)) {

        isFormValid = false
        invalidateElm(EmailInput)
    }
    if (!passInput.value) {
        passInput.classList.add("invalid")
        passInput.nextElementSibling.classList.remove("hidden")
        isFormValid = false
        yoValid = false

    }

}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    isvalidationOn = true
    validateInputs()
    if (isFormValid) {
        form.remove()
        thankYou.classList.remove("hidden")
    }
    if (yoValid) {
        yo.remove()
    }
})

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInputs()
    })

})
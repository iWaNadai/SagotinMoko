const YES_BUTTON = document.querySelector('button.yes')
const NO_BUTTONS = [...document.querySelectorAll('button.no')]

console.log(YES_BUTTON)
console.log(...NO_BUTTONS)

YES_BUTTON.onclick = e => {
    alert('YAY! THANK U LUV UU')
}

NO_BUTTONS.forEach(button => {
    button.onclick = e => {
        const HIDDEN_BUTTONS = NO_BUTTONS.filter(btn => btn !== button)
        let randomIndex = Math.floor(Math.random() * HIDDEN_BUTTONS.length)
        console.log(randomIndex, HIDDEN_BUTTONS[randomIndex])
        button.classList.toggle('hidden')
        HIDDEN_BUTTONS[randomIndex].classList.toggle('hidden')
    }
})

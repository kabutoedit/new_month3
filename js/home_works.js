// HOMEWORK 1 (part 1)

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^\w{1,50}@gmail\.com$/


gmailButton.addEventListener('click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    }
    else {
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
})


// HOMEWORK 1 (part 2)

// const childBlock = document.querySelector('.child_block')
//
// function blockToLeft() {
//     childBlock.style.left(448px);
//     blockToLeft()
// }



const childBlock = document.querySelector('.child_block')


let positionX = 0

function moveChildBlock () {
    if (positionX < 449) {
        positionX+=2
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 10)
    }
}

moveChildBlock()

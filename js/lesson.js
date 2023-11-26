// LESSON 1
// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',() => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }
    else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER

const tabsContendCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelector('.tab_content_items')
let currentIndex = 0

const hideTabsContentCards = () => {
    tabsContendCards.forEach((tabContendCard) => {
        tabContendCard.style.display = 'none'
    })
    tabsItems.forEach((tabsItem) => {
        tabsItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContendCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hideTabsContentCards()
showTabsContentCards()

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabsItem,tabsItemIndex) => {
            if (event.target === tabsItem) {
                hideTabsContentCards()
                showTabsContentCards(tabsItemIndex)
                currentIndex = tabsItemIndex
            }
        })
    }
}

const changeTab = () => {
    currentIndex = (currentIndex + 1) % tabsItems.length;
    hideTabsContentCards()
    showTabsContentCards(currentIndex)
}

setInterval(changeTab, 5000)


//CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const cny = document.querySelector('#cny')

const converter = (element, targetElement, targetElement2, type) => {
    element.oninput = () => {
        fetch('../data/converter.json')
            .then(response => response.json())
            .then(data => {
                if (type === 'som') {
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.von).toFixed(2)
                } else if (type === 'usd') {
                    targetElement.value = (element.value *  data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.usdToVon).toFixed(2)
                } else if (type === 'cny') {
                    targetElement.value = (element.value / data.usdToVon).toFixed(2)
                    targetElement2.value = (element.value / data.von).toFixed(2)
                }
                element.value === '' && (targetElement.value = '')
                element.value === '' && (targetElement2.value = '')
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}

converter(som, usd, cny, 'som')
converter(usd, som, cny, 'usd')
converter(cny, usd, som, 'cny')





// CARD SWITCHER

const card = document.querySelector('.card'),
    btnPrev = document.querySelector('#btn-prev'),
    btnNext = document.querySelector('#btn-next')

let count = 0

btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/1${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p> ${data.title}</p>`
        })
}
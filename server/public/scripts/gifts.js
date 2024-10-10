const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if(data) {
        data.map(gift => {
            const card = document.createElement("div")
            card.classList.add('card')
            
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gift.image})`

            const giftNameLabel = document.createElement('h3')
            giftNameLabel.textContent = gift.name
            bottomContainer.appendChild(giftNameLabel)

            const giftPriceLabel = document.createElement('p')
            giftPriceLabel.textContent = gift.price
            bottomContainer.appendChild(giftPriceLabel)

            const giftAudienceLabel = document.createElement('p')
            giftAudienceLabel.textContent = gift.audience
            bottomContainer.appendChild(giftAudienceLabel)

            const readMoreLink = document.createElement('a')
            readMoreLink.textContent = 'Read More >'
            readMoreLink.href = `/gifts/${gift.id}`
            readMoreLink.setAttribute('role', 'button')
            bottomContainer.appendChild(readMoreLink)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)




        })
    } else {
        const h2label = document.createElement("h2")
        h2label.textContent = "No Gifts Available 😞"
        mainContent.appendChild(h2label)
    }
}


const requestedUrl = window.location.href.split('/').pop();
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderGifts()
}

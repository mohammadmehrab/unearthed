const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch(`/gifts`)
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')
    let gift;

    if(data) {
        gift = data.find(gift => gift.id === requestedID)
    }

    console.log(gift)

    if(gift) {
        image.setAttribute('src', gift.image)
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = gift.submittedBy
        document.getElementById('pricePoint').textContent = gift.pricePoint
        document.getElementById('audience').textContent = gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    } else {
        const unavailableLabel = document.createElement('h2')
        unavailableLabel.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(unavailableLabel)
    }

}


renderGift()
var elList = document.querySelector('.movie-list')


for (const kino of kinolar) {
    var elCard = document.createElement('li')
    var elTitle = document.createElement('h3')
    var elDate = document.createElement('h5')
    var Actors = document.createElement('p')
    var Genre = document.createElement('i')
    var elDiv = document.createElement('div')


    elDiv.classList.add('js-created-div')

    
    var elButton = document.createElement('button')
    elButton.classList.add('open-button')
    elButton.setAttribute('onclick', 'modalON')
    elButton.textContent = 'Click'

    elTitle.textContent = kino.title
    elDate.textContent ='year: ' + kino.year
    Actors.textContent = 'actors:  ' + kino.cast
    Genre.textContent = 'genre: ' + kino.genres

    elList.appendChild(elCard)
    elCard.appendChild(elTitle)
    elCard.appendChild(elDate)
    elCard.appendChild(Actors)
    elDiv.appendChild(Genre)
    elDiv.appendChild(elButton)
    elCard.appendChild(elDiv)
}
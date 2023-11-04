let active = true
document.querySelector(".store").onclick = () => {
    if (active) {
        document.querySelector("#s").classList.add('comeup')
        document.querySelector("#s").classList.remove('comedown')
        document.querySelector("#store").style.display = "grid"
        document.querySelector("#store").classList.remove('fade')
        document.body.classList.add('fixed')
        active = false
    }
    else {
        document.querySelector("#s").classList.remove('comeup')
        document.querySelector("#s").classList.add('comedown')
        document.querySelector("#store").classList.add('fade')
        setTimeout(() => {
            document.querySelector("#store").style.display = "none"
        }, 1000);
        document.body.classList.remove('fixed')
        active = true
    }

}

document.querySelector("#div").addEventListener('mouseover', () => {
    document.querySelector("#s").classList.remove('comeup')
    document.querySelector("#s").classList.add('comedown')
    document.querySelector("#store").classList.add('fade')
    setTimeout(() => {
        document.querySelector("#store").style.display = "none"
    }, 1000);
    document.body.classList.remove('fixed')
    active = true
})

if (window.innerWidth <= 700) {
    let div = document.createElement('p')
    div.innerHTML = "View on Desktop"
    div.id = 'custom'
    div.style.color = "black"
    document.body.appendChild(div)
} else {
    document.body.style.display = "block"
}
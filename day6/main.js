let clickScroll = () => {
    let fBox = document.getElementById('f')
    if(fBox) {
        let left = fBox.offsetLeft
        let navBox = document.getElementById('nav-box')
        if(navBox){
            navBox.scrollTo(navBox.clientWidth / 2 - fBox.clientWidth / 2 + 15, 0)
            console.log(navBox.clientWidth / 2 - fBox.clientWidth / 2 + 15)
        }
    }
}
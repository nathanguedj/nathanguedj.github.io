document.querySelectorAll(".levelbar>div").forEach(a => {
    let alreadySet = false
    window.addEventListener("scroll", () => {
        if(window.scrollY + window.innerHeight > a.offsetTop + window.innerHeight * 1.1 && !alreadySet){
            alreadySet = true
            a.style.width = a.getAttribute("length") + "%"
        }
    })
})
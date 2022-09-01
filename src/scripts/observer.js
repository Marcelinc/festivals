const options = {
    root: null,
    threshold: .5,   //percent of visible element
    rootMargin: "0px"
}

export const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting)
            return
        console.log(entry.target)
    })
},options)


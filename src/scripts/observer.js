const options = {
    root: null,
    threshold: .3,   //percent of visible element
    rootMargin: "-150px"
}

export const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return
        
        console.log(entry)
        observer.unobserve(entry.target)
        
    })
},options)


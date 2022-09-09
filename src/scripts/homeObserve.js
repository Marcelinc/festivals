//Section one observer
const optionsOne = {
    root: null,
    threshold: 1,   //percent of visible element
    rootMargin: "-150px"
}

const sectionOneObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return
        entry.target.classList.add('appear')
        observer.unobserve(entry.target)

    })
},optionsOne)


//Section two observer
const optionsTwo = {
    root: null,
    threshold: 0.9,   //percent of visible element
    rootMargin: "0px 0px -50px 0px"
}
const sectionTwoObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return
        entry.target.childNodes.forEach((child,index) => {
            setTimeout(() => {
                //console.log(index)
                child.classList.add('appear')
                observer.unobserve(entry.target)
            },index*1000)
        })
        
    })
},optionsTwo)


//Section three (most viewed) observer
const optionsThree = {
    root: null,
    threshold: 1,   //percent of visible element
    rootMargin: "0px 0px -50px 0px"
}
const sectionThreeObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach((entry,index) => {
        if(!entry.isIntersecting)
            return

        setTimeout(() => {
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)
        },index*700)
        //console.log(entry)
    })
},optionsThree)


//Section four (form) observer
const optionsFour = optionsTwo
const sectionFourObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        //console.log(entry)
        if(!entry.isIntersecting)
            return
        
        //console.log(entry.target.tagName)
        entry.target.classList.add('appear')
        observer.unobserve(entry.target)
    })
},optionsFour)


//Initialize observers
//if(window.location.pathname === '/')
export const initializeObservers = () => {
    //Section one
    const sectionOne = document.querySelector('.one').childNodes
    //console.log(sections)
    sectionOne.forEach(section => {
        sectionOneObserver.observe(section)
    })

    //Section two
    const sectionTwo = document.querySelector('.two').childNodes
    //console.log(sectionTwo)
    sectionTwo.forEach(elem => sectionTwoObserver.observe(elem))


    //Section three
    const sectionMostSearched = document.querySelector('.mostSearched').childNodes
    sectionMostSearched.forEach(elem => sectionThreeObserver.observe(elem))
     

    //Section four
    const sectionFour = document.querySelector('.three').childNodes
    sectionFour.forEach(elem => sectionFourObserver.observe(elem))
}
//document.addEventListener('DOMContentLoaded', () => {
    
//})




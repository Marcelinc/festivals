import {observer} from './observer'

var sectionOne,sections

document.addEventListener('DOMContentLoaded', () => {
    sectionOne =  document.getElementById("database")
    sections = document.querySelectorAll('.homeSection')

    sections.forEach(section => {
        observer.observe(section)
    })
})




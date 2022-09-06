export function smoothScroll(target,duration){
    var targetElem = document.querySelector(target)
    var origin = document.querySelector('.one')
    console.log('target: ',targetElem)
    var targetPosition = targetElem.getBoundingClientRect().top
    var originPosition = origin.getBoundingClientRect().top
    console.log('OriginPos:'+originPosition)
    console.log('targetPosition: ',targetPosition)
    //var startPosition = window.pageYOffset
    //console.log('startPosition: ',startPosition)
    var distance = targetPosition - originPosition
    console.log('distance: ',distance)

    var startTime = null

    function animation(currentTime){
        if(startTime === null) startTime = currentTime

        var timeElapsed = currentTime - startTime
        //console.log('CurrentTime: '+currentTime,'startTime: '+startTime)
        var run = ease(timeElapsed,startTime,distance,duration)
        window.scrollTo(0,run)

        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t,b,c,d){
        t /= d/2;
        console.log('t: '+t)
        if(t < 1) return c / 2 * t * t;
        t--;
        console.log(-c / 2 * (t * (t - 2) - 1) )
        return -c / 2 * (t * (t - 2) - 1);
    }

    requestAnimationFrame(animation)
}



document.addEventListener('DOMContentLoaded',() => {
    //Home page animations
    const HomeScroll = () => {
        var chevrons = document.querySelector('.one')
        chevrons.addEventListener('click',() => {
            smoothScroll('.two',1000)
            console.log('clicked')
        })
    }
    HomeScroll()
})



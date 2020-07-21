const imageContainer = document.querySelector('.gallery-homepage-wrapper')
let moving = false;
let transformedValue = 0;
let currentPosition = 0;
let lastPosition = 0;
let newTransformedValue = 0;









window.addEventListener('ontouchstart', (e) => {

    moving = true
    currentPosition = e.pageX
    console.log(currentPosition)
    transform = window.getComputedStyle(imageContainer).getPropertyValue('transform')
    if (transform !== 'none') {
        transformedValue = window.getComputedStyle(imageContainer).getPropertyValue('transform').split(',')[4].trim()
    }

})





window.addEventListener('ontouchmove', (e) => {
    console.log(moving)
    if (moving) {
        var movingDiff = e.pageX - currentPosition;
        if (e.pageX - lastPosition > 0) {
            console.log(newTransformedValue)
            if (newTransformedValue > 0) {
                return
            }
        } else {
            if (Math.abs(newTransformedValue) > (imageContainer.scrollWidth - window.innerWidth )) {
                return
            }
        }
        newTransformedValue = movingDiff + parseInt(transformedValue);
        console.log(newTransformedValue)
        imageContainer.style.transition = '0.4s ease-in-out';
        imageContainer.style.transform = `translateX(${newTransformedValue}px)`;
    }
    lastPosition = e.pageX

})



window.addEventListener('ontouchend', () => {
    moving = false
})






const pictureHolder = document.querySelectorAll('.picture-container')
pictureHolder.forEach((picture, index) => {
    console.log('yy', pictureHolder[index])
    dat = pictureHolder[index]
    picture.addEventListener('click', e => {
        let pictureSource = e.target.src
            // '/IMG/' is the splitter here and hence the image id is the last item in the array
            // Check 1
        console.log(pictureSource.split('/Thumbnails/')[1])

        let pictureid = pictureSource.split('/Thumbnails/')[1]

        // Added New Source

        let newpictureSource = pictureSource.split('/Thumbnails/')[0] + '/Homepage-gallery/' + pictureid
            // Check 2
        console.log(newpictureSource)

        //Moving to the perfect height

        // window.scrollTo(document.body, document.querySelector('.bigimagecontainer').offsetTop)

        // document.querySelector('.homepage-gallery-container').style.height = 100 + 'vh'

        // Creating the div container which contains the element and has

        let bigImageContainer = document.createElement('div')
        bigImageContainer.setAttribute('class', 'bigimagecontainer')
        let bigImageImg = document.createElement('img')
        bigImageImg.setAttribute('class', 'bigImageImg')
        bigImageImg.src = newpictureSource
        bigImageContainer.appendChild(bigImageImg)
        document.querySelector('.homepage-gallery-container').appendChild(bigImageContainer)
        // document.body.appendChild(bigImageContainer)

        document.querySelector('.gallery-homepage-wrapper').style.height = 'auto'
        document.body.style.background = 'rgba(0,0,0,0.7)'
        // document.body.style.overflow = 'hidden';



        // Left Button

        let leftBtnDiv = document.createElement('div')
        leftBtnDiv.setAttribute('class', 'left-button button')
        let leftBtn = document.createElement('button')
        leftBtn.innerHTML = '<svg width="24" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3333 29L54 29L54 10.8182L32.6667 10.8182L11.3333 10.8182L11.3333 29Z" fill="#F4F4F2"/><path d="M-2.09808e-05 20.6452L21.3333 0L21.3333 20L21.3333 40L-2.09808e-05 20.6452Z" fill="#F4F4F2"/></svg>'
        leftBtnDiv.appendChild(leftBtn)
        bigImageContainer.appendChild(leftBtnDiv)


        // Right Button

        let rightBtnDiv = document.createElement('div')
        rightBtnDiv.setAttribute('class', 'right-button button')
        let rightBtn = document.createElement('button')
        rightBtn.innerHTML = '<svg width="24" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.6667 11H0L0 29.1818H21.3333H42.6667V11Z" fill="#F4F4F2"/><path d="M54 19.3548L32.6667 40V20V0L54 19.3548Z" fill="#F4F4F2"/></svg>'
        rightBtnDiv.appendChild(rightBtn)
        bigImageContainer.appendChild(rightBtnDiv)

        rightBtn.addEventListener('click', () => {
            index += 1;
            if (index > pictureHolder.length - 1) {
                index = 0
            }
            document.querySelector('.bigImageImg').remove()
            let bigImageImg = document.createElement('img')
            bigImageImg.setAttribute('class', 'bigImageImg')
            newpictureSource = pictureSource.split('/Thumbnails/')[0] + '/Homepage-gallery/' + pictureHolder[index].lastElementChild.src.split('/Thumbnails/')[1]
            console.log(newpictureSource)
            bigImageImg.src = newpictureSource
            bigImageContainer.appendChild(bigImageImg)
            document.querySelector('.homepage-gallery-container').appendChild(bigImageContainer)

        })


        leftBtn.addEventListener('click', () => {
            index -= 1;
            if (index < 0) {
                index = pictureHolder.length - 1
            }
            document.querySelector('.bigImageImg').remove()
            let bigImageImg = document.createElement('img')
            bigImageImg.setAttribute('class', 'bigImageImg')
            newpictureSource = pictureSource.split('/Thumbnails/')[0] + '/Homepage-gallery/' + pictureHolder[index].lastElementChild.src.split('/Thumbnails/')[1]
            console.log(newpictureSource)
            bigImageImg.src = newpictureSource
            bigImageContainer.appendChild(bigImageImg)
            document.querySelector('.homepage-gallery-container').appendChild(bigImageContainer)

        })


        // Exit Button
        let exitBtnDiv = document.createElement('div')
        exitBtnDiv.setAttribute('class', 'exit-button button')
        let exitBtn = document.createElement('button')
        exitBtn.innerHTML = '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2L2 21M20 21L2 2" stroke="red" stroke-width="3.1"/></svg>'
        exitBtnDiv.appendChild(exitBtn)
        bigImageContainer.appendChild(exitBtnDiv)

        exitBtn.addEventListener('click', () => {
            document.querySelector('.bigimagecontainer').remove()
            document.body.style.background = 'initial'
            document.body.style.overflow = 'visible'
            document.querySelector('.gallery-homepage-wrapper').style.display = 'grid'
            document.querySelector('.gallery-homepage-wrapper').style.height = 'initial'
            document.querySelector('.homepage-gallery-container').style.height = 100 + '%'


            leftBtnDiv.remove()
            rightBtnDiv.remove()
            exitBtnDiv.remove()
        })
    })

})
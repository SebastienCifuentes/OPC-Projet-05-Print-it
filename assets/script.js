const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let counter = 0
let currentSlide = '/slide1.jpg'
const imageBaseline = './assets/images/slideshow/'
const bannerImg = document.querySelector('.banner-img')
const tagLine = document.querySelector('.tag_line')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const dots = document.querySelectorAll('.dot')

activeBulletPoint()

function activeBulletPoint() {
	dots.forEach((dot, index) => {
		dot.classList.remove('dot_selected')
		if (index === counter) {
			dot.classList.add('dot_selected')
		}
	})
}

function changeSlide() {
	arrowLeft.addEventListener('click', function () {
		counter--
		if (counter === -1) {
            counter = slides.length - 1
        }
		currentSlide = slides[counter]
		bannerImg.setAttribute('src', imageBaseline + currentSlide.image)
		tagLine.innerHTML = currentSlide.tagLine
		activeBulletPoint()
	})

	arrowRight.addEventListener('click', function () {
		counter++
		if (counter === slides.length) {
            counter = 0
		}
		currentSlide = slides[counter]
		bannerImg.setAttribute('src', imageBaseline + currentSlide.image)
		tagLine.innerHTML = currentSlide.tagLine
		activeBulletPoint()
	})
}

changeSlide()
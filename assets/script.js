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

let compteurSlide = 0
let currentSlide = '/slide1.jpg'
const imageBaseline = './assets/images/slideshow/'
const bannerImg = document.querySelector('.banner-img')
const tag_line = document.querySelector('.tag_line')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

function changeSlide() {
	arrowLeft.addEventListener('click', function () {
		console.log('click gauche')
		compteurSlide--
		currentSlide = slides[compteurSlide]
		bannerImg.setAttribute('src', imageBaseline + currentSlide.image)
		tag_line.innerHTML = currentSlide.tagLine
		if (compteurSlide === -1) {
            compteurSlide = slides.length - 1
        }
	})

	arrowRight.addEventListener('click', function () {
		console.log('click droit')
		compteurSlide++
		currentSlide = slides[compteurSlide]
		bannerImg.setAttribute('src', imageBaseline + currentSlide.image)
		tag_line.innerHTML = currentSlide.tagLine
		if (compteurSlide === slides.length - 1) {
            compteurSlide = -1
        }
	})
}

changeSlide()
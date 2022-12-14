//first section slider
const slider = document.querySelector('.header-background');
const sliderCount = document.querySelector('.header-background-counter span')
const images = ['./images/317090919_5587835408001931_4395270275206368057_n.jpg', './images/131894685_3523288897789936_5529393542263310857_n.jpg', './images/257413100_4470823573036459_3937053174074585102_n.jpg'];
let count = 1;

setInterval(() => {
	slider.style.backgroundImage = "url(" + images[count] + ")";
	sliderCount.innerHTML = `0${count + 1}`;
	if (count < images.length - 1) {
		count++;
	} else {
		count = 0;
	}
}, 5000);

//second section skill bar
const jsBar = document.querySelector('.js');
const htmlBar = document.querySelector('.html');
const cssBar = document.querySelector('.css');

function skillBarInterval(element, percent) {
	let i = 1;


	let name = setInterval(() => {
		i+=1;
		if(i >= percent) {
			clearInterval(name);
		}
		element.style.width = `${i}%`
		console.log(i)
	}, 7)
}

// window.onscroll = () => {

// 	const scrolled = window.scrollY;
// 	const elementPosition = htmlBar.getBoundingClientRect();
// 	if(Math.round(elementPosition.bottom) == window.innerHeight) {
// 		skillBarInterval(cssBar, 90);
// 		skillBarInterval(jsBar, 70);
// 		skillBarInterval(htmlBar, 80);
// 	}
// }
const observer = new window.IntersectionObserver(([entry]) => {
	if (entry.isIntersecting) {
		skillBarInterval(cssBar, 90);
		skillBarInterval(jsBar, 70);
		skillBarInterval(htmlBar, 80);
		return
	}
}, {
	root: null,
	threshold: 0.1,
})

observer.observe(cssBar);

//fourth section slider

const descriptionSlider = document.querySelector('.slider');
const sliderButtons = document.querySelectorAll('.slider-buttos div');
sliderButtons[1].style.border = '2px solid #E93656';

sliderButtons[0].addEventListener('click', () => {
	sliderButtons[0].style.border = '2px solid #E93656';
	sliderButtons[1].style.border = '2px solid #FFF';
	sliderButtons[2].style.border = '2px solid #FFF';
	descriptionSlider.style.transform = 'translateY(0)';
});

sliderButtons[1].addEventListener('click', () => {
	sliderButtons[1].style.border = '2px solid #E93656';
	sliderButtons[0].style.border = '2px solid #FFF';
	sliderButtons[2].style.border = '2px solid #FFF';
	descriptionSlider.style.transform = 'translateY(-33.3333%)';
});

sliderButtons[2].addEventListener('click', () => {
	sliderButtons[2].style.border = '2px solid #E93656';
	sliderButtons[0].style.border = '2px solid #FFF';
	sliderButtons[1].style.border = '2px solid #FFF';
	descriptionSlider.style.transform = 'translateY(-66.6666%)';
});

const form = document.getElementById('data');

console.log(form['message'].currentValue)

const data = {
	name: '',
	email: '',
	url: '',
	message: '',
}

form['submit'].addEventListener('click', () => {
	data.name = form['name'].value;
	data.email = form['email'].value;
	data.url = form['url'].value;
	data.message = form['message'].value;


	fetch('https://borjomi.loremipsum.ge/api/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			if(data.status === 1) {
				alert(data.desc)
			}
		})
})

//fifth section projects

const projectsNavigation = document.querySelectorAll('.nav');
const projects = document.querySelectorAll('.project-container');

for(let i=0; i<=projectsNavigation.length; i++) {
	projectsNavigation[i].addEventListener('click', () => {
		if(i === 0) {
			projectsNavigation[i].style.color = '#E93656';
			projectsNavigation.forEach((element, index) => {
				if(index !== 0) {
					element.style.color = '#fff'
				}
			})
			for(let k=0; k<=projects.length; k++) {
				projects[k].className = "visible project-container"
			}
		} else {
			projectsNavigation[i].style.color = '#E93656';
			projectsNavigation.forEach((element, index) => {
				if(index !== i) {
					element.style.color = '#fff'
				}
			})
			for(let k=0; k<=projects.length; k++) {
				if(i-1 !== k) {
					projects[k].className="hidden project-container"
				}
				projects[i-1].className="visible project-container"
			}
		}
	})
}

// contact us form


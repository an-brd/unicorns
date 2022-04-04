"use strict"

let unicorns = []
let numbUnicorns = 10

// calls the setup function, to set up all the unicorns
setup()

//Start the race
requestAnimationFrame(moveUnicorns)

function setup () {
	let i = 0 
	while (i < numbUnicorns) {
		// create unicorns

		let u = {}
		u.div = document.createElement("div")
		document.body.appendChild(u.div)
		u.div.classList.add("unicorn")
		u.div.style.top = 1+ i * 10 + "%"

		u.x = 0
		let colours="red,blue,green,orange,purple,white,grey,yellow,violet,turquoise".split(",")
		u.div.style.backgroundColor = colours[i]
		unicorns[i] = u

		i++
	}
}

function resetRace() {
	let i = 0
	while (i < numbUnicorns) {
		unicorns[i].x = 0
		i++
	}
}

function moveUnicorns() {
	
	let i = 0
	while (i<numbUnicorns) {
		unicorns[i].div.style.left = unicorns[i].x + "%"
		unicorns[i].x += Math.random()

		let colours="red,blue,green,orange,purple,white,pink,grey,violet,turquoise".split(",")

		if (unicorns[i].x > 90){
			alert (`${colours[i]} unicorn wins the race`)
			resetRace()
		}
		i++
	}
	requestAnimationFrame(moveUnicorns)
}
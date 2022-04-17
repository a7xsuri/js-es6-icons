const dati = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const TypeList = [];
dati.forEach(CreationTypeList)
function CreationTypeList (element) {
	if (!TypeList.includes(element.type)) {
		TypeList.push(element.type)
	}
}

const filtro = document.getElementById("filtro");
const option = document.createElement("option");
option.value = "all";
option.innerHTML = "All"
filtro.append(option)


TypeList.forEach(createSelect)
function createSelect(element, index) {
	const option = document.createElement("option");
	option.value = TypeList[index];
	option.innerHTML = TypeList[index]
	filtro.append(option)
}



dati.forEach((element) => element.color = getRandomColor())
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}



const cardContainer = document.querySelector(".cardContainer");
dati.forEach(generateCard)

function generateCard(element, index, array) {
	const card = document.createElement("div");
	card.className = 'card'
	card.innerHTML = `<i class="${element.prefix}solid ${element.prefix}${element.name}"></i>
			<span class="cardTitle">${element.name}</span>
			</div>` ;
	cardContainer.append(card)
	card.style.color =`${element.color}`
	card.classList.add(element.type) 
}


const cards = document.getElementsByClassName("card");
function setFilter() {
	const filterValue = document.getElementById("filtro").value
	switch (filterValue) {
		case "all":
		default:
			for (let i = 0; i < cards.length; i++) {
				show(cards[i])
			}
			
		break;
		case "animal":
			for (let i = 0; i < cards.length; i++) {
				hide(cards[i])
			}
			const animalType = document.getElementsByClassName("animal")
			for (let i = 0; i < animalType.length; i++) {
				show(animalType[i])
			}
		break;

		case "vegetable":
			for (let i = 0; i < cards.length; i++) {
				hide(cards[i])
			}
			const vegetableType = document.getElementsByClassName("vegetable")
			for (let i = 0; i < vegetableType.length; i++) {
				show(vegetableType[i])
			}
		break;

		case "user":
			for (let i = 0; i < cards.length; i++) {
				hide(cards[i])
			}
			const userType = document.getElementsByClassName("user")
			for (let i = 0; i < userType.length; i++) {
				show(userType[i])
			}
		break;
	}
}

function hide(cardList) {
	cardList.classList.add("hide")
}
function show(cardList) {
	cardList.classList.remove("hide")
}

document.getElementById("filtro").addEventListener("change", setFilter);
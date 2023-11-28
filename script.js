//nav
const strapBackground = document.querySelector('nav.strap-background')
const navBtn = document.querySelector('.bar-nav')
const staggeredIcon = document.querySelector('.fa-bars-staggered')
const barsIcon = document.querySelector('.fa-bars')
const navMobile = document.querySelector('nav.mobile')
const ulMobile = document.querySelector('.ul-mobile')
const aLinks = document.querySelectorAll('nav.mobile a')
const btnLoginSection = document.querySelector('.buttons-login')

//hyper-menu-nav
const openHyperMenuBtn = document.querySelector('.hyper-menu-buttons')
const closeMenuIcon = document.querySelector('.fa-right-from-bracket')
const openMenuIcon = document.querySelector('.fa-arrow-left')
const navHyper = document.querySelector('.hyper-menu')
const hyperUl = document.querySelector('.hyper-ul')
const paragraphOpenHyperMenu = document.querySelector('.open-menu')
const paragraphCloseHyperMenu = document.querySelector('.close-menu')
const hyperLi = document.querySelectorAll('.li-hyper')
const hyperBar = document.querySelector('.hyper-bar')
const hyperMain = document.querySelector('.hyper-main')

//dataGenerator
let dataGenerator = ['login', 'password']
let newLogin = ''
let newPassword = ''

//login-panel
const loginPanel = document.querySelector('.login-panel-container')
const loginInput = document.querySelector('#email')
const loginPassword = document.querySelector('#password')
const loginBtn = document.querySelector('.panel-login')
const generateBtn = document.querySelector('.generate')
const passwordError = document.querySelector('.password-error')
const emailError = document.querySelector('.email-error')
const error = document.querySelectorAll('.error')
const divPassword = document.querySelector('.password')
const divEmail = document.querySelector('.email')
const generateError = document.querySelector('.generate-error')
const globalError = document.querySelector('.global-error')

//hyper
///hyper-main-open
const hyperFirstPage = document.querySelector('.open-hyper-main')
const hyperOrdersPage = document.querySelector('.orders-main')
const hyperProductsPage = document.querySelector('.products-main')

const addProductPage = document.querySelector('.add-product')

///hyper-cards
const allPages = document.querySelectorAll('.page')
const ordersBtn = document.querySelector('.orders')
const firstPageBtn = document.querySelector('.first-page')

///addItemToList
const itemsBtn = document.querySelector('.items')
const addProducts = document.querySelector('.add-products')
const closeAddItemBtn = document.querySelector('.close-btn')
const addItem = document.querySelector('.add-btn-check')
const paragraphInfo = document.querySelector('.info')

const nameItemInput = document.querySelector('#name-product')
const priceProductInput = document.querySelector('#price-product')
const nameProductDiv = document.querySelector('.name-product')
const namePriceDiv = document.querySelector('.price-product')

const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')
const controlPanel = document.querySelectorAll('.control-panel')
///
const editItemPage = document.querySelector('.edit-product')
const editClosePage = document.querySelector('.edit-close-btn')

const editNameItemInput = document.querySelector('#edit-name-product')
const editPriceItemInput = document.querySelector('#edit-price-product')

//open-animation
const mainFunctions = () => {
	logoIconChange()
	deleteBtn.forEach(btn => {
		btn.addEventListener('click', deleteOrder)
	})
	editBtn.forEach(btn => {
		btn.addEventListener('click', editProduct)
	})
}

const logoIconChange = () => {
	const icons = ['<i class="fa-regular fa-circle-dot"></i>', '<i class="fa-regular fa-circle-check"></i>']
	const logoParagraph = document.querySelector('.logo-icon')
	let icon = 0
	setInterval(() => {
		icon == icons.length - 1 ? (icon = 0) : icon++
		logoParagraph.innerHTML = icons[icon]
		logoParagraph.classList.add('logo-icon-animation')
		logoParagraph.classList.remove('logo-icon-animation-start')
	}, 10000)
}

//nav
const strapShadow = () => {
	if (window.scrollY >= 50 && !hyperMain.classList.contains('opacity-on')) {
		strapBackground.classList.add('strap-background-shadow')
	} else if (hyperMain.classList.contains('opacity-on') && window.scrollY >= 50) {
		strapBackground.classList.remove('strap-background-shadow')
		hyperBar.classList.add('strap-background-shadow')
	} else {
		strapBackground.classList.remove('strap-background-shadow')
		hyperBar.classList.remove('strap-background-shadow')
	}
}

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile-open')
	ulMobile.classList.add('opacity-on')
	btnLoginSection.classList.toggle('opacity-on')
	barsIcon.classList.toggle('display-off')
	staggeredIcon.classList.toggle('display-off')
	strapBackground.classList.remove('strap-background-shadow')

	aLinks.forEach(el => {
		el.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile-open')
			barsIcon.classList.add('display-off')
			staggeredIcon.classList.remove('display-off')
		})
	})
}

const handleHyperMenu = () => {
	navHyper.classList.toggle('menu-hyper-transition-left')
	closeMenuIcon.classList.toggle('display-off')
	openMenuIcon.classList.toggle('display-off')
	paragraphOpenHyperMenu.classList.toggle('display-off')
	paragraphCloseHyperMenu.classList.toggle('display-off')
	hyperUl.classList.add('opacity-on')

	if (navHyper.classList.contains('menu-hyper-transition-left')) {
		document.body.style.overflowY = 'hidden'
		document.body.style.height = '100vh'
	} else {
		document.body.style.overflowY = ''
		document.body.style.height = ''
	}

	hyperLi.forEach(el => {
		el.addEventListener('click', () => {
			navHyper.classList.remove('menu-hyper-transition-left')
			closeMenuIcon.classList.remove('display-off')
			openMenuIcon.classList.add('display-off')
			paragraphOpenHyperMenu.classList.remove('display-off')
			paragraphCloseHyperMenu.classList.add('display-off')
			document.body.style.overflowY = ''
			document.body.style.height = ''
		})
	})
}

//generate-login
const loginGenerate = () => {
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	const patternLength = 7
	const prefix = '[hypertrial] - '.toUpperCase()
	if (loginInput.value.indexOf(prefix) == 0) {
		generateError.textContent = 'Stworzyłeś już jednorazowe dane dla konta. Użyj przycisku "Zaloguj się".'
		return
	} else {
		generateError.textContent = ''
	}
	for (let i = 0; i < patternLength; i++) {
		let rnum = Math.floor(Math.random() * chars.length)
		newLogin += chars.substring(rnum, rnum + 1)
		newPassword += chars.substring(rnum, rnum + 2)
	}
	dataGenerator[0] = newLogin
	dataGenerator[1] = newPassword
	loginInput.value = prefix + dataGenerator[0]
	loginPassword.value = dataGenerator[1]
	loginInput.setAttribute('disabled', '')
	loginPassword.setAttribute('disabled', '')
	checkLength(loginPassword, divPassword)
	checkLength(loginInput, divEmail)
}

//login-panel
const checkLoginPanel = () => {
	checkLength(loginPassword, divPassword)
	checkLength(loginInput, divEmail)
}

const checkDataCorrect = () => {
	const openAnimation = document.querySelector('.open-hyper-animation')
	const logo = document.querySelector('.open-hyper-animation .logo')
	const logoPush = document.querySelector('.open-hyper-animation .lds-ripple')
	if (newLogin.length > 1 && newPassword.length > 1) {
		globalError.textContent = ''
		loginPanel.classList.add('opacity-off')
		setTimeout(() => {
			loginPanel.style.display = 'none'
			openAnimation.style.display = 'flex'
			logoPush.classList.add('opacity-on')
			setTimeout(() => {
				logo.classList.add('opacity-on')
				logoPush.classList.add('opacity-off')
				setTimeout(() => {
					logo.classList.add('opacity-off')
					setTimeout(() => {
						openAnimation.style.display = 'none'
						hyperMain.style.display = 'flex'
						hyperMain.classList.add('opacity-on')
						hyperFirstPage.style.display = 'flex'
						hyperFirstPage.classList.add('opacity-on')
					}, 1000)
				}, 2000)
			}, 1000)
		}, 1000)
	} else if (
		newLogin.length == 0 &&
		newPassword.length == 0 &&
		loginInput.value.length >= 1 &&
		loginPassword.value.length >= 1
	) {
		globalError.textContent = 'Niepoprawne dane logowania'
		console.log('asdas')
	} else {
		globalError.textContent = ''
	}
}

const checkLength = (input, divError) => {
	if (input.value.length == 0) {
		divError.lastElementChild.textContent = 'Pole nie może być puste'
		input.classList.add('error-input')
		globalError.textContent = ''
	} else {
		divError.lastElementChild.textContent = ''
		input.classList.remove('error-input')
		globalError.textContent = ''
	}
}

//hyper

const hyperOpenCard = page => {
	allPages.forEach(element => {
		element.style.display = 'none'
		element.classList.remove('opacity-on')
	})
	page.style.display = 'flex'
	page.classList.add('opacity-on')
}

const openAddPanel = addPanel => {
	addPanel.style.display = 'flex'
	addPanel.classList.add('opacity-on')
}

const closeAddPanel = addPanel => {
	addPanel.style.display = 'none'
	addPanel.classList.remove('opacity-on')
	namePriceDiv.lastElementChild.textContent = ''
	nameProductDiv.lastElementChild.textContent = ''
	nameItemInput.classList.remove('error-input')
	priceProductInput.classList.remove('error-input')
	nameItemInput.value = ''
	priceProductInput.value = ''
}

const addItemToList = () => {
	let randomID
	randomID = Math.floor(100 + Math.random() * 900)
	let randomIDParse = parseInt(randomID)

	let price = priceProductInput.value
	const priceResult = Number(price).toFixed(2)

	let sign
	sign = Math.sign(priceProductInput.value)
	if (nameItemInput.value.length == 0 || priceProductInput.value.length == 0) {
		return
	} else if (nameItemInput.value.length > 15 && priceProductInput.value.length > 10) {
		nameProductDiv.lastElementChild.textContent = 'Użyj maksymalnie 15 znaków)'
		nameItemInput.classList.add('error-input')
		namePriceDiv.lastElementChild.textContent = 'Użyj maksymalnie 10 cyfr'
		priceProductInput.classList.add('error-input')
		return
	} else if (priceProductInput.value.length > 10) {
		namePriceDiv.lastElementChild.textContent = 'Użyj maksymalnie 10 cyfr'
		priceProductInput.classList.add('error-input')
		return
	} else if (nameItemInput.value.length > 15) {
		nameProductDiv.lastElementChild.textContent = 'Użyj maksymalnie 15 znaków'
		nameItemInput.classList.add('error-input')
		return
	} else if (sign === -1 || sign === 0) {
		namePriceDiv.lastElementChild.textContent = 'Kwota musi być dodatnia'
		priceProductInput.classList.add('error-input')
		return
	}
	const newProductDiv = document.createElement('div')
	newProductDiv.classList.add('order')
	hyperProductsPage.append(newProductDiv)
	const idProduct = document.createElement('div')
	idProduct.classList.add('order-id')
	newProductDiv.append(idProduct)
	paragraphInProduct = document.createElement('p')
	paragraphInProduct.textContent = `${randomIDParse}`
	idProduct.append(paragraphInProduct)
	const orderName = document.createElement('div')
	orderName.classList.add('order-name')
	newProductDiv.append(orderName)
	paragraphInOrderName = document.createElement('p')
	paragraphInOrderName.textContent = `${nameItemInput.value}`
	orderName.append(paragraphInOrderName)
	const orderPrice = document.createElement('div')
	orderPrice.classList.add('price')
	newProductDiv.append(orderPrice)
	paragraphInPrice = document.createElement('p')
	paragraphInPrice.textContent = `${priceResult}zł`
	orderPrice.append(paragraphInPrice)
	const controlPanel = document.createElement('div')
	controlPanel.classList.add('control-panel')
	newProductDiv.append(controlPanel)
	buttonDelete = document.createElement('button')
	buttonDelete.innerHTML = '<i class="fa-solid fa-x"></i>'
	buttonDelete.classList.add('delete')
	buttonEdit = document.createElement('button')
	buttonEdit.classList.add('edit')
	buttonEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
	controlPanel.append(buttonDelete)
	controlPanel.append(buttonEdit)

	if (!nameItemInput.value.length == 0 && !priceProductInput.value.length == 0) {
		addProductPage.style.display = 'none'
		addProductPage.classList.remove('opacity-on')
		nameItemInput.value = ''
		priceProductInput.value = ''
		paragraphInfo.style.textContent = ''
	}
	buttonDelete.addEventListener('click', deleteOrder)
	buttonEdit.addEventListener('click', editProduct)
}

const deleteOrder = e => {
	e.currentTarget.parentElement.parentElement.remove()
}

const editProduct = e => {
	const btnEditAcc = document.querySelector('.edit-check-btn')
	editItemPage.classList.add('opacity-on')
	editItemPage.style.display = 'flex'
	const stringLength = e.currentTarget.parentElement.parentElement.children[2].textContent.length - 2
	editNameItemInput.value = e.currentTarget.parentElement.parentElement.children[1].textContent
	editPriceItemInput.value = e.currentTarget.parentElement.parentElement.children[2].textContent.substring(
		0,
		stringLength
	)
	console.log(
		(editPriceItemInput.value = e.currentTarget.parentElement.parentElement.children[2].textContent.substring(
			0,
			stringLength
		))
	)
	const parent = e.currentTarget.parentElement.parentElement
	editNameItemInput.value = e.currentTarget.parentElement.parentElement.children[1].textContent
	console.log((editNameItemInput.value = e.currentTarget.parentElement.parentElement.children[1].textContent))

	btnEditAcc.addEventListener('click', () => {
		parent.children[1].textContent = editNameItemInput.value
		parent.children[2].textContent = editPriceItemInput.value + 'zł'
		editItemPage.classList.remove('opacity-on')
		editItemPage.style.display = 'none'
	})
}

window.addEventListener('scroll', strapShadow)
navBtn.addEventListener('click', handleNav)
openHyperMenuBtn.addEventListener('click', handleHyperMenu)

loginBtn.addEventListener('click', e => {
	e.preventDefault()
	checkLoginPanel()
	checkDataCorrect()
})

generateBtn.addEventListener('click', e => {
	e.preventDefault()
	loginGenerate()
})

ordersBtn.addEventListener('click', e => {
	e.preventDefault()
	hyperOpenCard(hyperOrdersPage)
})
firstPageBtn.addEventListener('click', e => {
	e.preventDefault()
	hyperOpenCard(hyperFirstPage)
})
itemsBtn.addEventListener('click', e => {
	e.preventDefault()
	hyperOpenCard(hyperProductsPage)
})
addProducts.addEventListener('click', e => {
	e.preventDefault()
	openAddPanel(addProductPage)
})
closeAddItemBtn.addEventListener('click', e => {
	e.preventDefault()
	closeAddPanel(addProductPage)
})

addItem.addEventListener('click', e => {
	e.preventDefault()
	checkLength(nameItemInput, nameProductDiv)
	checkLength(priceProductInput, namePriceDiv)
	addItemToList()
})

editClosePage.addEventListener('click', () => {
	editItemPage.classList.remove('opacity-on')
	editItemPage.style.display = 'none'
	editNameItemInput.value = ''
	editPriceItemInput.value = ''
})

document.addEventListener('DOMContentLoaded', mainFunctions)
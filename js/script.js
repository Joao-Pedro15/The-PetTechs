// Firebase DB
var firebaseConfig = {
    apiKey: "AIzaSyB3d9D-qTVi7gcaZepWOFWqmkftDOV8VY0",
    authDomain: "pettechs.firebaseapp.com",
    projectId: "pettechs",
    storageBucket: "pettechs.appspot.com",
    messagingSenderId: "46356828765",
    appId: "1:46356828765:web:2b75d85d5ce0019542f3b4"
}
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const dbClient = 'client'
const dbPet = 'pet'
const dbProduct = 'product'
const dbUsers = 'users'
const dbConsult = 'consult'
const dbSale = 'sale'
const auth = firebase.auth()


// DOM Client
let nameClient = document.getElementById('nameClient')
let emailClient = document.getElementById('emailClient')
let addressClient = document.getElementById('addressClient')
let phoneClient = document.getElementById('phoneClient')

function loading(){
    let content = document.querySelector('.loaded')
    content.style.display = 'flex'
    setTimeout(()=>{
        content.style.display = 'none'
    }, 1200)
}

function registerClient(){
    loading()
    setTimeout(()=>{
        addClient(db, dbClient, nameClient.value, emailClient.value, addressClient.value, phoneClient.value)
        clearClient(nameClient, emailClient, addressClient, phoneClient)
    }, 1200)
}
    


// DOM Pet

let namePet = document.getElementById('namePet')
let animal = document.getElementById('animalPet')
let owner = document.getElementById('ownerPet')
let breed = document.getElementById('breedPet')
let vaccinated = document.getElementById('vaccinated')
let sex

function loadingOwner(){
    db.collection(dbClient).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let client = doc.data()
            owner.innerHTML += `<option value='${client.name}'>${client.name}</option>`
        })
    })
}

function checkVaccination(){
    if(vaccinated.checked){
        vaccinated.value = 'SIM'
    }else{
        vaccinated.value = 'NÃO'
    }

    return vaccinated
}

function checkSex(sex){
    let male = document.getElementById('male')
    let s = sex
    if(male.checked){
        s = 'Macho'
    } else {
        s = 'Fêmea'
    }
    return s
}

function registerPet(){
    loading()
    let vac = checkVaccination()
    let s = checkSex(sex)
    setTimeout(()=>{
        addPet(db, dbPet, namePet.value, animal.value, owner.value, breed.value, s, vac.value)
        clearPet(namePet, animal, owner, breed)
    }, 1200)
}



// DOM Product

let description = document.getElementById('description')
let brand = document.getElementById('brand')
let price = document.getElementById('price')
let category = document.getElementById('category')
let unit = document.getElementById('unit')

function registerProduct(){
    loading()
    setTimeout(()=>{
        addProduct(db, dbProduct, description.value, brand.value, price.value, category.value, unit.value)
        clearProduct(description,brand, price, category, unit)
    },1200) 
}



// DOM newUser

let password = document.getElementById('password')
let email = document.getElementById('email')

function registerNewUser(){
    loading()
    setTimeout(()=>{
        newUser(auth, email.value, password.value)
        clearEmailAndPassword(email, password)
    }, 1200)
}

// DOM Login

let emailLogger = document.getElementById('emailLogger')
let pass = document.getElementById('pass')

function logger(){
    loading()
    setTimeout(()=>{
        login(auth, emailLogger.value, pass.value)
        clearEmailAndPassword(emailLogger, pass)
    }, 1200)

}


function exitLogin(){
    logout(auth)
}



// ClearInputs

function clearClient(name, email, address, phone){
    name.value = ''
    email.value = ''
    address.value = ''
    phone.value = ''
}

function clearProduct(description, brand, price, category, unit){
    description.value = ''
    brand.value = ''
    price.value = ''
    category.value = 'Categoria...'
    unit.value = '' 
}

function clearPet(namePet, animal, owner, breed){
    namePet.value = ''
    animal.value = 'Animal...'
    owner.value = 'Dono...'
    breed.value = ''
}

function clearEmailAndPassword(email, password){
    email.value = ''
    password.value = ''
}




// DOM Edit Client

let nameEditClient = document.getElementById('nameEditClient')
let emailEditClient = document.getElementById('emailEditClient')
let addressEditClient = document.getElementById('addressEditClient')
let phoneEditClient = document.getElementById('phoneEditClient')


// DOM Edit Pet

let nameEditPet = document.getElementById('nameEditPet')
let animalEditPet = document.getElementById('animalEditPet')
let ownerEditPet = document.getElementById('ownerEditPet')
let breedEditPet = document.getElementById('breedEditPet')
let vacEdit = document.getElementById('editVaccinated')
let sexEdit

function checkEditSex(sex){
    let male = document.getElementById('editMale')
    let s = sex
    if(male.checked){
        s == 'Macho'
    }else{
        s = 'Fêmea'
    }
    return s
}

function checkEditVac(){
    if(vacEdit.checked){
        vacEdit.value = 'SIM'
    }else{
        vacEdit.value = 'NÃO'
    }
    return vacEdit
}

// DOM Edit Product

let editDescription = document.getElementById('editDescription')
let editBrand = document.getElementById('editBrand')
let editPrice = document.getElementById('editPrice')
let editCategory = document.getElementById('editCategory')
let editUnit = document.getElementById('editUnit')


// DOM Edit Consult

let consultEditOwner = document.getElementById('consultEditOwner')
let consultEditAnimal = document.getElementById('consultEditAnimal')
let inputEditDate = document.getElementById('inputEditDate')
let inputEditTime = document.getElementById('inputEditTime')
let bathEdit = document.getElementById('checkEditBath')
let groomEdit = document.getElementById('checkEditGroom')
let hydrationEdit = document.getElementById('checkEditHydration')
let nailEdit = document.getElementById('checkEditNail')

function checkEditBath(){
    if(bathEdit.checked){
        bathEdit.value = "SIM"
    }else{
        bathEdit.value = "NÃO"
    }
    return bathEdit
}
function checkEditGroom(){
    if(groomEdit.checked){
        groomEdit.value = "SIM"
    }else{
        groomEdit.value = "NÃO"
    }
    return groomEdit
}
function checkEditHydration(){
    if(hydrationEdit.checked){
        hydrationEdit.value = "SIM"
    }else{
        hydrationEdit.value = "NÃO"
    }
    return hydrationEdit
}
function checkEditNail(){
    if(nailEdit.checked){
        nailEdit.value = "SIM"
    }else{
        nailEdit.value = "NÃO"
    }
    return nailEdit
}

function getIdInLocalStorage(){
    let id = JSON.parse(localStorage.getItem('petTechs'))
    return id
}

// Functions Atualize and Delete 

function atualizeClient(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        editClient(db, dbClient, id, nameEditClient.value, emailEditClient.value, addressEditClient.value, phoneEditClient.value)
        clearClient(nameEditClient, emailEditClient, addressEditClient, phoneEditClient)
    }, 1200)
}
function atualizePet(){
    let sex = checkEditSex(sexEdit)
    let vac = checkEditVac()
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        editPet(db, dbPet, id, nameEditPet.value, animalEditPet.value, ownerEditPet.value, breedEditPet.value, sex, vac.value)
        clearPet(nameEditPet, animalEditPet, ownerEditPet, breedEditPet)
    }, 1200)
}
function atualizeProduct(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        editProduct(db, dbProduct, id, editDescription.value, editBrand.value, editPrice.value, editCategory.value, editUnit.value)
        clearProduct(editDescription, editBrand, editPrice, editCategory, editUnit)
    }, 1200)
}
function atualizeConsult(){
    let editBath = checkEditBath()
    let editGroom = checkEditGroom()
    let editHydration = checkEditHydration()
    let editNail = checkEditNail()
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        editConsult(db, dbConsult, id, consultEditOwner.value, consultEditAnimal.value, inputEditDate.value, inputEditTime.value, editBath.value, editGroom.value, editHydration.value, editNail.value)
    }, 1200)
}

function removeClient(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        deleteClient(db, dbClient, id)
        clearClient(nameEditClient, emailEditClient, addressEditClient, phoneEditClient)
    }, 1200)
}
function removePet(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        deletePet(db, dbPet, id)
        clearPet(nameEditPet, animalEditPet, ownerEditPet, breedEditPet)
    }, 1200)
}
function removeProduct(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        deleteProduct(db, dbProduct, id)
        clearProduct(editDescription, editBrand, editPrice, editCategory, editUnit)
    })
}
function removeConsult(){
    setTimeout(()=>{
        loading()
        let id = getIdInLocalStorage()
        deleteConsult(db, dbConsult, id)
    })
}





// loadingEdits
// functions performed on their respective html pages

function loadingEditClients(){
    let id = getIdInLocalStorage()
    db.collection(dbClient).doc(id).get().then(doc=>{
        let client = doc.data()
        nameEditClient.value = client.name
        emailEditClient.value = client.email
        addressEditClient.value = client.address
        phoneEditClient.value = client.phone
    })
}
function loadingEditPets(){
    let id = getIdInLocalStorage()
    db.collection(dbPet).doc(id).get().then(doc=>{
        let pet = doc.data()
        nameEditPet.value = pet.name
        breedEditPet.value = pet.breed
        animalEditPet.value = pet.animal
        let vac = pet.vaccinated
        let sex = pet.sex
        let editMale = document.getElementById('editMale')
        if(vac == 'SIM'){
            vacEdit.checked = true
        }
        if(sex == 'Macho'){
            editMale.checked = true
        }else{
            editFemale.checked = true
        }
    })
}
function loadingEditProducts(){
    let id = getIdInLocalStorage()
    db.collection(dbProduct).doc(id).get().then(doc=>{
        let product = doc.data()
        editDescription.value = product.description
        editBrand.value = product.brand
        editPrice.value = product.value
        editUnit.value = product.unit
    })
        
}
function loadingEditConsult(){
    let id = getIdInLocalStorage()
    db.collection(dbConsult).doc(id).get().then(doc=>{
        let consult = doc.data()
        console.log(consult)
        consultEditOwner.value = consult.owner
        consultEditAnimal.value = consult.pet
        inputEditDate.value = consult.date
        inputEditTime.value = consult.time
        if(consult.bath == 'SIM'){
            bathEdit.checked = true
        }
        if(consult.groom == 'SIM'){
            groomEdit.checked = true
        }
        if(consult.hydration == 'SIM'){
            hydrationEdit.checked = true
        }
        if(consult.nail == 'SIM'){
            nailEdit.checked = true
        }
    })
}
function loadingOwnerEdit(){
    db.collection(dbClient).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let client = doc.data()
            ownerEditPet.innerHTML += `<option value='${client.name}'>${client.name}</option>`
        })
    })
}



// Load data into Tables

function loadingClients(db, dbClient){
    db.collection(dbClient).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let clients = doc.data()
            let id = doc.id
            dataClients(id, clients.name, clients.email, clients.address, clients.phone)
        })
    })
}
function loadingPets(db, dbPet){
    db.collection(dbPet).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let pets = doc.data()
            let id = doc.id
            dataPets(id, pets.name, pets.animal, pets.owner, pets.breed, pets.sex, pets.vaccinated)
        })
    })
}
function loadingProducts(db, dbProduct){
    db.collection(dbProduct).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let products = doc.data()
            let id = doc.id
            dataProducts(id, products.description, products.brand, products.value, products.category, products.unit)
        })
    })
}
function loadingConsults(db, dbConsult){
    db.collection(dbConsult).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let consults = doc.data()
            let id = doc.id
            dataConsults(id, consults.owner, consults.pet, consults.date, consults.time, consults.bath, consults.groom, consults.hydration, consults.nail)
        })
    })
}
function loadingSales(){
    db.collection(dbSale).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let sales = doc.data()
            let id = doc.id
            dataSales(id, sales.date, sales.time, sales.price, sales.paid, sales.change)
        })
    })
    loadingDataModal()
}
function loadingTableItemsInSale(db, dbProduct){
    db.collection(dbProduct).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let items = doc.data()
            dataTableItemsInSale(items.description, items.brand, items.value, items.category, items.unit)
        })
    })
}

function loadingDataModal(){
    db.collection(dbSale).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let sales = doc.data()
            let id = doc.id
            for(let i = 0; i < sales.items.length; i++){
                createModal(id, sales.items[i].desc, sales.items[i].price, sales.items[i].qtd)
            }
        })
    })
}


loadingClients(db, dbClient)
loadingPets(db, dbPet)
loadingProducts(db, dbProduct)
loadingConsults(db, dbConsult)
loadingSales()
loadingTableItemsInSale(db, dbProduct)


// Search clients

function searchClient(){
    let select = document.getElementById('selectClient')
    let input = document.getElementById('inputSearchClient')
    $('#tableClient').find('tbody').find('tr').remove()
    if(input.value == ''){
        loadingClients(db, dbClient)
    }else{
        if(select.value == 'nome'){
            searchNameClient(db, dbClient, input.value)
        }
        if(select.value == 'email'){
            searchEmailClient(db, dbClient, input.value)
        }
        if(select.value == 'endereco'){
            searchAddressClient(db, dbClient, input.value)
        }
        if(select.value == 'telefone'){
            searchPhoneClient(db, dbClient, input.value)
        }
    }
}

function searchPet(){
    let select = document.getElementById('selectPet')
    let input = document.getElementById('inputSearchPet')
    $('#tablePet').find('tbody').find('tr').remove()
    if(input.value == ''){
        loadingPets(db, dbPet)
    }else{
        if(select.value == 'nomePet'){
            searchNamePet(db, dbPet, input.value)
        }
        if(select.value == 'animal'){
            searchAnimalPet(db, dbPet, input.value)
        }
        if(select.value == 'dono'){
            searchOwnerPet(db, dbPet, input.value)
        }
    }
}

function searchProduct(){
    let select = document.getElementById('selectProduct')
    let input = document.getElementById('inputSearchProduct')
    $('#tableProduct').find('tbody').find('tr').remove()
    if(input.value == ''){
        loadingProducts(db, dbProduct)
    }else{
        if(select.value == 'descricao'){
            searchDescProduct(db, dbProduct, input.value)
        }
        if(select.value == 'marca'){
            searchBrandProduct(db, dbProduct, input.value)
        }
        if(select.value == 'categoria'){
            searchCategoryProduct(db, dbProduct, input.value)
        }
    }
}

function searchConsult(){
    let select = document.getElementById('selectConsult')
    let input = document.getElementById('inputSearchConsult')
    $('#tableConsult').find('tbody').find('tr').remove()
    if(input.value == ''){
        loadingConsults(db, dbConsult)
    }else{
        if(select.value == 'dono'){
            searchOwnerConsult(db, dbConsult, input.value)
        }
        if(select.value == 'pet'){
            searchPetConsult(db, dbConsult, input.value)
        }
        if(select.value == 'data'){
            searchDateConsult(db, dbConsult, input.value)
        }
    }
}

function searchSale(){
    let select = document.getElementById('selectSale')
    let input = document.getElementById('inputSearchSale')
    $('#tableSale').find('tbody').find('tr').remove()
    if(input.value == ''){
        loadingSales()
    }else{
        if(select.value == 'data'){
            searchDateSale(db, dbSale, input.value)
        }
        if(select.value == 'hora'){
            searchTimeSale(db, dbSale, input.value)
        }
    }
}





// DOM Consult

let consultOwner = document.getElementById('consultOwner')
let consultAnimal = document.getElementById('consultAnimal')
let inputDate = document.getElementById('inputDate')
let inputTime = document.getElementById('inputTime')
let bath = document.getElementById('checkBath')
let groom = document.getElementById('checkGroom')
let hydration = document.getElementById('checkHydration')
let nail = document.getElementById('checkNail')

function checkBath(){
    if(bath.checked){
        bath.value = "SIM"
    }else{
        bath.value = "NÃO"
    }
    return bath
}
function checkGroom(){
    if(groom.checked){
        groom.value = "SIM"
    }else{
        groom.value = "NÃO"
    }
    return groom
}
function checkHydration(){
    if(hydration.checked){
        hydration.value = "SIM"
    }else{
        hydration.value = "NÃO"
    }
    return hydration
}
function checkNail(){
    if(nail.checked){
        nail.value = "SIM"
    }else{
        nail.value = "NÃO"
    }
    return nail
}
function registerConsult(){
    loading()
    let newBath = checkBath()
    let newGroom = checkGroom()
    let newHydration = checkHydration()
    let newNail = checkNail()
    setTimeout(()=>{
        addConsult(db, dbConsult, consultOwner.value, consultAnimal.value, inputDate.value, inputTime.value, newBath.value, newGroom.value, newHydration.value, newNail.value)
    }, 1200)
}






// loading Consult

function loadConsultOwner(){
    db.collection(dbClient).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let client = doc.data()
            consultOwner.innerHTML += `<option value='${client.name}'>${client.name}</option>`
        })
    })
}

function loadConsultAnimal(){
    let owner = consultOwner.value
    if(owner == 'Dono...'){
    }else{
        $('#consultAnimal').find('option').remove()
        db.collection(dbPet).where('owner', '==', owner).get().then(snapshot=>{
            snapshot.forEach(doc=>{
                let pet = doc.data()
                $('#consultAnimal').append(`<option value='${pet.name}'>${pet.name}</option>`)
            })
        })
    } 
}

function clickConsultOwner(){
    $('#consultAnimal').append(`<option selected disabled>Animal...</option>`)
}



function loadEditConsultOwner(){
    db.collection(dbClient).onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            let client = doc.data()
            consultEditOwner.innerHTML += `<option value='${client.name}'>${client.name}</option>`
        })
    })
}

function loadEditConsultAnimal(){
    let owner = consultEditOwner.value
    if(owner == 'Dono...'){
    }else{
        $('#consultEditAnimal').find('option').remove()
        db.collection(dbPet).where('owner', '==', owner).get().then(snapshot=>{
            snapshot.forEach(doc=>{
                let pet = doc.data()
                $('#consultEditAnimal').append(`<option value='${pet.name}'>${pet.name}</option>`)
            })
        })
    } 
}

function clickEditConsultOwner(){
    $('#consultEditAnimal').append(`<option selected disabled>Animal...</option>`)
}


// DOM Sale

let priceItems = document.getElementById('priceItems')
let paid = document.getElementById('paid')
let change = document.getElementById('change')
let listItems = []

function getPricesItems(){
    let listPricesItems = []
    let items = ($('#tableListItems').find('tbody').find('tr'))
    for(let i = 0; items.length > i; i++){
        let price = (items[i].children[2].firstChild.data)
        let priceFormat = parseFloat(price.substring(2).replace(',', '.'))
        listPricesItems.push(priceFormat)
    }
    return listPricesItems 
}

function calcPrice(){
    let items = getPricesItems()
    let total = modelCalcPrice(items)
    let price = String(total).replace('.', ',')
    priceItems.innerText = 'R$' + price 
    calcChange()
}

function calcChange(){
    let price = priceItems.firstChild.data
    let priceFormat = parseFloat(price.substring(2).replace(',', '. '))
    let calc = paid.value-priceFormat
    change.innerText = calc
}

function pushListItems(){
    listItems = []
    let items = ($('#tableListItems').find('tbody').find('tr'))
    for(let i = 0; items.length > i; i++){
        let desc = items[i].children[0].firstChild.data
        let price = items[i].children[2].firstChild.data
        let qtd = items[i].children[1].children[0].children[1].firstChild.data
        let product = {desc, price, qtd}
        
        listItems.push(product)
    }
    return listItems
}

function getDateNow(){
    let date = new Date
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    if(month<=9){month = '0'+month}
    let dateNow = day+'/'+month +'/'+year
    return dateNow
}

function getTimeNow(){
    let date = new Date
    let min = date.getMinutes()
    let hours = date.getHours()
    let timeNow = hours+':'+min
    return timeNow
}

function clearSale(){

}

function finishSale(){
    let items = pushListItems()
    let date = getDateNow()
    let time = getTimeNow()
    let price = priceItems.firstChild.data
    change = change.firstChild.data
    loading()
    setTimeout(()=>{
        addSale(db, dbSale, date, time, items, price, paid.value, change)
    }, 1200)
}
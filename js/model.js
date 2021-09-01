function login(auth, email, pass){
    if(email == '' || pass == ''){
        alert("Preencha todos os campos!")
    } else {
        auth.signInWithEmailAndPassword(email, pass)
        .then(user=>{
            alert('Logado com sucesso!')
            window.location.href = './main.html'
        }).catch(err=>{
            alert(err.message)
        })
    }
}

function logout(auth){
    auth.signOut().then(()=>{
        alert('Usuário deslogado!')
    }).catch(error=>{
        console.log(error)
    })
}

function newUser(auth, email, password){
    if(email == '' || password == ''){
        alert('Preencha todos os campos!')
    } else {
        auth.createUserWithEmailAndPassword(email, password)
        .then(user =>{
            alert('Usuário cadastrado!')
            window.location.href = './index.html'
        }).catch(err =>{
            alert(err.message)
        })
    }
}

function addClient(db, dbClient, name, email, address, phone){
    if (name == "" || email == "" || address == "" || phone == ""){
        alert('Preencha todos os campos!')
    } else {
        db.collection(dbClient).add({
            name,
            email,
            address,
            phone
        }).then(()=>{
            alert("Cliente Cadastrado!")
        }).catch(err=>{
            alert(err.message)
        })
    }
}

function addPet(db, dbPet, name, animal, owner, breed, sex, vaccinated){
    if(name == '' || owner == 'Dono...' || animal == 'Animal...' || breed == '') {
        alert('Preencha todos os campos!')
    } else {
        db.collection(dbPet).add({
            name,
            animal,
            owner,
            breed,
            sex,
            vaccinated
        }).then(()=>{
            alert("Pet Cadastrado!")
        }).catch(err=>{
            alert(err.message)
        })
    }
}

function addProduct(db, dbProduct, description, brand, value, category, unit){
    if(description == '' || brand == '' || value == '' || category == 'Categoria...' || unit == '') {
        alert('Preencha todos os campos!')
    } else {
        db.collection(dbProduct).add({
            description,
            brand,
            value,
            category,
            unit
        }).then(()=>{
            alert("Produto Cadastrado!")
        }).catch(err=>{
            alert(err.message)
        })
    }
}

function addConsult(db, dbConsult, owner, pet, date, time, bath, groom, hydration, nail){
    if(owner == 'Dono...' || pet == 'Animal...' || date == '' || time == ''){
        alert('Preencha todos os campos!')
    } else {
        db.collection(dbConsult).add({
            owner,
            pet,
            date,
            time,
            bath,
            groom,
            hydration,
            nail
        }).then(()=>{
            alert('Consulta marcada!')
        }).catch(err=>{
             alert(err.message)
        })
    }
}

function addSale(db, dbSale, date, time, items, price, paid, change){
    if(items=='' || price=='' || change ==''){
        alert('Preecha todos os campos!')
    }else{
        db.collection(dbSale).add({
            date,
            time,
            items,
            price,
            paid,
            change
        }).then(()=>{
            alert('Venda efetuada com sucesso!')
        }).catch(err=>{
            alert(err.message)
        })
    }
}



function editClient(db, dbClient, id, name, email, address, phone){
    if(name == '' || email == '' || address == '' || phone == ''){
        alert('Preencha todos os campos!')
    }else{
        db.collection(dbClient).doc(id).update({
            name,
            email,
            address,
            phone
        }).then(()=>{
            alert("Cliente Atualizado!")
            window.location.href = '../main.html'
        }).catch(err=>{
            alert(err.message)
        })
    }
    
}

function editPet(db, dbPet, id, name, animal, owner, breed, sex, vaccinated){
    if(name == '' || animal == 'Animal...' || owner == 'Dono...' || breed == ''){
        alert('Preencha todos os campos!')
    }else {
        db.collection(dbPet).doc(id).update({
            name,
            animal,
            owner,
            breed,
            sex,
            vaccinated
        }).then(()=>{
            alert("Pet Atualizado!")
            window.location.href = '../main.html'
        }).catch(err=>{
            alert(err.message)
        })
    }
    
}

function editProduct(db, dbProduct, id, description, brand, value, category, unit){
    if(description == '' || brand == '' || value == '' || category == 'Categoria...' || unit == ''){
        alert('Preencha todos os campos!')
    }else {
        db.collection(dbProduct).doc(id).update({
            description,
            brand,
            value,
            category,
            unit
        }).then(()=>{
            alert("Produto Atualizado!")
            window.location.href = '../main.html'
        }).catch(err=>{
            alert(err.message)
        })
    }
}

function editConsult(db, dbConsult, id, owner, pet, date, time, bath, groom, hydration, nail){
    if(owner == 'Dono...' || owner == '' || pet == 'Animal...' || pet == '' || date == '' || time == ''){
        alert('Preencha todos os campos!')
    }else{
        db.collection(dbConsult).doc(id).update({
            owner,
            pet,
            date,
            time,
            bath,
            groom,
            hydration,
            nail
        }).then(()=>{
            alert('Consulta modificada!')
            window.location.href = '../main.html'
        }).catch(err=>{
            alert(err.message)
        })
    }
}


function deleteClient(db, dbClient, id){
    db.collection(dbClient).doc(id).delete().then(()=>{
        alert("Cliente Excluído!")
        window.location.href = '../main.html'
    }).catch(err=>{
        alert(err.message)
    })
}

function deletePet(db, dbPet, id){
    db.collection(dbPet).doc(id).delete().then(()=>{
        alert("Pet Excluído!")
        window.location.href = '../main.html'
    }).catch(err=>{
        alert(err.message)
    })
}

function deleteProduct(db, dbProduct, id){
    db.collection(dbProduct).doc(id).delete().then(()=>{
        alert("Produto Excluído!")
        window.location.href = '../main.html'
    }).catch(err=>{
        alert(err.message)
    })
}

function deleteConsult(db, dbConsult, id){
    db.collection(dbConsult).doc(id).delete().then(()=>{
        alert("Consulta Excluída!")
        window.location.href = '../main.html'
    }).catch(err=>{
        alert(err.message)
    })
}

function dataClients(id, name, email, address, phone){
    let tr = document.createElement('tr')
    tr.id = id
    $(tr).click(idLocalStorage)

    let thName = document.createElement('th')
    thName.innerText = name

    let thEmail = document.createElement('th')
    thEmail.innerHTML = email
    
    let thAdress = document.createElement('th')
    thAdress.innerText = address

    let thPhone = document.createElement('th')
    thPhone.innerText = phone

    tr.appendChild(thName)
    tr.appendChild(thEmail)
    tr.appendChild(thAdress)
    tr.appendChild(thPhone)


    $('#tableClient').find('tbody').prepend(tr)

}

function dataPets(id, name, animal, owner, breed, sex, vaccinated){
    let tr = document.createElement('tr')
    tr.id = id
    $(tr).click(idLocalStorage)

    let thName = document.createElement('th')    
    let thAnimal = document.createElement('th')
    let thOwner = document.createElement('th')
    let thBreed = document.createElement('th')
    let thSex = document.createElement('th')
    let thVac = document.createElement('th')

    thName.innerText = name
    thAnimal.innerText = animal
    thOwner.innerText = owner
    thBreed.innerText = breed
    thSex.innerText = sex
    thVac.innerText = vaccinated

    tr.appendChild(thName)
    tr.appendChild(thAnimal)
    tr.appendChild(thOwner)
    tr.appendChild(thBreed)
    tr.appendChild(thSex)
    tr.appendChild(thVac)

    $('#tablePet').find('tbody').prepend(tr) 
}

function dataProducts(id, description, brand, value, category, unit){
    let tr = document.createElement('tr')
    tr.id = id
    $(tr).click(idLocalStorage)

    let thDesc = document.createElement('th')
    let thBrand = document.createElement('th')
    let thValue = document.createElement('th')
    let thCategory = document.createElement('th')
    let thUnit = document.createElement('th')

    thDesc.innerText = description
    thBrand.innerText = brand
    thValue.innerText = 'R$'+value
    thCategory.innerText = category
    thUnit.innerText = unit

    tr.appendChild(thDesc)
    tr.appendChild(thBrand)
    tr.appendChild(thValue)
    tr.appendChild(thCategory)
    tr.appendChild(thUnit)

    $('#tableProduct').find('tbody').prepend(tr)
}

function dataConsults(id, owner, pet, date, time, bath, groom, hydration, nail){
    let tr = document.createElement('tr')
    tr.id = id
    $(tr).click(idLocalStorage)

    let thOwner = document.createElement('th')
    let thPet = document.createElement('th')
    let thDate = document.createElement('th')
    let thTime = document.createElement('th')
    let thBath = document.createElement('th')
    let thGroom = document.createElement('th')
    let thHydration = document.createElement('th')
    let thNail = document.createElement('th')

    thOwner.innerText = owner
    thPet.innerText = pet
    thDate.innerText = date
    thTime.innerText = time
    thBath.innerText = bath
    thGroom.innerText = groom
    thHydration.innerText = hydration
    thNail.innerText = nail

    tr.appendChild(thOwner)
    tr.appendChild(thPet)
    tr.appendChild(thDate)
    tr.appendChild(thTime)
    tr.appendChild(thBath)
    tr.appendChild(thGroom)
    tr.appendChild(thHydration)
    tr.appendChild(thNail)

    $('#tableConsult').find('tbody').prepend(tr)
}

function dataSales(id, date, time, price, paid, change){
    let tr = document.createElement('tr')
    tr.id = id

    let thDate = document.createElement('th')
    let thTime = document.createElement('th')
    let thItems = document.createElement('th')
    let thPrice = document.createElement('th')
    let thPaid = document.createElement('th')
    let thChange = document.createElement('th')


    let btnModal = document.createElement('button')
    btnModal.classList.add('btn', 'btn-sm', 'btn-secondary', 'font-weight-bold')
    btnModal.setAttribute('data-toggle', 'modal')
    btnModal.setAttribute('data-target', '.m'+id)
    btnModal.innerText = 'Ver Mais'

    // O modal receberá uma classe de nome do  ID do tr

    thDate.innerText = date
    thTime.innerText = time
    thItems.appendChild(btnModal)
    thPrice.innerText = price
    thPaid.innerText = 'R$'+paid
    thChange.innerText = 'R$'+change

    tr.appendChild(thDate)
    tr.appendChild(thTime)
    tr.appendChild(thItems)
    tr.appendChild(thPrice)
    tr.appendChild(thPaid)
    tr.appendChild(thChange)

    $('#tableSale').find('tbody').prepend(tr)

}

function createModal(id, product, price, qtd){
    let modal = document.createElement('div')
    modal.classList.add('modal', 'modal-dark', 'fade', 'm'+id)

    let modalDialog = document.createElement('div')
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable', 'modal-sm')

    let modalContent = document.createElement('div')
    modalContent.classList.add('modal-content', 'align-items-center', 'justify-content-center', 'bg-dark', 'text-light')

    let modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header')

    let h2 = document.createElement('h2')
    h2.classList.add('display-5', 'text-light')
    h2.innerText = 'Items da compra'
    modalHeader.appendChild(h2)

    let modalBody = document.createElement('div')
    modalBody.classList.add('modal-body')

    let table = document.createElement('table')
    table.classList.add('table', 'table-lg', 'table-hover', 'table-dark', 'table-striped')

    let thead = document.createElement('thead')
    thead.classList.add('bg-primary', 'text-light')

    let trHeader = document.createElement('tr')
    let thProduct = document.createElement('th')
    let thPrice = document.createElement('th')
    let thQtd = document.createElement('th')

    let tbody = document.createElement('tbody')
    let trBody = document.createElement('tr')

    let thProduct2 = document.createElement('th')
    let thPrice2 = document.createElement('th')
    let thQtd2 = document.createElement('th')
    thQtd2.classList.add('text-right')

    thProduct.innerText = 'Produto'
    thPrice.innerText = 'Valor'
    thQtd.innerText = 'Quantidade'

    thProduct2.innerText = product
    thPrice2.innerText = price
    thQtd2.innerText = qtd

    thead.appendChild(trHeader)
    trHeader.appendChild(thProduct)
    trHeader.appendChild(thPrice)
    trHeader.appendChild(thQtd)

    tbody.appendChild(trBody)
    trBody.appendChild(thProduct2)
    trBody.appendChild(thPrice2)
    trBody.appendChild(thQtd2)

    table.appendChild(thead)
    table.appendChild(tbody)

    modalBody.appendChild(table)

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)

    modalDialog.appendChild(modalContent)

    modal.appendChild(modalDialog)

    $('#vendas').find('.container').append(modal)
}

function dataTableItemsInSale(description, brand, value, category, unit){
    let tr = document.createElement('tr')
    tr.onclick = function(element){
        let desc = element.target.parentElement.children[0].firstChild.data
        let val = element.target.parentElement.children[2].firstChild.data
        addItemInTable(desc, val)
        calcPrice()
    }

    let thDesc = document.createElement('th')
    let thBrand = document.createElement('th')
    let thValue = document.createElement('th')
    let thCategory = document.createElement('th')
    let thUnit = document.createElement('th')
    thUnit.classList.add('text-right')

    thDesc.innerText = description
    thBrand.innerText = brand
    thValue.innerText = 'R$'+value
    thCategory.innerText = category
    thUnit.innerText = unit

    tr.appendChild(thDesc)
    tr.appendChild(thBrand)
    tr.appendChild(thValue)
    tr.appendChild(thCategory)
    tr.appendChild(thUnit)

    $('#tableListProducts').find('tbody').prepend(tr)
}

function addItemInTable(desc, value){
    let tr = document.createElement('tr')

    let thDesc = document.createElement('th')
    let thValue = document.createElement('th')
    let thInput = document.createElement('th')
    let thIcon = document.createElement('th')
    let i = document.createElement('i')
    i.classList.add('fas')
    i.classList.add('fa-trash-alt')
    $(i).click(removeItemInTable)

    
    let divInput = document.createElement('div')
    divInput.classList.add('inputStyle')

    let arrowLeft = document.createElement('i')
    arrowLeft.classList.add('fas')
    arrowLeft.classList.add('fa-chevron-left')
    arrowLeft.onclick = decrease

    let span = document.createElement('span')
    span.innerText = 1

    let arrowRight = document.createElement('i')
    arrowRight.classList.add('fas')
    arrowRight.classList.add('fa-chevron-right')
    arrowRight.onclick = increase

    divInput.appendChild(arrowLeft)
    divInput.appendChild(span)
    divInput.appendChild(arrowRight)    
    

    thDesc.innerText = desc
    thValue.innerText = value
    thInput.appendChild(divInput)
    thIcon.appendChild(i)

    tr.appendChild(thDesc)
    tr.appendChild(thInput)
    tr.appendChild(thValue)
    tr.appendChild(thIcon)

    $('#tableListItems').find('tbody').prepend(tr)

}

function removeItemInTable(element){
    let tr = element.target.parentElement.parentElement
    $(tr).remove()
    calcPrice()
}

function modelCalcPrice(arrayItems){
    if(arrayItems.length == 0){
        return 0 
    }else{
        const total = arrayItems.reduce((total, currentElement) => total + currentElement)
        return total
    }
}



function increase(element){
    let span = $(element.target).prev()[0]
    if(span.firstChild.data <=9){
        span.innerText++
        increasePrice(element.target, span)
        calcPrice()
    }
 
    
}
function decrease(element){
   let span = $(element.target).nextUntil()[0]
   if(span.firstChild.data >=2){
        span.innerText--
        decreasePrice(element.target, span)
        calcPrice()
    }
}

function increasePrice(element, span){
    let tr = element.parentElement.parentElement.parentElement
    let price = $(tr).children()[2]
    let priceFormat = parseFloat(price.firstChild.data.substring(2).replace(',', '.'))
    let inputValue = span.firstChild.data
    let calc = priceFormat / (inputValue - 1)
    let newPrice = calc * inputValue
    let newPriceFormat = String(newPrice).replace('.', ',')
    price.innerText = 'R$' + newPriceFormat
}

function decreasePrice(element, span){
    let tr = element.parentElement.parentElement.parentElement
    let price = $(tr).children()[2]
    let priceFormat = parseFloat(price.firstChild.data.substring(2).replace(',', '.'))
    let inputValue = parseInt(span.firstChild.data)
    let calc = priceFormat / (inputValue+1)
    let newPrice = priceFormat - calc
    let newPriceFormat = String(newPrice).replace('.', ',')
    price.innerText = 'R$' + newPriceFormat
}

function openEdit(table){
    if(table == 'tableClient'){
        window.location.href = './edit/editClient.html'
    }
    if(table == 'tablePet'){
        window.location.href = './edit/editPet.html'
    }
    if(table == 'tableProduct'){
        window.location.href = './edit/editProduct.html'
    }
    if(table == 'tableConsult'){
        window.location.href = './edit/editConsult.html'
    }
}


function idLocalStorage(element){
    let id = element.target.parentElement.id
    localStorage.setItem('petTechs', JSON.stringify(id))
    let table = element.target.parentElement.parentElement.parentElement.id
    openEdit(table)
}



// Search Clients

function searchNameClient(db, dbClient, input){
    db.collection(dbClient).where('name', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let clients = doc.data()
            let id = doc.id
            dataClients(id, clients.name, clients.email, clients.address, clients.phone)
        })
    })
}

function searchEmailClient(db, dbClient, input){
    db.collection(dbClient).where('email', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let clients = doc.data()
            let id = doc.id
            dataClients(id, clients.name, clients.email, clients.address, clients.phone)
        })
    })
}

function searchAddressClient(db, dbClient, input){
    db.collection(dbClient).where('address', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let clients = doc.data()
            let id = doc.id
            dataClients(id, clients.name, clients.email, clients.address, clients.phone)
        })
    })
}

function searchPhoneClient(db, dbClient, input){
    db.collection(dbClient).where('phone', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let clients = doc.data()
            let id = doc.id
            dataClients(id, clients.name, clients.email, clients.address, clients.phone)
        })
    })
}


// Search Pets

function searchNamePet(db, dbPet, input){
    db.collection(dbPet).where('name', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let pets = doc.data()
            let id = doc.id
            dataPets(id, pets.name, pets.animal, pets.owner, pets.breed, pets.sex, pets.vaccinated)
        })
    })
}

function searchAnimalPet(db, dbPet, input){
    db.collection(dbPet).where('animal', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let pets = doc.data()
            let id = doc.id
            dataPets(id, pets.name, pets.animal, pets.owner, pets.breed, pets.sex, pets.vaccinated)
        })
    })
}

function searchOwnerPet(db, dbPet, input){
    db.collection(dbPet).where('owner', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let pets = doc.data()
            let id = doc.id
            dataPets(id, pets.name, pets.animal, pets.owner, pets.breed, pets.sex, pets.vaccinated)        
        })
    })
}


// Search Products

function searchDescProduct(db, dbProduct, input){
    db.collection(dbProduct).where('description', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let products = doc.data()
            let id = doc.id
            dataProducts(id, products.description, products.brand, products.value, products.category, products.unit)
        })
    })
}

function searchBrandProduct(db, dbProduct, input){
    db.collection(dbProduct).where('brand', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let products = doc.data()
            let id = doc.id
            dataProducts(id, products.description, products.brand, products.value, products.category, products.unit)
        })
    })
}

function searchCategoryProduct(db, dbProduct, input){
    db.collection(dbProduct).where('category', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let products = doc.data()
            let id = doc.id
            dataProducts(id, products.description, products.brand, products.value, products.category, products.unit)
        })
    })
}

// Search Consults

function searchOwnerConsult(db, dbConsult, input){
    db.collection(dbConsult).where('owner',  '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let consults = doc.data()
            let id = doc.id
            dataConsults(id, consults.owner, consults.pet, consults.date, consults.time, consults.bath, consults.groom, consults.hydration, consults.nail)
        })
    })
}

function searchPetConsult(db, dbConsult, input){

    db.collection(dbConsult).where('pet',  '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let consults = doc.data()
            let id = doc.id
            dataConsults(id, consults.owner, consults.pet, consults.date, consults.time, consults.bath, consults.groom, consults.hydration, consults.nail)
        })
    })
}

function searchDateConsult(db, dbConsult, input){
    db.collection(dbConsult).where('date',  '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let consults = doc.data()
            let id = doc.id
            dataConsults(id, consults.owner, consults.pet, consults.date, consults.time, consults.bath, consults.groom, consults.hydration, consults.nail)
        })
    })
}

// Search Sales

function searchDateSale(db, dbSale, input){
    db.collection(dbSale).where('date', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let sales = doc.data()
            let id = doc.id
            dataSales(id, sales.date, sales.time, sales.price, sales.paid, sales.change)
        })
    })
}

function searchTimeSale(db, dbSale, input){
    db.collection(dbSale).where('time', '==', input).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let sales = doc.data()
            let id = doc.id
            dataSales(id, sales.date, sales.time, sales.price, sales.paid, sales.change)
        })
    })
}
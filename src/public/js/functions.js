//=============================================================
function fCadUser(){

    const msgBox = document.getElementById("msg-box")
    const txtName = document.getElementById("txt-name")
    const txtBirth = document.getElementById("txt-birth")
    const txtPhone= document.getElementById("txt-phone")

    const myBody = {
        name: txtName.value,
        birthDate: txtBirth.value,
        phone: txtPhone.value
    }

    let myInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myBody)
    }

    fetch("/users", myInit)
        .then(resp => {
            console.log(resp)
            if (resp.status === 201){
                msgBox.classList.add("visible")
                msgBox.innerHTML = "Usuário Cadastrado com Sucesso!!!"
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }else{
                msgBox.classList.add("visible")
                msgBox.classList.add("error")
                msgBox.innerHTML = "Usuário NÃO Cadastrado!!!" 
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }                        
        })
        .catch(resp => console.log(resp))
}
//=============================================================

//=============================================================
function fCadLoc(){

    const msgBox = document.getElementById("msg-box")
    const txtName = document.getElementById("txt-name")
    const txtSName = document.getElementById("txt-sName")
    const txtDesc= document.getElementById("txt-desc")
    const cbxResp= document.getElementById("cbx-user")


    const myBody = {
        name: txtName.value,
        shortName: txtSName.value,
        description: txtDesc.value,
        responsibleId: parseInt(cbxResp.value)
        // parseInt(cbxResp.value.split("-")[0])
    }

    let myInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myBody)
    }

    fetch("/locations", myInit)
        .then(resp => {
            console.log(resp)
            if (resp.status === 201){
                msgBox.classList.add("visible")
                msgBox.innerHTML = "Local Cadastrado com Sucesso!!!"
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }else{
                msgBox.classList.add("visible")
                msgBox.classList.add("error")
                msgBox.innerHTML = "Local NÃO Cadastrado!!!" 
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }                        
        })
        .catch(resp => console.log(resp))
}
//=============================================================

//=============================================================
function fCadAss(){

    const msgBox = document.getElementById("msg-box")
    const cbxProd = document.getElementById("cbx-prod")
    const cbxLoc = document.getElementById("cbx-loc")
    const txtDate= document.getElementById("txt-date")


    const myBody = {
        productId: parseInt(cbxProd.value),
        locationId: parseInt(cbxLoc.value),
        aquisitionDate: txtDate.value
    }

    let myInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myBody)
    }

    fetch("/assets", myInit)
        .then(resp => {
            console.log(resp)
            if (resp.status === 201){
                msgBox.classList.add("visible")
                msgBox.innerHTML = "Patrimônio Cadastrado com Sucesso!!!"
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }else{
                msgBox.classList.add("visible")
                msgBox.classList.add("error")
                msgBox.innerHTML = "Patrimônio NÃO Cadastrado!!!" 
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }                        
        })
        .catch(resp => console.log(resp))
}
//=============================================================

//=============================================================
function fCadProd(){

    const msgBox = document.getElementById("msg-box")
    const txtName = document.getElementById("txt-name")
    const txtDesc = document.getElementById("txt-desc")

    const myBody = {
        name: txtName.value,
        description: txtDesc.value
    }

    let myInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myBody)
    }

    fetch("/products", myInit)
        .then(resp => {
            console.log(resp)
            if (resp.status === 201){
                msgBox.classList.add("visible")
                msgBox.innerHTML = "Produto Cadastrado com Sucesso!!!"
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }else{
                msgBox.classList.add("visible")
                msgBox.classList.add("error")
                msgBox.innerHTML = "Produto NÃO Cadastrado!!!" 
                setTimeout(() => {
                    msgBox.classList.remove("visible")
                    resetForm()
                }, 4000)
            }                        
        })
        .catch(resp => console.log(resp))
}
//=============================================================

function resetForm(){
    const form = document.getElementById("form")
    form.reset()
}

function listLocations() {
    fetch("/locations")
    .then((resposta)=>resposta.json())
    .then((json)=>{
        var listagemLoc = "<option disabled selected hidden>Selecione um Local</option>\n"
        for (var i = 0; i < json.length; i++) {
            if (json[i].name != "") {
                listagemLoc += "<option value=\"" + json[i]._id + "\">" + json[i]._id + " - " + json[i].name + "</option>\n" 
            }
            else {
                console.log("O Local de id" + json[i]._id + " está com valor vazio!")
            }
        }
        console.log(listagemLoc)
        const cbxUser = document.getElementById("cbx-loc");
        cbxUser.innerHTML = listagemLoc;
    })
}

function listUsers() {
    fetch("/users")
    .then((resposta)=>resposta.json())
    .then((json)=>{
        var listagem = "<option disabled selected hidden>Selecione um Responsável</option>\n"
        for (var i = 0; i < json.length; i++) {
            if (json[i].name != "") {
            listagem += "<option value=\"" + json[i]._id + "\">" + json[i]._id + " - " + json[i].name + "</option>\n" 
            }
            else {
                console.log("O membro de id" + json[i]._id + " está com valor vazio!")
            }
        }
        console.log(listagem)
        const cbxUser = document.getElementById("cbx-user");
        cbxUser.innerHTML = listagem;
    })
}

function listProducts(){
    fetch("/products")
    .then((resposta)=>resposta.json())
    .then((json)=>{
        var listagemProd = "<option disabled selected hidden>Selecione um Produto</option>\n"
        for (var i = 0; i < json.length; i++) {
            if (json[i].name != "") {
            listagemProd += "<option value=\"" + json[i]._id + "\">" + json[i]._id + " - " + json[i].name + "</option>\n" 
            }
            else {
                console.log("O Produto de id" + json[i]._id + " está com valor vazio!")
            }
        }
        console.log(listagemProd)
        const cbxUser = document.getElementById("cbx-prod");
        cbxUser.innerHTML = listagemProd;
    })
}


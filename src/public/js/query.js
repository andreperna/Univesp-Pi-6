//===============================================================
function createTableUsers(){
    const tableUsers = document.getElementById("table-users")

    var tableString = "<tr><th>Id</th><th>Nome</th><th>Data Nascimento</th><th>Telefone</th></tr>"

    fetch("/users")
        .then((users)=> users.json())
        .then((json)=>{
            for (obj of json) {
                tableString += "<tr>"
                for (item in obj){
                    const innerCell = obj[item]
                    tableString += `<td>${innerCell}</td>`
                }
                tableString += "</tr>"
            }
            tableUsers.innerHTML = tableString
        })
}
//===============================================================

//===============================================================
function createTableProducts(){
    const tableProducts = document.getElementById("table-products")

    var tableString = "<tr><th>Id</th><th>Nome</th><th>Descrição</th></tr>"

    fetch("/products")
        .then((products)=> products.json())
        .then((json)=>{
            for (obj of json) {
                tableString += "<tr>"
                for (item in obj){
                    const innerCell = obj[item]
                    tableString += `<td>${innerCell}</td>`
                }
                tableString += "</tr>"
            }
            tableProducts.innerHTML = tableString
        })
}
//===============================================================

//===============================================================
function createTableLocations(){
    const tableLocations = document.getElementById("table-locations")

    var tableString = "<tr><th>Id</th><th>Nome</th><th>Abrev</th><th>Descrição</th><th>Responsavel</th></tr>"

    var listUsers


    fetch("/users")
        .then((users)=> users.json())
        .then((json)=> {
            listUsers = json

            fetch("/locations")
            .then((users)=> users.json())
            .then((json)=>{
                for (obj of json) {
                    tableString += "<tr>"
                    var subst = (listUsers.filter((item)=>item._id == obj.responsibleId))[0].name
                    obj.responsibleId = subst
                    for (item in obj){
                        const innerCell = obj[item]
                        tableString += `<td>${innerCell}</td>`
                    }
                    tableString += "</tr>"
                }
                tableLocations.innerHTML = tableString
            })

        })


}
//===============================================================



//===============================================================
function createTableAssets(){
    const tableAssets = document.getElementById("table-assets")

    var tableString = "<tr><th>Id</th><th>Produto</th><th>Local</th><th>Dt Aquis</th></tr>"

    var listUsers

    // obj.filter((item)=>item.id === 2)[0].name

    fetch("/products")
        .then((products)=> products.json())
        .then((json)=> {
            listProducts = json

            fetch("/locations")
                .then((locations)=> locations.json())
                .then((json)=> {
                listLocations = json

                    fetch("/assets")
                    .then((users)=> users.json())
                    .then((json)=>{
                        for (obj of json) {
                            tableString += "<tr>"
                            var substProduct = (listProducts.filter((item)=>item._id == obj.productId))[0].name
                            var substLocation = (listLocations.filter((item)=>item._id == obj.locationId))[0].name
                            obj.productId = substProduct
                            obj.locationId = substLocation
                            for (item in obj){
                                const innerCell = obj[item]
                                tableString += `<td>${innerCell}</td>`
                            }
                            tableString += "</tr>"
                        }
                        tableAssets.innerHTML = tableString
                    })
                })

        })


}
//===============================================================
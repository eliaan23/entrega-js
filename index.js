const productos = [
    { nombre: "harina", precio: 400 },
    { nombre: "galletitas", precio: 200},
    { nombre: "cerveza", precio: 700},
    { nombre: "leche", precio: 320},
    { nombre: "gaseosa", precio: 250},
];
let carrito = []

let seleccion = prompt("hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert ("a continuacion nuestra lista de productos")
    let todoslosProductos = productos.map (
        (producto) => producto.nombre + "" + producto.precio + "$");
        alert(todoslosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("gracias por venir, hasta pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrtio")
    let precio = 0

    if(producto == "harina" ||  producto == "galletitas"  || producto == "cerveza" || 
    producto == "leche" || producto == "gaseosa"){
        switch(producto) {
            case "harina":
            precio = 400
            break
            case "galletitas":
            precio = 200
            break
            case "cerveza":
            precio = 700
            break
            case "leche":
            precio = 320
            break
            case "gaseosa":
            precio = 250
            break;
            default:
            break;
        }
    let unidades = parseInt(prompt ("cuantas unidades quiere llevar"))

    carrito.push ({producto, unidades, precio})
    console.log(carrito)
} else {
    alert("no tenemos ese producto")
}

    seleccion = prompt("desea seguir comprando??")

    while(seleccion === "no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) =>{ 
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?')
console.log(presupuestoUsuario)

let cantidadPresupuesto
const formulario = document.getElementById('agregarGasto')
const notificacion = document.getElementById('notificacion')

//Clases
class Presupuesto{

    constructor(presupuestoUsuario){
        this.presupuesto = Number(presupuestoUsuario)
        this.restante = Number(presupuestoUsuario)
    }

    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad)
    }
}

class Interfaz{
    insertarPresupuesto(cantidad){
        console.log(cantidad)

        const presupuestoSpan = document.querySelector('span#total')
        const restanteSpan = document.querySelector('span#restante')

        presupuestoSpan.innerHTML = `${cantidad}$`
        restanteSpan.innerHTML = `${cantidad}$`
    }

    agregarGastoLista(nombreGasto, cantidadGasto){
        const gastoListado = document.querySelector('#gastos ul')

        const li = document.createElement('li')
        const span = document.createElement('span')

        li.innerHTML = nombreGasto

        span.classList.add('tag', 'is-primary')
        span.innerText = cantidadGasto

        li.appendChild(span)
        gastoListado.appendChild(li)
    }

    imprimirMensaje(mensaje, tipo){
        const texto = document.getElementById('mensaje')
        notificacion.classList.add(tipo)
        texto.innerText = mensaje
        notificacion.style.display = 'block'
    }
 
    presupuestoRestante(cantidad){
        const restante = document.getElementById('restante')
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)
        restante.innerHTML = `${presupuestoRestanteUsuario}`

        
         // Boton Enviar
        if(document.getElementById('restante') <= 0){
            botonEnviar.disabled = true
            console.log('restante')
        }else{
            botonEnviar.disabled = false
        }
    }

    calcularPorcentaje(_cantidadGasto, _total){  
        const cantGasto = document.getElementById('cantidad').value
        const total = presupuestoUsuario
        
        const ui = new Interfaz()

        if((cantGasto / total) >= 0.7){
            ui.imprimirMensaje('Gasto agregado correctamente', 'is-success')
        }if((cantGasto / total) <= 0.39){
            ui.imprimirMensaje('Gasto agregado correctamente', 'is-danger')
        }else{
            ui.imprimirMensaje('Gasto agregado correctamente', 'is-warning')
        }
    }
    
}

//Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario == null || presupuestoUsuario == ''){
        window.location.reload()
    }else{
        console.log('Agregado correctamente')
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
        console.log(cantidadPresupuesto)

        const ui = new Interfaz()
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const nombreGasto = document.getElementById('gasto').value
    const cantidadGasto = document.getElementById('cantidad').value
    

    const ui = new Interfaz()

    if(nombreGasto == '' || cantidadGasto == ''){
        ui.imprimirMensaje('Debe ingresar informacion', 'is-danger')
    }else{
        ui.imprimirMensaje('Gasto agregado correctamente', 'is-success')
        ui.agregarGastoLista(nombreGasto, cantidadGasto)
        ui.presupuestoRestante(cantidadGasto)
    }


   
})

// 2da Evaluacion
// Limitar el gasto  >> boton disabled  cuando el monto llegue a cero
// 2do. 
// Notificacion del restante cambia de color dinamicamente
// 70% > verde (is-success)
// 39% < roja   (is-danger)
// 40% y 69% amarilla (is-warning)
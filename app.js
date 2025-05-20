let dibujo = document.querySelector('#dibujar')
let generar = document.querySelector('#Generar')

let monstruos = [
    {
        Image: './img/monstruo1.png',
        nombre: 'Grozzu',
        poder: 'Invisibilidad'
    },
    {
        Image: './img/monstruo2.png',
        nombre: 'Grozzurak',
        poder: 'Lanza fuego'
    },
    {
        Image: './img/monstruo3.png',
        nombre: 'Zzurmok',
        poder: 'Super velocidad'
    },
    {
        Image: './img/monstruo4.png',
        nombre: 'Rakthul',
        poder: 'Controlar el tiempo'
    },
    {
        Image: './img/monstruo5.png',
        nombre: 'Grakkulon',
        poder: 'Aliento acido'
    },
    {
        Image: './img/monstruo6.png',
        nombre: 'Varklaz',
        poder: 'Controlar el clima'
    },
    {
        Image: './img/monstruo7.png',
        nombre: 'Varthul',
        poder: 'Controlar los rayos'
    },

]
const color = ['red', 'blue', 'green', 'cyan', 'yellow', '#FF4500', '#E0115F', '#FFA500']
let filasAcumuladas

//prepara la fila
const agregar = () => {

    const aleatorio = Math.floor(Math.random() * monstruos.length)
    const colores = Math.floor(Math.random() * color.length)
    console.log(aleatorio)
    filasAcumuladas = `
            <div class='w-25' style="background-color:${color[colores]}">
                <h1 >${monstruos[aleatorio].nombre}</h1>
                <img src="${monstruos[aleatorio].Image}" style="object-fit: contain" class="w-25">
                <p style='font-syce:2rem;'>${monstruos[aleatorio].poder}</p>
                <button class="btn btn-danger m-2" onclick="Eliminar(event)">Eliminar</button>
            </div>
    `
    dibujo.innerHTML += filasAcumuladas
}

generar.addEventListener('click', () => {
    agregar()
})


const Eliminar = (event) => {
    event.target.parentElement.remove()
}

const btn = document.querySelector('.hamburguesa'); 
const listas = document.querySelector('.menu '); 

 btn.addEventListener('click',()=>{
listas.classList.toggle('actives');
 }) 
 
 const modal = document.querySelector('.car');
 const fondo = document.querySelector('.fondo');
 const cerrar = document.querySelector('.cerrar h1');
eventos();



 function eventos(){
    modal.addEventListener('click', ()=> {
        fondo.classList.toggle('fondo2');
      
    })
    cerrar.addEventListener('click', ()=> {
        fondo.classList.remove('fondo2');
    })
 }

  const typed = new Typed('.typed',{
    strings:[
        '<i class="typeds">Boxeo</>',
        '<i class="typeds">Natacion</>',
        '<i class="typeds">Futbol</>',
        '<i class="typeds">Porrismo</>',
        '<i class="typeds">Tenis</>'
   ],
   //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
   typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
   startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
   backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
   smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
   shuffle: false, // Alterar el orden en el que escribe las palabras.
   backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
   loop: true, // Repetir el array de strings
   loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
   showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '',  //   Caracter para el cursor
   contentType: 'html', // 'html' o 'null' para texto sin formato
  })


//Apareciendo el div de descuento en 3 segundos, y quitdandole el display none a #porciento.  
  setTimeout(() => {
    const porciento = document.querySelector('#porciento')
      porciento.classList.toggle('porciento_visible');
  },3000);  

  const descuento_Cerrar = document.querySelector('.descuento_Cerrar')
  descuento_Cerrar.addEventListener('click', ()=>{
    porciento.classList.toggle('porciento_visible');
  })

  //COMPRAS//
  let car_contador = document.querySelector('.contador');


 const tables = document.querySelector('.tables')
 const productos = document.querySelector('.productos')
 const vaciar = document.querySelector('.vaciar');
 let array_productos=[];
  contad = 1
  con=1
   productos.addEventListener('click', (e)=> {

     e.preventDefault();
car_contador.innerHTML=`<span class="contador">${con++}</span></h1>`
  if(e.target.classList.contains('btn')){
  const ver_clases = e.target.parentElement.parentElement


 const objeto_productos = {
 img : ver_clases.querySelector('img').src,
 nombre : ver_clases.querySelector('p').textContent,
 precio : ver_clases.querySelector('h5').textContent,
 id: ver_clases.querySelector('a').getAttribute('data-id'),
 cantidad:1
} 
array_productos = [...array_productos, objeto_productos];
}
tables.innerHTML=""

array_productos.forEach(producto => { 
const  tr =document.createElement('tr') 

tr.innerHTML=`
<td class="imas" ><img src="${producto.img}">${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><a href="#"><button class="eliminar" data-id="${producto.id}">X</button></a> </td>
`;
tables.appendChild(tr);
});

});
vaciar.addEventListener('click', ()=>{
tables.innerHTML=""
array_productos=[];
  })

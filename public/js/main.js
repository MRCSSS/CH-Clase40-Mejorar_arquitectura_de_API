/* ============================ MODULOS ============================= */
const socket = io();

/* ============================ WEBSOCKET =========================== */
// socket.on('serv-prods', async (data) => {
//     await renderProducts(data).then(html => {
//         document.getElementById('prods_table').innerHTML = html;
//     });
// });

/* ============================ WEBSOCKET =========================== */
// fetch('/api/v1/productos')
//     .then(res => res.json())
//     .then(res => { render(res.data); }
// );

/* ============================= RENDER ============================= */
// async function renderProducts(data) {
//     return fetch('templates/prod_table.hbs')
//         .then(resp => resp.text())
//         .then(temp => {
//             const template = Handlebars.compile(temp);
//             const html = template( {data} );

//             return html;
//         });
// }

// function render(data) {
//     let html = `<tr style="color: yellow;"> <th>Nombre</th> <th>Descripcion</th> <th>Precio</th><th>Imagen</th> </tr>`;

//     data.forEach(element => {
//         html += `<tr>
//                     <td>${element.nombre}</td>
//                     <td>${element.descripcion}</td>
//                     <td>${element.precio}</td>
//                     <td>
//                         <img width="30" src="${element.imagen}" alt="">
//                     </td>
//                 </tr>`;
//     });
    
//     document.getElementById('tabla-productos').innerHTML = html;
// }

/* =========================== FUNCIONES ============================ */
function addProduct() {
    const inputTitle = document.getElementById('title');
    const inputPrice = document.getElementById('price');
    const inputThumbnail = document.getElementById('thumbnail');

    const prod = {
        title: inputTitle.value,
        price: inputPrice.value,
        thumbnail: inputThumbnail.value
    };

    socket.emit('client-prods', prod);
}

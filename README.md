# Munayka
Este es un proyecto desarrollado para el curso de React JS de Coderhouse,en el cual muestro  lo que es un emprendimiento de mi hermana 

## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola: 
```sh
git clone https://github.com/ArielRueda/React-Desafio-1.git
npm install 
npm start
```

## Installation download ZIP
```sh
Ir a “code” > download ZIP
Descomprimir el archivo
En la carpeta donde se encuentra “package.json” ejecutar en terminal: 
npm install
npm start
```

### Componentes
Al ingresar en la página, te encontrarás con la página de inicio, con la ruta "/". Aquí encontrarás el una pagina de presentacion de la marca , en ella hay un componente *NavBar*, que muestra las categorías como links que permiten filtrar los productos por categoría, y el *ItemListContainer*, que muestra una lista de items, donde cada "Item" es una card que muestra una breve información sobre un producto. Además, cada "Item" contiene un botón que dirige al *ItemDetailContainer*.

El *ItemDetailContainer* muestra, según el ID, el detalle (*ItemDetail*) de un producto. El *ItemDetail* muestra una foto de la portada del libro sleccionado, su título, su autor, su precio, su sinopsis y la cantidad de ejemplares en stock. Además, muestra el *ItemCount* que permite seleccionar la cantidad de ejemplares que se desean añadir al carrito (*Cart*). Una vez agregado el producto, un botón permite navegar hacia el *Cart*. También puede accederse al Cart a través del *CartWidget*, el ícono que se muestra en la *NavBar* cuando hay al menos un producto en el carrito.

El carrito muestra un resumen de la compra, detallando por cada producto título, cantidad, precio unitario, subtotal, y un botón para eliminar el producto. Además hay un botón para vaciar el carrito y otro para finalizar la compra, que conduce al componente *Form*. El componente *Form* solicita nombre, email y teléfono del comprador, información que se sube a firebase en la colección "orders", junto con la fecha y un resumen de la compra.


# Funciones *CartContext*

🌱 *addItem* => añade el producto al carrito. En el caso de que el producto ya esté en el carrito, esta función va a evitar que se genere otra línea de ItemCart, solo modificará la cantidad de dicho producto.

🌱 *getQuantity* => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget.

🌱 *isInCart* => reconoce si el producto está o no en el carrito.

🌱 *clearCart* => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

🌱 *removeItem* => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

🌱 *getQuantityProd* => esta función se utiliza en ItemDetail para guardar la cantidad que seleccionás de ese producto en el contador. 

🌱 *totalCost* => esta función calcula el valor total de la compra.

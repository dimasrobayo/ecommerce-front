# ecommerce-front

el FrontEnd de esta pequeña muestra de ecommerce esta realizada en React.js, por lo cual los pasos a seguir para su puesta en marcha es la siguiente.



1.- Clonar el repositorios bajo el siguiente comando:

```
git clone https://github.com/dimasrobayo/ecommerce-front.git
```



2.- Luego de clonado el repositorio instalamos la paqueteria necesario para el funcionamiento de la plataforma:

```
yarn install or npm install
```



3.- Para poder consumir la api del backend se debe colocar la direccion ip y el puerto bajo el cual esta funcionando tu servidor, por lo cual se tiene que editar el archivo Constants.js el cual esta en la ruta client/src/Store/Constants.js y editar la constante BACKEND.

```
const BACKEND = 'https://192.168.60.127:8000/api/';
```

finalmente iniciamo la aplicacion para visualizar en nuestro navegador bajo el siguiente comando

```
yarn start or npm start
```


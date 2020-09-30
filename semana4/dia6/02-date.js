 /**
  * number
  * let edad=29;
  * let otra edad=new Number(29);
  */

 /**
  * date es la clase o tipo de dato que nos ayudará 
  * a trabajar con fechas
  */

 let hoy = new Date();
 console.log(hoy);

 /**
  * Obtener el año de una fecha
  * fecha.getFullYear();
  * Retorn el año de un Objeto Date
  */

 let anio = hoy.getFullYear();
 console.log(anio);
 /**
  * fecha.getMonth();
  * Retorna le número de mes que corresponda en el calendario
  * don 0 es ENERO
  */
 let mes = hoy.getMonth();
 console.log(mes);

 /**
  * fecha.getDate();
  * Retorna el número del dia del mes
  */
 /**
  * Libreria de javasCript moment.js
  */
 let diaMes = hoy.getDate();
 console.log(diaMes);

 /**fecha.getDay();
  * Retorn el número del dia de la semana
  * 0 es el domingo
  */

 let diaSemana = hoy.getDay();
 console.log(diaSemana);
 let horas = hoy.getHours();
 let minutos = hoy.getMinutes();
 let segundos = hoy.getSeconds();
 let milisegundos = hoy.getMilliseconds();

 console.log(`Horas actual= ${horas}`);
 console.log(`Minutos actual= ${minutos}`);
 console.log(`Segundos actual= ${segundos}`);
 console.log(`Milisegundos actual= ${milisegundos}`);

 /** ¿Cómo inicializo un objeto date con una fecha distinta? */

 let hallowen2020 = new Date(2020, 9, 31);

 console.log(hallowen2020);

 let hallowenMenosHoy = hallowen2020 - hoy;
 console.log(hallowenMenosHoy);

 let diasParaHalloween = ((((hallowenMenosHoy / 1000) / 60) / 60) / 24);
 // numero.toFixed(cantidad_de_decimales)
 // Retorna el número redondeado a una cantidad_de_decimales
 // Pasada como parametro
//  console.log(`Días para halloween: ${diasParaHalloween.toFixed()}`);
 console.log(`Días para halloween: ${diasParaHalloween.toFixed(2)}`);
 /**
  * Inicializar una fecha en formato UNIX
  * new Date(milisegundos) (milisegundos desde UNIX(1 enero 1970))
  */

  let fechaPronostico=new Date(1601143200*1000);
  console.log(fechaPronostico);
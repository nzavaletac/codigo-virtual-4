/**
 * Creando una función exportable individualmente
 */
export const Persona = () => {
  return {
    nombre: "",
    edad: 0,
    apellido: "",
    dni: "",
    /**
     * La palabra reservada "this" hace referenci al objeto en el que es usado,
     * y con ella se puede acceder a los diferentes atributos que tiene el objeto
     */
    asignarEdad: function (nuevaEdad) {
      this.edad = nuevaEdad;
    },
  };
};

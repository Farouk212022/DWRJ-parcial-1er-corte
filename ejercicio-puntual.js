function crearClaseEmprendedor(){
    class Emprendedor{
        constructor(nombre,apellido,libros,mascotas){
            this.nombre=nombre;
            this.apeliido=apellido;
            this.libros=libros;
            this.mascotas=mascotas;
        }

        addMascota(mascota){
            this.mascotas.push(mascota);
        }

        getMascotas(){
            return this.mascotas.length;
        }

        addBook(book,autor){
            var libro= {
                nombre:book,
                autor:autor
            };
            this.libros.push(libro);
        }

        getBooks(){
            var bookNames=[];
            for (var i=0;i<this.libros.length;i++){
                bookNames.push(this.libros[i].nombre);
            }
            return bookNames;
        }

        getFullName(){
            return `${this.nombre} ${this.apeliido}`;
        }
    }
    return Emprendedor;
}

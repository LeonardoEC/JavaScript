// clase

function Persona(dni,nombre,apellido){

    // atributos
    let $dni = dni
    let $nombre = nombre
    let $apellido = apellido


    // getter
    function dni(){
        return $dni
    }
    function nombre(){
        return $nombre
    }
    function apellido(){
        return $apellido
    }

    // setter
    function nombre(nombre){
        $nombre = nombre
    }

    function apellido(apellido){
        $apellido = apellido
    }


}

let Andres = Persona(1,"Andres","Torres")

Andres.dni
const topics = [

{
id:1,
title:"Introducción a la POO y entorno de desarrollo en Java",

concept:`

<p>
La Programación Orientada a Objetos es un paradigma basado en la creación de objetos
que contienen atributos y métodos. Java utiliza la JVM para ejecutar programas
de forma multiplataforma.
</p>

<p>
El JDK proporciona herramientas de desarrollo, mientras que IntelliJ, Eclipse,
NetBeans y VS Code son IDEs utilizados para programar.
</p>

`,

examples:[

{
title:"Hola Mundo",
description:"Primer programa en Java.",
code:`
public class HolaMundo {

    public static void main(String[] args){

        System.out.println("Hola Mundo");

    }

}
`
},

{
title:"Uso de Scanner",
description:"Lectura de datos por consola.",
code:`
Scanner sc = new Scanner(System.in);

String nombre = sc.nextLine();

System.out.println(nombre);
`
}

],

exercises:[

{
title:"Calculadora",
description:"Crear una calculadora básica en Java."
},

{
title:"Datos del sistema",
description:"Mostrar propiedades del sistema operativo."
}

]

},

{
id:2,
title:"Clases y Objetos en Java",

concept:`

<p>
Una clase es una plantilla que define atributos y métodos. Un objeto es una
instancia de una clase.
</p>

`,

examples:[

{
title:"Clase Persona",
description:"Creación de clase.",
code:`
public class Persona{

    String nombre;

}
`
},

{
title:"Objeto Persona",
description:"Instanciación.",
code:`
Persona p = new Persona();
`
}

],

exercises:[

{
title:"Clase Estudiante",
description:"Crear una clase Estudiante."
},

{
title:"Instanciar Objetos",
description:"Crear tres objetos diferentes."
}

]

}

];

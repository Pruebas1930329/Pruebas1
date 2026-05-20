const topics = [{
    id: 1,
    title: "1. Clases y Objetos",
    concept: "En Java, una Clase es el pilar fundamental del paradigma orientado a objetos. Actúa como un plano constructivo o 'blueprint' que define la estructura y el comportamiento de una entidad. Un Objeto, por su parte, es la manifestación física y concreta de ese plano en la memoria. Cuando instanciamos una clase usando la palabra clave 'new', Java reserva un espacio en el área de memoria conocida como Heap. Cada objeto mantiene su propia copia de los atributos definidos en la clase, permitiendo que existan múltiples instancias con estados totalmente independientes. Por ejemplo, una clase 'Persona' define que todos tienen un nombre, pero el objeto 'p1' puede llamarse 'Ana' y el 'p2' 'Luis'.",
    examples: [{
        desc: "Definición de atributos y métodos básicos:",
        code: "public class Reloj {\n    String marca;\n    void sonarAlarma() {\n        System.out.println(\"Bip Bip!\");\n    }\n}"
    }, {
        desc: "Instanciación y acceso a miembros:",
        code: "Reloj miReloj = new Reloj();\nmiReloj.marca = \"Casio\";\nmiReloj.sonarAlarma();"
    }],
    exercises: [{
        instruction: "Crea una clase 'Laptop' con marca y un método 'procesar()'.",
        codeChallenge: "public class Laptop {\n    // Escribe aquí\n}"
    }, {
        instruction: "Instancia dos laptops y asígnales marcas diferentes.",
        codeChallenge: "// Código aquí"
    }]
}, {
    id: 2,
    title: "2. Encapsulamiento",
    concept: "El encapsulamiento es el mecanismo de seguridad que protege los datos internos de un objeto. Se basa en el principio de ocultar la implementación y exponer solo una interfaz controlada. En Java, esto se logra marcando los atributos como 'private'. Para interactuar con estos datos, se utilizan métodos públicos: los 'Getters' (para leer) y 'Setters' (para escribir). Esto no es solo por estética; permite que la clase valide los datos. Por ejemplo, un setter de 'edad' puede impedir que se asigne un valor negativo, manteniendo la integridad del objeto en todo momento.",
    examples: [{
        desc: "Uso de private y métodos de acceso:",
        code: "private double saldo;\npublic double getSaldo() {\n    return saldo;\n}"
    }, {
        desc: "Validación lógica en un Setter:",
        code: "public void setEdad(int e) {\n    if(e > 0) this.edad = e;\n}"
    }],
    exercises: [{
        instruction: "Crea un atributo privado 'nombre' con su Getter y Setter.",
        codeChallenge: "private String nombre;\n// Implementa métodos"
    }, {
        instruction: "Implementa un Setter para 'precio' que rechace valores menores a 1.",
        codeChallenge: "public void setPrecio(double p) { ... }"
    }]
}, {
    id: 3,
    title: "3. Herencia",
    concept: "La herencia permite crear jerarquías de clases donde una subclase adquiere automáticamente los atributos y métodos de una superclase. Se utiliza la palabra clave 'extends'. Esto promueve la reutilización masiva de código y establece una relación de tipo 'Es-Un' (un Perro es un Animal). Java solo permite la herencia simple de clases para evitar el 'diamante de la muerte' (ambigüedad), pero una clase puede tener una cadena larga de ancestros.",
    examples: [{
        desc: "Extensión de funcionalidad básica:",
        code: "class Vehiculo { void mover() {} }\nclass Avion extends Vehiculo { void volar() {} }"
    }, {
        desc: "Acceso a miembros heredados:",
        code: "Avion boeing = new Avion();\nboeing.mover(); // Heredado\nboeing.volar(); // Propio"
    }],
    exercises: [{
        instruction: "Crea una subclase 'Gerente' que herede de 'Empleado'.",
        codeChallenge: "public class Gerente extends Empleado { ... }"
    }, {
        instruction: "Añade un método 'gestionar()' exclusivo para la clase 'Gerente'.",
        codeChallenge: "void gestionar() { ... }"
    }]
}, {
    id: 4,
    title: "4. Polimorfismo",
    concept: "El polimorfismo es la capacidad de un objeto de comportarse de diferentes maneras según el contexto. Principalmente se manifiesta cuando una referencia de la clase padre apunta a un objeto de la clase hija. Durante la ejecución, Java decide qué método ejecutar basándose en el tipo real del objeto, no en el tipo de la referencia. Esto permite crear sistemas altamente flexibles donde puedes tratar a una lista de diferentes animales como simples 'Animales' y pedirles que hagan sonido, y cada uno responderá según su especie.",
    examples: [{
        desc: "Referencia de superclase a objeto hijo:",
        code: "Animal miPerro = new Perro();\nmiPerro.hacerSonido(); // Ejecuta ladrido"
    }, {
        desc: "Sobrescritura de métodos con @Override:",
        code: "@Override\nvoid mover() {\n    System.out.println(\"Nandando...\");\n}"
    }],
    exercises: [{
        instruction: "Crea una clase 'Circulo' que sobrescriba 'dibujar()' de 'Forma'.",
        codeChallenge: "@Override\nvoid dibujar() { ... }"
    }, {
        instruction: "Declara una lista de 'Forma' y añade un 'Circulo' y un 'Cuadrado'.",
        codeChallenge: "List<Forma> formas = new ArrayList<>();"
    }]
}, {
    id: 5,
    title: "5. Abstracción",
    concept: "La abstracción consiste en capturar las características esenciales de un objeto omitiendo los detalles de implementación complejos. Se logra mediante clases abstractas (marcadas con 'abstract') que actúan como contratos incompletos. Una clase abstracta no puede ser instanciada directamente. Los métodos abstractos obligan a las subclases a proporcionar su propia lógica. Es ideal para definir conceptos generales como 'FiguraGeometrica', donde sabes que todas tienen un área, pero el cálculo específico depende de cada figura.",
    examples: [{
        desc: "Definición de clase y método abstracto:",
        code: "abstract class Forma {\n    abstract double area();\n}"
    }, {
        desc: "Implementación obligatoria en subclase:",
        code: "class Cuadrado extends Forma {\n    double area() { return lado * lado; }\n}"
    }],
    exercises: [{
        instruction: "Crea una clase abstracta 'Instrumento' con el método 'tocar()'.",
        codeChallenge: "abstract class Instrumento { ... }"
    }, {
        instruction: "Crea la clase 'Piano' que implemente el método 'tocar()'.",
        codeChallenge: "class Piano extends Instrumento { ... }"
    }]
}, {
    id: 6,
    title: "6. Interfaces",
    concept: "Una interfaz es un contrato puro que define 'qué' debe hacer una clase, pero no 'cómo'. A diferencia de la herencia de clases, Java permite que una clase implemente múltiples interfaces, facilitando el diseño desacoplado. Todos los métodos en una interfaz son implícitamente públicos y abstractos (hasta Java 8). Son la base del diseño por componentes, permitiendo que objetos totalmente diferentes compartan comportamientos comunes como ser 'Clonable' o 'Comparable'.",
    examples: [{
        desc: "Definición de una interfaz de comportamiento:",
        code: "interface Conectable {\n    void conectar();\n}"
    }, {
        desc: "Implementación múltiple de interfaces:",
        code: "class SmartTV implements Conectable, Reproductor { ... }"
    }],
    exercises: [{
        instruction: "Define una interfaz 'Nadador' con el método 'nadar()'.",
        codeChallenge: "interface Nadador { ... }"
    }, {
        instruction: "Haz que la clase 'Delfin' implemente la interfaz 'Nadador'.",
        codeChallenge: "class Delfin implements Nadador { ... }"
    }]
}, {
    id: 7,
    title: "7. Constructores",
    concept: "Los constructores son métodos especiales invocados en el momento de la creación de un objeto. Su función principal es inicializar los atributos del objeto y preparar su estado inicial. No tienen tipo de retorno y deben llamarse exactamente igual que la clase. Si no defines un constructor, Java crea uno vacío por defecto. Sin embargo, al definir uno personalizado, el de por defecto desaparece, obligándote a gestionar la inicialización explícitamente.",
    examples: [{
        desc: "Constructor con parámetros:",
        code: "public Persona(String nombre) {\n    this.nombre = nombre;\n}"
    }, {
        desc: "Sobrecarga de constructores:",
        code: "public Persona() { this.nombre = \"Anonimo\"; }\npublic Persona(String n) { ... }"
    }],
    exercises: [{
        instruction: "Crea un constructor para la clase 'Libro' que reciba el título.",
        codeChallenge: "public Libro(String t) { ... }"
    }, {
        instruction: "Añade un constructor vacío que asigne valores por defecto.",
        codeChallenge: "public Libro() { ... }"
    }]
}, {
    id: 8,
    title: "8. Palabra clave 'this'",
    concept: "La palabra clave 'this' es una referencia al objeto actual que se está ejecutando. Se utiliza principalmente para resolver ambigüedades entre los nombres de los atributos de la clase y los parámetros de los métodos. También es fundamental para la invocación encadenada de constructores (this()) y para pasar la instancia actual como argumento a otros métodos o constructores externos.",
    examples: [{
        desc: "Resolución de ambigüedad de nombres:",
        code: "void setEdad(int edad) {\n    this.edad = edad; // this.edad es el atributo\n}"
    }, {
        desc: "Llamada entre constructores de la misma clase:",
        code: "public Persona() {\n    this(\"Sin nombre\", 0); // Llama al otro constructor\n}"
    }],
    exercises: [{
        instruction: "Usa 'this' para asignar un parámetro 'marca' al atributo 'marca'.",
        codeChallenge: "void updateMarca(String marca) { ... }"
    }, {
        instruction: "Usa 'this()' para que un constructor sin parámetros llame a uno con parámetros.",
        codeChallenge: "public Coche() { ... }"
    }]
}, {
    id: 9,
    title: "9. Palabra clave 'super'",
    concept: "'super' se utiliza en las subclases para referirse directamente a los miembros (atributos o métodos) de la superclase inmediata. Su uso más común es en los constructores de las subclases para invocar al constructor del padre (super()), lo cual debe ser siempre la primera instrucción. También es vital cuando una subclase sobrescribe un método pero aún necesita ejecutar la lógica original definida en el padre.",
    examples: [{
        desc: "Invocación al constructor del padre:",
        code: "public Perro() {\n    super(\"Canino\"); // Llama al constructor de Animal\n}"
    }, {
        desc: "Llamada a método sobrescrito:",
        code: "void comer() {\n    super.comer(); // Come como animal\n    System.out.println(\"Perro come croquetas\");\n}"
    }],
    exercises: [{
        instruction: "Llama al constructor del padre desde la clase 'Moto'.",
        codeChallenge: "public Moto() { super(); }"
    }, {
        instruction: "Accede al método 'apagar()' de la clase padre usando 'super'.",
        codeChallenge: "void apagar() { super.apagar(); }"
    }]
}, {
    id: 10,
    title: "10. Modificadores de Acceso",
    concept: "Los modificadores definen la visibilidad y el alcance de las clases y sus miembros. 'public' permite acceso total; 'private' restringe el acceso solo a la propia clase; 'protected' permite acceso a la clase, a sus herederos y a clases del mismo paquete; y el acceso por defecto (default) limita la visibilidad solo al paquete actual. Elegir el modificador correcto es esencial para aplicar el encapsulamiento y proteger la arquitectura del software.",
    examples: [{
        desc: "Diferencia entre public y private:",
        code: "public String nombre; // Visible en todo el proyecto\nprivate String id; // Solo visible en esta clase"
    }, {
        desc: "Uso de protected para la herencia:",
        code: "protected double velocidadMax; // Visible para hijos"
    }],
    exercises: [{
        instruction: "Declara un método privado llamado 'logInterno()'.",
        codeChallenge: "private void logInterno() { ... }"
    }, {
        instruction: "Crea una variable protegida 'puntosVida' para una clase Guerrero.",
        codeChallenge: "protected int puntosVida;"
    }]
}, {
    id: 11,
    title: "11. Miembros Estáticos (static)",
    concept: "El modificador 'static' indica que un miembro pertenece a la Clase en sí y no a las instancias individuales. Las variables estáticas son compartidas por todos los objetos de esa clase (solo existe una copia en memoria). Los métodos estáticos pueden invocarse sin crear un objeto (como Math.sqrt()). Son ideales para constantes globales, contadores de objetos o funciones de utilidad que no dependen del estado de un objeto particular.",
    examples: [{
        desc: "Variable compartida entre instancias:",
        code: "static int totalObjetos = 0;\npublic MiClase() { totalObjetos++; }"
    }, {
        desc: "Método de utilidad estático:",
        code: "public static int sumar(int a, int b) { return a + b; }"
    }],
    exercises: [{
        instruction: "Crea una constante estática PI en una clase 'Calculos'.",
        codeChallenge: "public static final double PI = 3.1416;"
    }, {
        instruction: "Define un método estático que convierta de Celsius a Fahrenheit.",
        codeChallenge: "public static double toF(double c) { ... }"
    }]
}, {
    id: 12,
    title: "12. Palabra clave 'final'",
    concept: "'final' se utiliza para imponer restricciones de inmutabilidad. Una variable final se convierte en una constante; un método final no puede ser sobrescrito por ninguna subclase, garantizando un comportamiento crítico; y una clase final no puede ser heredada (como la clase String de Java). Es una herramienta poderosa para garantizar la seguridad del código y el diseño de APIs robustas.",
    examples: [{
        desc: "Definición de constante inmutable:",
        code: "final int MAX_USUARIOS = 500;"
    }, {
        desc: "Clase que impide la extensión:",
        code: "public final class Segura { ... }"
    }],
    exercises: [{
        instruction: "Crea una variable 'final' para la gravedad terrestre (9.8).",
        codeChallenge: "final double GRAVEDAD = 9.8;"
    }, {
        instruction: "Intenta declarar un método final 'validar()' en una clase Base.",
        codeChallenge: "public final void validar() { ... }"
    }]
}, {
    id: 13,
    title: "13. Sobrecarga de Métodos",
    concept: "La sobrecarga (Overloading) permite definir múltiples métodos con el mismo nombre dentro de una clase, siempre que sus firmas sean diferentes (distinto número o tipo de parámetros). Es un ejemplo de polimorfismo en tiempo de compilación. Facilita la legibilidad del código al permitir que una misma acción se realice con diferentes tipos de entrada, como un método 'imprimir' que acepte tanto un String como un entero.",
    examples: [{
        desc: "Sobrecarga por tipo de parámetro:",
        code: "void mostrar(int i) { ... }\nvoid mostrar(String s) { ... }"
    }, {
        desc: "Sobrecarga por cantidad de parámetros:",
        code: "int area(int lado) { ... }\nint area(int b, int h) { ... }"
    }],
    exercises: [{
        instruction: "Sobrecarga el método 'buscar' para String y para int.",
        codeChallenge: "void buscar(String n) { }\nvoid buscar(int id) { }"
    }, {
        instruction: "Crea dos versiones de un constructor usando sobrecarga.",
        codeChallenge: "public User() { }\npublic User(String n) { }"
    }]
}, {
    id: 14,
    title: "14. Colecciones y POO",
    concept: "El Java Collections Framework es el conjunto de interfaces y clases que permiten manejar grupos de objetos. Utiliza intensamente el polimorfismo y los genéricos (`<T>`). Interfaces como List, Set y Map definen comportamientos para listas ordenadas, conjuntos de elementos únicos y mapas de clave-valor. Integrar colecciones con POO permite gestionar dinámicamente objetos en memoria, realizando búsquedas, ordenamientos y filtrados de forma profesional.",
    examples: [{
        desc: "Uso de ArrayList con polimorfismo:",
        code: "List<Persona> lista = new ArrayList<>();\nlista.add(new Persona(\"Ana\"));"
    }, {
        desc: "Iteración sobre colección de objetos:",
        code: "for(Persona p : lista) {\n    p.saludar();\n}"
    }],
    exercises: [{
        instruction: "Declara un ArrayList que solo acepte objetos de tipo 'Coche'.",
        codeChallenge: "ArrayList<Coche> garaje = new ArrayList<>();"
    }, {
        instruction: "Usa un bucle para imprimir el nombre de todos los objetos en una lista.",
        codeChallenge: "for(Objeto o : lista) { ... }"
    }]
}];

// Función sugerida para renderizar este nuevo contenido extenso
function renderTopics() {
    const container = document.getElementById('main-content');
    container.innerHTML = topics.map(topic => `
        <section id="tema-${topic.id}" class="topic-card">
            <h2 class="text-3xl font-bold mb-6">${topic.title}</h2>
            
            <p class="concept text-gray-300 leading-relaxed text-justify mb-8 text-lg">
                ${topic.concept}
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
                ${topic.examples.map(ex => `
                    <div class="example-box bg-black/40 p-5 border border-neon-green/30">
                        <h3 class="text-cyber-400 font-semibold mb-3">Ejemplo: ${ex.desc}</h3>
                        <pre><code>${ex.code}</code></pre>
                    </div>
                `).join('')}
            </div>

            <!-- Botón Plegable -->
            <button class="exercise-toggle">
                <i data-lucide="edit-3" class="w-5 h-5"></i> Ejercicios de Codificación
            </button>
            
            <!-- Contenedor Plegable -->
            <div class="exercise-content">
                <div class="space-y-4">
                    ${topic.exercises.map( (exe, idx) => `
                        <div class="bg-black/50 p-4 border-l-2 border-neon-green">
                            <p class="text-sm mb-2 font-medium">${idx + 1}. ${exe.instruction}</p>
                            <code class="text-xs italic">${exe.codeChallenge}</code>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTopics();
});

// Evento para plegar/desplegar
document.addEventListener('click', (e) => {
    // Buscamos el botón o cualquier elemento dentro de él (como el icono)
    const btn = e.target.closest('.exercise-toggle');
    if (btn) {
        const content = btn.nextElementSibling;
        content.classList.toggle('active');
    }
});

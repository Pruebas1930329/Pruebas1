const topics = [{
    id: 1,

    title: "Introducción a la la POO y entorno de desarrollo en Java",

    concept: "La Programación Orientada a Objetos (POO) es un paradigma que permite representar problemas reales mediante clases y objetos. Java implementa este paradigma utilizando herramientas como el JDK (Java Development Kit), encargado de compilar programas, y la JVM (Java Virtual Machine), responsable de ejecutar aplicaciones en cualquier sistema operativo. Los entornos de desarrollo como IntelliJ IDEA, Eclipse, NetBeans y VS Code facilitan la escritura, depuración y organización del código. Además, los paquetes permiten estructurar profesionalmente las clases y evitar conflictos entre nombres.",

    examples: [

        {
            desc: "Primer programa en Java:",

            code: `public class HolaMundo {

    public static void main(String[] args){

        System.out.println("Hola Mundo");

    }

}`
        },

        {
            desc: "Uso de paquetes en Java:",

            code: `package universidad.poo;

public class Estudiante {

    String nombre;

}`
        }

    ],

    exercises: [

        {
            instruction: "Crea un programa que muestre la versión de Java instalada.",

            codeChallenge: `// Código aquí`
        },

        {
            instruction: "Crea un programa que solicite el nombre del usuario usando Scanner.",

            codeChallenge: `// Código aquí`
        }

    ]
},

{
    id: 2,

    title: "Clases y Objetos en Java",

    concept: "Las clases son plantillas que definen atributos y métodos comunes para representar entidades del mundo real. Los objetos son instancias concretas creadas a partir de esas clases. Cada objeto posee su propio estado en memoria y puede ejecutar comportamientos definidos por la clase.",

    examples: [

        {
            desc: "Definición básica de una clase:",

            code: `public class Persona {

    String nombre;
    int edad;

}`
        },

        {
            desc: "Instanciación de objetos:",

            code: `Persona p = new Persona();

p.nombre = "Daniel";
p.edad = 20;`
        }

    ],

    exercises: [

        {
            instruction: "Crea una clase llamada 'Vehiculo' con atributos marca y modelo.",

            codeChallenge: `public class Vehiculo {

}`
        },

        {
            instruction: "Instancia dos objetos diferentes de la clase Vehiculo.",

            codeChallenge: `// Código aquí`
        }

    ]
},

{
    id: 3,

    title: "Atributos, métodos y encapsulamiento",

    concept: "El encapsulamiento consiste en proteger los datos internos de un objeto utilizando modificadores de acceso. En Java, los atributos suelen declararse como private y se accede a ellos mediante métodos Getter y Setter. Esto permite validar información y controlar el acceso a los datos.",

    examples: [

        {
            desc: "Atributo privado y Getter:",

            code: `private double saldo;

public double getSaldo(){

    return saldo;

}`
        },

        {
            desc: "Setter con validación:",

            code: `public void setEdad(int edad){

    if(edad > 0){

        this.edad = edad;

    }

}`
        }

    ],

    exercises: [

        {
            instruction: "Crea un atributo privado llamado 'nombre' con su Getter y Setter.",

            codeChallenge: `private String nombre;`
        },

        {
            instruction: "Crea un Setter para precio que no permita valores negativos.",

            codeChallenge: `public void setPrecio(double p){

}`
        }

    ]
},

{
    id: 4,

    title: "Constructores y representación de objetos",

    concept: "Los constructores son métodos especiales que inicializan objetos en el momento de su creación. No poseen tipo de retorno y deben tener el mismo nombre de la clase. El método toString() permite representar un objeto como texto, mientras que la sobrecarga permite definir múltiples constructores con diferentes parámetros.",

    examples: [

        {
            desc: "Constructor parametrizado:",

            code: `public Persona(String nombre){

    this.nombre = nombre;

}`
        },

        {
            desc: "Método toString():",

            code: `@Override

public String toString(){

    return nombre;

}`
        }

    ],

    exercises: [

        {
            instruction: "Crea un constructor para una clase Libro que reciba título y autor.",

            codeChallenge: `public Libro(String titulo, String autor){

}`
        },

        {
            instruction: "Sobrecarga el constructor de una clase Computador.",

            codeChallenge: `public Computador(){

}`
        }

    ]
},

{
    id: 5,

    title: "Pendiente: tema 5",

    concept: "Este tema no aparece especificado dentro de las entradas suministradas por el curso. Se deja reservado para futuras actualizaciones o contenidos adicionales definidos por el docente."
},

{
    id: 6,

    title: "Herencia en Java",

    concept: "La herencia permite que una clase hija reutilice atributos y métodos de una clase padre mediante la palabra clave extends. También puede utilizarse super() para acceder a miembros o constructores de la superclase.",

    examples: [

        {
            desc: "Herencia simple:",

            code: `class Animal {

    void comer(){}

}

class Perro extends Animal {

}`
        },

        {
            desc: "Uso de super():",

            code: `public Perro(){

    super();

}`
        }

    ],

    exercises: [

        {
            instruction: "Crea una clase Gerente que herede de Empleado.",

            codeChallenge: `class Gerente extends Empleado {

}`
        },

        {
            instruction: "Usa super() dentro del constructor de una subclase.",

            codeChallenge: `super();`
        }

    ]
},

{
    id: 7,

    title: "Polimorfismo y sobreescritura de métodos",

    concept: "El polimorfismo permite que un mismo método tenga diferentes comportamientos según el objeto que lo implemente. La sobrescritura ocurre cuando una subclase redefine un método heredado utilizando @Override.",

    examples: [

        {
            desc: "Referencia polimórfica:",

            code: `Animal a = new Perro();

a.hacerSonido();`
        },

        {
            desc: "Sobrescritura de método:",

            code: `@Override

void mover(){

    System.out.println("Nadando");

}`
        }

    ],

    exercises: [

        {
            instruction: "Sobrescribe el método dibujar() en una clase Circulo.",

            codeChallenge: `@Override

void dibujar(){

}`
        },

        {
            instruction: "Crea una lista de objetos Forma.",

            codeChallenge: `List<Forma> lista = new ArrayList<>();`
        }

    ]
},

{
    id: 8,

    title: "Clases abstractas e interfaces",

    concept: "Las clases abstractas representan modelos incompletos que no pueden instanciarse directamente. Las interfaces definen contratos de comportamiento que las clases deben implementar.",

    examples: [

        {
            desc: "Clase abstracta:",

            code: `abstract class Figura {

    abstract double area();

}`
        },

        {
            desc: "Implementación de interfaz:",

            code: `interface Volador {

    void volar();

}`
        }

    ],

    exercises: [

        {
            instruction: "Crea una clase abstracta llamada Instrumento.",

            codeChallenge: `abstract class Instrumento {

}`
        },

        {
            instruction: "Haz que la clase Delfin implemente una interfaz Nadador.",

            codeChallenge: `class Delfin implements Nadador {

}`
        }

    ]
},

{
    id: 9,

    title: "Composición y modularización del código",

    concept: "La composición consiste en construir objetos complejos usando otros objetos como componentes internos. La modularización permite dividir el sistema en paquetes y módulos para facilitar el mantenimiento y la reutilización.",

    examples: [

        {
            desc: "Composición entre clases:",

            code: `class Computador {

    Procesador cpu;

}`
        },

        {
            desc: "Organización en paquetes:",

            code: `package servicios.usuario;`
        }

    ],

    exercises: [

        {
            instruction: "Crea una composición entre Casa y Habitacion.",

            codeChallenge: `class Casa {

}`
        },

        {
            instruction: "Organiza clases en paquetes diferentes.",

            codeChallenge: `package modelo;`
        }

    ]
},

{
    id: 10,

    title: "Pendiente: tema 10",

    concept: "Este tema no se encuentra visible dentro de las entradas suministradas durante el semestre. Se mantiene como espacio reservado para contenido futuro o complementario."
},

{
    id: 11,

    title: "Manejo de errores y excepciones",

    concept: "Las excepciones permiten controlar errores durante la ejecución del programa. Java utiliza try, catch, finally, throw y throws para manejar situaciones inesperadas y evitar que el programa termine abruptamente.",

    examples: [

        {
            desc: "Uso de try y catch:",

            code: `try {

    int r = 10/0;

} catch(Exception e){

    System.out.println("Error");

}`
        },

        {
            desc: "Lanzamiento de excepciones:",

            code: `throw new IllegalArgumentException();`
        }

    ],

    exercises: [

        {
            instruction: "Captura un error de división entre cero.",

            codeChallenge: `try {

}`
        },

        {
            instruction: "Crea una excepción personalizada.",

            codeChallenge: `class MiExcepcion extends Exception {

}`
        }

    ]
},

{
    id: 12,

    title: "Colecciones y estructuras de datos",

    concept: "Las colecciones permiten almacenar y manipular grupos de objetos dinámicamente. Java proporciona interfaces como List, Set y Map, junto con implementaciones como ArrayList, HashSet y HashMap.",

    examples: [

        {
            desc: "Uso de ArrayList:",

            code: `List<String> nombres = new ArrayList<>();

nombres.add("Ana");`
        },

        {
            desc: "Uso de HashMap:",

            code: `Map<Integer, String> mapa = new HashMap<>();`
        }

    ],

    exercises: [

        {
            instruction: "Crea un ArrayList de objetos Estudiante.",

            codeChallenge: `ArrayList<Estudiante> lista = new ArrayList<>();`
        },

        {
            instruction: "Usa un HashSet para evitar duplicados.",

            codeChallenge: `HashSet<String> datos = new HashSet<>();`
        }

    ]
},

{
    id: 13,

    title: "Lectura y escritura de archivos en Java",

    concept: "Java permite trabajar con archivos de texto utilizando clases como FileWriter, BufferedReader y Scanner. Esto facilita guardar y recuperar información desde archivos .txt y .csv.",

    examples: [

        {
            desc: "Escritura de archivo TXT:",

            code: `FileWriter fw = new FileWriter("datos.txt");

fw.write("Hola");`
        },

        {
            desc: "Lectura de archivo:",

            code: `BufferedReader br = new BufferedReader(new FileReader("datos.txt"));`
        }

    ],

    exercises: [

        {
            instruction: "Crea un programa que escriba nombres en un archivo.",

            codeChallenge: `FileWriter fw;`
        },

        {
            instruction: "Lee un archivo CSV línea por línea.",

            codeChallenge: `BufferedReader br;`
        }

    ]
},

{
    id: 14,

    title: "Buenas prácticas de programación en Java y refactorización",

    concept: "Las buenas prácticas permiten escribir código limpio, mantenible y reutilizable. Herramientas como Checkstyle y SonarLint ayudan a detectar errores, duplicidad y malas prácticas durante el desarrollo.",

    examples: [

        {
            desc: "Método bien estructurado:",

            code: `public double calcularTotal(){

    return subtotal + impuestos;

}`
        },

        {
            desc: "Refactorización básica:",

            code: `extraerMetodo();`
        }

    ],

    exercises: [

        {
            instruction: "Refactoriza un método muy largo dividiéndolo en métodos pequeños.",

            codeChallenge: `// Código aquí`
        },

        {
            instruction: "Aplica nombres descriptivos a variables y métodos.",

            codeChallenge: `// Código aquí`
        }

    ]
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
                ${topic.examples ? topic.examples.map(ex => `
                    <div class="example-box bg-black/40 p-5 border border-neon-green/30">
                        <h3 class="text-cyber-400 font-semibold mb-3">Ejemplo: ${ex.desc}</h3>
                        <pre><code>${ex.code}</code></pre>
                    </div>
                `).join('') : ''}
            </div>

            <!-- Botón Plegable -->
            <button class="exercise-toggle">
                <i data-lucide="edit-3" class="w-5 h-5"></i> Ejercicios de Codificación
            </button>
            
            <!-- Contenedor Plegable -->
            <div class="exercise-content">
                <div class="space-y-4">
                    ${topic.exercises ? topic.exercises.map( (exe, idx) => `
                        <div class="bg-black/50 p-4 border-l-2 border-neon-green">
                            <p class="text-sm mb-2 font-medium">${idx + 1}. ${exe.instruction}</p>
                            <code class="text-xs italic">${exe.codeChallenge}</code>
                        </div>
                   `).join('') : ''}
                </div>
            </div>
        </section>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTopics();
});
// Función para generar un bip retro estilo terminal
function playBip() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'square'; // Sonido tipo 8-bits
    oscillator.frequency.setValueAtTime(800, context.currentTime); // Frecuencia del bip
    
    gainNode.gain.setValueAtTime(0.1, context.currentTime); // Volumen bajo
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.1);
}

// Evento de clic actualizado
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.exercise-toggle');
    if (btn) {
        // Reproducir sonido
        playBip();
        
        // Alternar contenido
        const content = btn.nextElementSibling;
        content.classList.toggle('active');
    }
});

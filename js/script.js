const topics = [
    {
        title: "1. Introducción a la POO y Entorno Java",
        concept: "La Programación Orientada a Objetos (POO) es un modelo que organiza el software en torno a datos u objetos. En Java, el entorno se basa en la JVM (Máquina Virtual) para ejecutar bytecode, el JDK para desarrollo y paquetes para organizar clases de forma lógica.",
        e1: "package com.universidad;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Entorno Java Listo\");\n    }\n}",
        e2: "System.out.println(\"Versión: \" + System.getProperty(\"java.version\"));",
        x1: "Explicar la diferencia entre JDK, JRE y JVM.",
        x2: "Crear una estructura de paquetes com.proyecto.modelo."
    },
    {
        title: "2. Clases y Objetos en Java",
        concept: "Una clase es el plano que define atributos y métodos. Un objeto es la instancia concreta de esa clase que vive en la memoria RAM.",
        e1: "class Carro { String marca; }",
        e2: "Carro miAuto = new Carro();\nmiAuto.marca = \"Toyota\";",
        x1: "Diseñar una clase 'Libro' con 5 atributos.",
        x2: "Instanciar 3 objetos de la clase 'Persona'."
    },
    {
        title: "3. Atributos, Métodos y Encapsulamiento",
        concept: "El encapsulamiento oculta el estado interno del objeto usando modificadores 'private' y exponiendo métodos públicos 'getters' y 'setters' para validar datos.",
        e1: "private double saldo;\npublic double getSaldo() { return saldo; }",
        e2: "public void setEdad(int e) {\n    if(e > 0) this.edad = e;\n}",
        x1: "Validar que un password tenga más de 8 caracteres.",
        x2: "Restringir que un saldo no sea negativo."
    },
    {
        title: "4. Constructores y Representación de Objetos",
        concept: "Los constructores inicializan el objeto. El método toString() define cómo se muestra el objeto al imprimirlo como texto.",
        e1: "public Persona(String n) { this.nombre = n; }",
        e2: "@Override public String toString() {\n    return \"Nombre: \" + nombre;\n}",
        x1: "Crear 3 constructores sobrecargados para 'Fecha'.",
        x2: "Implementar toString() en formato JSON."
    },
    {
        title: "5. PENDIENTE",
        concept: "Tema no suministrado en las entradas.",
        e1: "// Pendiente", e2: "// Pendiente",
        x1: "Pendiente.", x2: "Pendiente."
    },
    {
        title: "6. Herencia en Java",
        concept: "Permite que una clase herede de otra usando 'extends'. 'super()' se usa para acceder a miembros del padre.",
        e1: "class Estudiante extends Persona { }",
        e2: "public Estudiante() { super(); }",
        x1: "Crear jerarquía Animal -> Mamífero.",
        x2: "Usar super para llamar a un método sobreescrito."
    },
    {
        title: "7. Polimorfismo y Sobreescritura",
        concept: "Capacidad de un objeto de comportarse de varias formas. @Override permite que el hijo cambie el comportamiento del padre.",
        e1: "Animal a = new Perro(); a.hacerSonido();",
        e2: "@Override void sonido() { System.out.println(\"Guau\"); }",
        x1: "Sistema de pagos polimórfico (Efectivo/Tarjeta).",
        x2: "Explicar diferencia entre Sobrecarga y Sobreescritura."
    },
    {
        title: "8. Clases Abstractas e Interfaces",
        concept: "Abstractas: Clases base que no se instancian. Interfaces: Contratos de comportamiento puro.",
        e1: "interface Volable { void volar(); }",
        e2: "abstract class Forma { abstract void area(); }",
        x1: "Implementar Interfaz Musical en Guitarra.",
        x2: "Crear clase abstracta Vehiculo."
    },
    {
        title: "9. Composición y Modularización",
        concept: "Relación 'tiene-un'. Permite construir sistemas complejos inyectando objetos en otros.",
        e1: "class Motor { } class Carro { Motor m; }",
        e2: "public Carro(Motor m) { this.m = m; }",
        x1: "Modelar un Celular con Bateria y Pantalla.",
        x2: "Refactorizar un sistema de herencia a composición."
    },
    {
        title: "10. PENDIENTE",
        concept: "Tema no suministrado en las entradas.",
        e1: "// Pendiente", e2: "// Pendiente",
        x1: "Pendiente.", x2: "Pendiente."
    },
    {
        title: "11. Manejo de Errores y Excepciones",
        concept: "Uso de try, catch, throw y finally para gestionar fallos inesperados en el programa.",
        e1: "try { int x = 10/0; } catch(Exception e) { }",
        e2: "throw new Exception(\"Error Crítico\");",
        x1: "Crear excepción personalizada 'EdadInvalida'.",
        x2: "Usar finally para cerrar un archivo."
    },
    {
        title: "12. Colecciones y Estructuras de Datos",
        concept: "Uso de List (ArrayList), Set (HashSet) y Map (HashMap) para gestionar grupos de objetos.",
        e1: "List<String> lista = new ArrayList<>();",
        e2: "Map<Integer, String> mapa = new HashMap<>();",
        x1: "Eliminar duplicados usando un Set.",
        x2: "Crear un diccionario usando un Map."
    },
    {
        title: "13. Lectura y Escritura de Archivos",
        concept: "Persistencia de datos en disco usando flujos de lectura y escritura para .txt y .csv.",
        e1: "FileWriter f = new FileWriter(\"datos.txt\");",
        e2: "BufferedReader b = new BufferedReader(new FileReader(\"d.csv\"));",
        x1: "Contar cuántas palabras hay en un archivo txt.",
        x2: "Exportar una lista de objetos a CSV."
    },
    {
        title: "14. Buenas Prácticas y Refactorización",
        concept: "Clean Code y principios SOLID. Herramientas como SonarLint ayudan a mejorar la mantenibilidad.",
        e1: "int diasDePlazo = 5; // Nombre descriptivo",
        e2: "void procesar() { validar(); calcular(); }",
        x1: "Corregir 3 avisos de SonarLint en un código.",
        x2: "Aplicar el principio de Responsabilidad Única."
    }
];

// Generar Contenido
const main = document.getElementById('main-content');
topics.forEach(it => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
        <h2>${it.title}</h2>
        <p><span class="label">[CONCEPTO]:</span> ${it.concept}</p>
        <span class="label">[APLICACIÓN 1]:</span><div class="code-block">${it.e1}</div>
        <span class="label">[APLICACIÓN 2]:</span><div class="code-block">${it.e2}</div>
        <button class="btn-toggle" onclick="toggle(this)">[+] VER EJERCICIOS DE EVALUACIÓN</button>
        <div class="exercise-panel">
            <span class="label">Retos sin solución:</span>
            <ul><li>${it.x1}</li><li>${it.x2}</li></ul>
        </div>
    `;
    main.appendChild(div);
});

// Función Toggle + Sonido
function toggle(btn) {
    const actx = new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator();
    o.connect(actx.destination); o.start(); o.stop(actx.currentTime + 0.1);

    const panel = btn.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        btn.innerText = "[+] VER EJERCICIOS DE EVALUACIÓN";
    } else {
        panel.style.display = "block";
        btn.innerText = "[-] OCULTAR EJERCICIOS";
    }
}

// Efecto Escritura Título
const text = "PROYECTO_JAVA_POO";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("main-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type();

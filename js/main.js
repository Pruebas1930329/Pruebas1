// ===== TOPICS DATA =====
const topics = [
    {
        id: 1,
        title: "Introducción a la POO y Entorno de Desarrollo en Java",
        icon: "rocket",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                La <strong class="text-white">Programación Orientada a Objetos (POO)</strong> es un paradigma de programación que organiza el software alrededor de <em>objetos</em>, en lugar de funciones y lógica secuencial. Este enfoque permite modelar el mundo real de forma natural, donde cada objeto tiene <strong class="text-cyber-400">atributos</strong> (datos) y <strong class="text-cyber-400">métodos</strong> (comportamiento).
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Pilares de la POO</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                    <div class="p-3 rounded-lg bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-1">Encapsulamiento</div>
                        <div class="text-gray-500 text-xs">Ocultar detalles internos</div>
                    </div>
                    <div class="p-3 rounded-lg bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-1">Herencia</div>
                        <div class="text-gray-500 text-xs">Reutilizar código padre</div>
                    </div>
                    <div class="p-3 rounded-lg bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-1">Polimorfismo</div>
                        <div class="text-gray-500 text-xs">Múltiples formas</div>
                    </div>
                    <div class="p-3 rounded-lg bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-1">Abstracción</div>
                        <div class="text-gray-500 text-xs">Modelar lo esencial</div>
                    </div>
                </div>
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">
                <strong class="text-white">Java</strong> es un lenguaje compilado e interpretado: el código fuente se compila a <em>bytecode</em> (archivos .class) que la <strong class="text-cyber-400">JVM</strong> (Java Virtual Machine) ejecuta en cualquier plataforma. Esto significa que un programa Java escrito en Windows puede ejecutarse en Linux o macOS sin modificarlo — el principio <em>"Write Once, Run Anywhere"</em>.
            </p>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">JDK</strong> (Java Development Kit): Conjunto de herramientas para desarrollar en Java. Incluye el compilador <code class="text-cyber-300">javac</code>, la JVM, y bibliotecas estándar.</li>
                <li><strong class="text-white">JRE</strong> (Java Runtime Environment): Entorno mínimo para <em>ejecutar</em> aplicaciones Java. Viene incluido en el JDK.</li>
                <li><strong class="text-white">JVM</strong> (Java Virtual Machine): Máquina virtual que interpreta el bytecode y lo ejecuta en la máquina real.</li>
            </ul>
            <p class="text-gray-300 leading-relaxed mb-6">
                Respecto a los <strong class="text-white">IDEs</strong>, existen varias opciones poderosas para programar en Java:
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-xl bg-cyber-900/30 border border-cyber-800/50">
                    <div class="font-semibold text-white mb-2">🟢 IntelliJ IDEA</div>
                    <p class="text-sm text-gray-400">El más popular. Autocompletado inteligente, refactoring avanzado, soporte nativo para Maven/Gradle. Versión Community gratuita.</p>
                </div>
                <div class="p-4 rounded-xl bg-cyber-900/30 border border-cyber-800/50">
                    <div class="font-semibold text-white mb-2">🔵 Eclipse</div>
                    <p class="text-sm text-gray-400">IDE clásico y gratuito. Basado en plugins, muy personalizable. Ampliamente usado en entornos empresariales.</p>
                </div>
                <div class="p-4 rounded-xl bg-cyber-900/30 border border-cyber-800/50">
                    <div class="font-semibold text-white mb-2">🟠 NetBeans</div>
                    <p class="text-sm text-gray-400">Proyecto Apache. Ideal para principiantes por su sencillez. Soporte para Java SE, EE y consecución de GUIs.</p>
                </div>
                <div class="p-4 rounded-xl bg-cyber-900/30 border border-cyber-800/50">
                    <div class="font-semibold text-white mb-2">🟣 VS Code</div>
                    <p class="text-sm text-gray-400">Editor ligero con extensiones de Java. Excelente para proyectos pequeños y desarrollo rápido con el paquete "Java Extension Pack".</p>
                </div>
            </div>
            <p class="text-gray-300 leading-relaxed">
                Los <strong class="text-white">paquetes</strong> en Java son espacios de nombres que organizan clases relacionadas. Se declaran con <code class="text-cyber-300">package com.miempresa.proyecto;</code> y se importan con <code class="text-cyber-300">import java.util.ArrayList;</code>. Evitan conflictos de nombres y facilitan la localización de clases.
            </p>
        `,
        examples: [
            {
                title: "Primer programa Hola Mundo",
                description: "El clásico primer programa en Java que todo desarrollador escribe. Demuestra la estructura básica: clase, método main y salida por consola.",
                code: `<span class="keyword">public class</span> <span class="type">HolaMundo</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"¡Hola, Mundo de Java!"</span>);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Bienvenido a la POO"</span>);
    }
}`
            },
            {
                title: "Uso de paquetes y la clase Scanner",
                description: "Ejemplo que muestra la importación de paquetes estándar de Java y el uso de Scanner para lectura de datos por teclado.",
                code: `<span class="keyword">package</span> com.universidad.poo;

<span class="keyword">import</span> java.util.Scanner;

<span class="keyword">public class</span> <span class="type">EntradaDatos</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Scanner</span> sc = <span class="keyword">new</span> <span class="type">Scanner</span>(<span class="type">System</span>.in);

        <span class="type">System</span>.out.<span class="method">print</span>(<span class="string">"¿Cuál es tu nombre? "</span>);
        <span class="type">String</span> nombre = sc.<span class="method">nextLine</span>();

        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Hola, "</span> + nombre + <span class="string">". ¡Bienvenido!"</span>);
        sc.<span class="method">close</span>();
    }
}`
            }
        ],
        exercises: [
            {
                title: "Configuración del entorno",
                description: "Escribe un programa que imprima en consola la versión de Java en ejecución, el nombre del sistema operativo y el nombre del usuario del sistema usando las propiedades de System.",
                difficulty: "Básico"
            },
            {
                title: "Calculadora por consola",
                description: "Crea un programa que lea dos números enteros y un operador (+, -, *, /) por teclado usando Scanner, y muestre el resultado. Debe manejar la división por cero mostrando un mensaje de error.",
                difficulty: "Intermedio"
            }
        ]
    },
    {
        id: 2,
        title: "Clases y Objetos en Java",
        icon: "boxes",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Una <strong class="text-white">clase</strong> es una plantilla o molde que define las propiedades y comportamientos que tendrán los objetos creados a partir de ella. Un <strong class="text-white">objeto</strong> es una instancia concreta de una clase:_posee su propia copia de los atributos y puede ejecutar sus métodos.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Analogía Clase vs. Objeto</div>
                <div class="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
                    <div class="text-center p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-3xl mb-2">🏭</div>
                        <div class="text-cyber-400 font-bold">Clase</div>
                        <div class="text-gray-500 text-sm">Plano / Molde</div>
                    </div>
                    <div class="text-2xl text-gray-600">→</div>
                    <div class="text-center p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-3xl mb-2">🚗🚗🚗</div>
                        <div class="text-cyber-400 font-bold">Objetos</div>
                        <div class="text-gray-500 text-sm">Instancias únicas</div>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">Atributos</strong>: Variables que almacenan el estado del objeto. Se declaran dentro de la clase.</li>
                <li><strong class="text-white">Métodos</strong>: Funciones que definen el comportamiento del objeto.</li>
                <li><strong class="text-white">Instanciación</strong>: Proceso de crear un objeto usando <code class="text-cyber-300">new</code>.</li>
                <li><strong class="text-white">Referencia</strong>: Variable que apunta al objeto en memoria (no es el objeto en sí).</li>
            </ul>
            <p class="text-gray-300 leading-relaxed">
                Cuando se usa <code class="text-cyber-300">new Clase()</code>, Java reserva memoria para el objeto, inicializa sus atributos con valores por defecto y devuelve una referencia que se almacena en la variable. Dos objetos distintos de la misma clase pueden tener atributos con valores diferentes.
            </p>
        `,
        examples: [
            {
                title: "Clase Coche y creación de objetos",
                description: "Ejemplo fundamental que muestra la definición de una clase con atributos y métodos, y la creación de múltiples objetos con diferentes estados.",
                code: `<span class="keyword">public class</span> <span class="type">Coche</span> {
    <span class="comment">// Atributos de la clase</span>
    <span class="type">String</span> marca;
    <span class="type">String</span> modelo;
    <span class="type">int</span> anio;
    <span class="type">double</span> velocidad = <span class="number">0.0</span>;

    <span class="comment">// Métodos</span>
    <span class="keyword">void</span> <span class="method">acelerar</span>(<span class="type">double</span> incremento) {
        velocidad += incremento;
        <span class="type">System</span>.out.<span class="method">println</span>(marca + <span class="string">" aceleró a "</span> + velocidad + <span class="string">" km/h"</span>);
    }

    <span class="keyword">void</span> <span class="method">frenar</span>() {
        velocidad = <span class="number">0.0</span>;
        <span class="type">System</span>.out.<span class="method">println</span>(marca + <span class="string">" se detuvo."</span>);
    }

    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Coche</span> miCoche = <span class="keyword">new</span> <span class="type">Coche</span>();
        miCoche.marca = <span class="string">"Toyota"</span>;
        miCoche.modelo = <span class="string">"Corolla"</span>;
        miCoche.anio = <span class="number">2024</span>;

        <span class="type">Coche</span> otroCoche = <span class="keyword">new</span> <span class="type">Coche</span>();
        otroCoche.marca = <span class="string">"Honda"</span>;
        otroCoche.modelo = <span class="string">"Civic"</span>;

        miCoche.<span class="method">acelerar</span>(<span class="number">60.0</span>);
        otroCoche.<span class="method">acelerar</span>(<span class="number">80.0</span>);
    }
}`
            },
            {
                title: "Clase Estudiante con comportamiento",
                description: "Ejemplo que demuestra cómo los objetos gestionan su propio estado interno, modelando un estudiante con notas y cálculo de promedio.",
                code: `<span class="keyword">public class</span> <span class="type">Estudiante</span> {
    <span class="type">String</span> nombre;
    <span class="type">String</span> codigo;
    <span class="type">double</span>[] notas = <span class="keyword">new</span> <span class="type">double</span>[<span class="number">5</span>];

    <span class="keyword">double</span> <span class="method">calcularPromedio</span>() {
        <span class="type">double</span> suma = <span class="number">0.0</span>;
        <span class="keyword">for</span> (<span class="type">double</span> n : notas) {
            suma += n;
        }
        <span class="keyword">return</span> suma / notas.length;
    }

    <span class="type">String</span> <span class="method">obtenerEstado</span>() {
        <span class="keyword">return</span> <span class="method">calcularPromedio</span>() >= <span class="number">3.0</span> ? <span class="string">"Aprobado"</span> : <span class="string">"Reprobado"</span>;
    }

    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Estudiante</span> e = <span class="keyword">new</span> <span class="type">Estudiante</span>();
        e.nombre = <span class="string">"María García"</span>;
        e.codigo = <span class="string">"U2024001"</span>;
        e.notas = <span class="keyword">new</span> <span class="type">double</span>[]{<span class="number">4.5</span>, <span class="number">3.8</span>, <span class="number">4.0</span>, <span class="number">3.5</span>, <span class="number">4.2</span>};

        <span class="type">System</span>.out.<span class="method">println</span>(e.nombre + <span class="string">" — Promedio: "</span>
            + <span class="type">String</span>.<span class="method">format</span>(<span class="string">"%.2f"</span>, e.<span class="method">calcularPromedio</span>()));
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Estado: "</span> + e.<span class="method">obtenerEstado</span>());
    }
}`
            }
        ],
        exercises: [
            {
                title: "Clase Libro",
                description: "Crea una clase Libro con atributos titulo, autor, anio y paginas. Agrega métodos para mostrar la información del libro y otro método que determine si el libro es considerado 'antiguo' (anio < 2000). Crea al menos 2 objetos y prueba los métodos.",
                difficulty: "Básico"
            },
            {
                title: "Clase CuentaBancaria",
                description: "Diseña una clase CuentaBancaria con atributos titular, numeroCuenta y saldo. Implementa métodos depositar(monto), retirar(monto) que valide que hay saldo suficiente, y consultarSaldo(). Crea simulaciones donde se hagan múltiples transacciones entre dos cuentas.",
                difficulty: "Intermedio"
            }
        ]
    },
    {
        id: 3,
        title: "Atributos, Métodos y Encapsulamiento",
        icon: "shield",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                El <strong class="text-white">encapsulamiento</strong> es el principio de ocultar los detalles internos de un objeto y exponer solo lo necesario mediante una interfaz controlada. En Java, esto se logra usando <strong class="text-cyber-400">modificadores de acceso</strong> y métodos <strong class="text-cyber-400">getters/setters</strong>.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Modificadores de Acceso en Java</div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm mt-2">
                        <thead>
                            <tr class="text-cyber-400">
                                <th class="text-left p-2 border-b border-cyber-700/30">Modificador</th>
                                <th class="text-center p-2 border-b border-cyber-700/30">Misma Clase</th>
                                <th class="text-center p-2 border-b border-cyber-700/30">Mismo Paquete</th>
                                <th class="text-center p-2 border-b border-cyber-700/30">Subclase</th>
                                <th class="text-center p-2 border-b border-cyber-700/30">Otro Paquete</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-300">
                            <tr><td class="p-2 font-mono text-cyber-300">public</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td></tr>
                            <tr><td class="p-2 font-mono text-cyber-300">protected</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td><td class="text-center p-2">❌</td></tr>
                            <tr><td class="p-2 font-mono text-cyber-300">(default)</td><td class="text-center p-2">✅</td><td class="text-center p-2">✅</td><td class="text-center p-2">❌</td><td class="text-center p-2">❌</td></tr>
                            <tr><td class="p-2 font-mono text-cyber-300">private</td><td class="text-center p-2">✅</td><td class="text-center p-2">❌</td><td class="text-center p-2">❌</td><td class="text-center p-2">❌</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">Atributos privados</strong>: Se declaran con <code class="text-cyber-300">private</code> para que no puedan ser modificados directamente desde fuera de la clase.</li>
                <li><strong class="text-white">Getters</strong>: Métodos públicos que permiten <em>leer</em> el valor de un atributo privado. Convención: <code class="text-cyber-300">getNombreAtributo()</code>.</li>
                <li><strong class="text-white">Setters</strong>: Métodos públicos que permiten <em>modificar</em> un atributo privado, normalmente con validación. Convención: <code class="text-cyber-300">setNombreAtributo(valor)</code>.</li>
                <li><strong class="text-white">Ventajas</strong>: Protege la integridad de los datos, permite validar antes de asignar, y facilita el mantenimiento del código.</li>
            </ul>
        `,
        examples: [
            {
                title: "Clase Persona con encapsulamiento completo",
                description: "Ejemplo completo de encapsulamiento: atributos privados, getters, setters con validación y protección de datos internos.",
                code: `<span class="keyword">public class</span> <span class="type">Persona</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">int</span> edad;
    <span class="keyword">private</span> <span class="type">String</span> correo;

    <span class="comment">// Getter de nombre</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getNombre</span>() {
        <span class="keyword">return</span> nombre;
    }

    <span class="comment">// Setter de nombre con validación</span>
    <span class="keyword">public void</span> <span class="method">setNombre</span>(<span class="type">String</span> nombre) {
        <span class="keyword">if</span> (nombre != <span class="keyword">null</span> && !nombre.<span class="method">isEmpty</span>()) {
            <span class="keyword">this</span>.nombre = nombre;
        } <span class="keyword">else</span> {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Nombre inválido"</span>);
        }
    }

    <span class="comment">// Setter de edad con validación</span>
    <span class="keyword">public void</span> <span class="method">setEdad</span>(<span class="type">int</span> edad) {
        <span class="keyword">if</span> (edad >= <span class="number">0</span> && edad <= <span class="number">150</span>) {
            <span class="keyword">this</span>.edad = edad;
        } <span class="keyword">else</span> {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Edad inválida"</span>);
        }
    }

    <span class="keyword">public</span> <span class="type">int</span> <span class="method">getEdad</span>() {
        <span class="keyword">return</span> edad;
    }

    <span class="keyword">public void</span> <span class="method">setCorreo</span>(<span class="type">String</span> correo) {
        <span class="keyword">if</span> (correo != <span class="keyword">null</span> && correo.<span class="method">contains</span>(<span class="string">"@"</span>)) {
            <span class="keyword">this</span>.correo = correo;
        }
    }
}`
            },
            {
                title: "Clase CuentaBancaria encapsulada",
                description: "Modelo de cuenta bancaria donde el saldo no puede ser negativo y las transacciones están controladas por validaciones en los setters y métodos.",
                code: `<span class="keyword">public class</span> <span class="type">CuentaBancaria</span> {
    <span class="keyword">private</span> <span class="type">String</span> titular;
    <span class="keyword">private</span> <span class="type">double</span> saldo;

    <span class="keyword">public</span> <span class="method">CuentaBancaria</span>(<span class="type">String</span> titular, <span class="type">double</span> saldoInicial) {
        <span class="keyword">this</span>.titular = titular;
        <span class="keyword">this</span>.saldo = saldoInicial >= <span class="number">0</span> ? saldoInicial : <span class="number">0</span>;
    }

    <span class="keyword">public void</span> <span class="method">depositar</span>(<span class="type">double</span> monto) {
        <span class="keyword">if</span> (monto > <span class="number">0</span>) {
            saldo += monto;
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Depositado: $"</span> + monto);
        } <span class="keyword">else</span> {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Monto inválido para depósito"</span>);
        }
    }

    <span class="keyword">public void</span> <span class="method">retirar</span>(<span class="type">double</span> monto) {
        <span class="keyword">if</span> (monto > <span class="number">0</span> && saldo >= monto) {
            saldo -= monto;
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Retirado: $"</span> + monto);
        } <span class="keyword">else</span> {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Fondos insuficientes o monto inválido"</span>);
        }
    }

    <span class="keyword">public</span> <span class="type">double</span> <span class="method">getSaldo</span>() {
        <span class="keyword">return</span> saldo;
    }

    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getTitular</span>() {
        <span class="keyword">return</span> titular;
    }
}`
            }
        ],
        exercises: [
            {
                title: "Clase Producto encapsulado",
                description: "Crea una clase Producto con atributos privados: codigo, nombre, precio y stock. Implementa getters y setters con validaciones: el precio no puede ser negativo, el stock no puede ser menor a 0, y el código debe tener exactamente 5 caracteres. Agrega un método aplicarDescuento(double porcentaje) que valide el porcentaje (0-100).",
                difficulty: "Intermedio"
            },
            {
                title: "Clase Temperatura",
                description: "Diseña una clase Temperatura que almacene internamente la temperatura en grados Celsius (privada). Proporciona getters y setters que permitan leer/escribir la temperatura tanto en Celsius como en Fahrenheit (conversión automática: F = C×9/5+32). Valida que la temperatura no sea inferior al cero absoluto (-273.15°C).",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 4,
        title: "Constructores y Representación de Objetos",
        icon: "wrench",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Los <strong class="text-white">constructores</strong> son métodos especiales que se ejecutan al crear un objeto con <code class="text-cyber-300">new</code>. Su función es inicializar el estado del objeto. Comparten el nombre de la clase, no tienen tipo de retorno y pueden <strong class="text-cyber-400">sobrecargarse</strong> para ofrecer múltiples formas de construir un objeto.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Tipos de Constructores</div>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">🔹 Constructor por defecto</div>
                        <p class="text-sm text-gray-400">No recibe parámetros. Java lo genera automáticamente si no defines ningún constructor. Inicializa atributos con valores por defecto (0, null, false).</p>
                    </div>
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">🔹 Constructor parametrizado</div>
                        <p class="text-sm text-gray-400">Recibe argumentos para inicializar los atributos con valores específicos al momento de la creación del objeto.</p>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">Sobrecarga de constructores</strong>: Puedes definir múltiples constructores con distintas firmas (cantidad o tipo de parámetros). Permite crear objetos de diferentes formas.</li>
                <li><strong class="text-white">this()</strong>: Permite llamar a otro constructor de la misma clase, evitando duplicar código de inicialización.</li>
                <li><strong class="text-white">toString()</strong>: Método de la clase Object que devuelve una representación textual del objeto. Sobrescribirlo es una buena práctica para depuración y visualización.</li>
            </ul>
        `,
        examples: [
            {
                title: "Sobrecarga de constructores",
                description: "Clase Rectangulo con múltiples constructores sobrecargados y uso de this() para reutilizar código de inicialización.",
                code: `<span class="keyword">public class</span> <span class="type">Rectangulo</span> {
    <span class="keyword">private</span> <span class="type">double</span> ancho;
    <span class="keyword">private</span> <span class="type">double</span> alto;
    <span class="keyword">private</span> <span class="type">String</span> color;

    <span class="comment">// Constructor por defecto</span>
    <span class="keyword">public</span> <span class="method">Rectangulo</span>() {
        <span class="keyword">this</span>(<span class="number">1.0</span>, <span class="number">1.0</span>, <span class="string">"Blanco"</span>); <span class="comment">// Llama al constructor completo</span>
    }

    <span class="comment">// Constructor con dos parámetros</span>
    <span class="keyword">public</span> <span class="method">Rectangulo</span>(<span class="type">double</span> ancho, <span class="type">double</span> alto) {
        <span class="keyword">this</span>(ancho, alto, <span class="string">"Blanco"</span>);
    }

    <span class="comment">// Constructor completo</span>
    <span class="keyword">public</span> <span class="method">Rectangulo</span>(<span class="type">double</span> ancho, <span class="type">double</span> alto, <span class="type">String</span> color) {
        <span class="keyword">this</span>.ancho = ancho;
        <span class="keyword">this</span>.alto = alto;
        <span class="keyword">this</span>.color = color;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">toString</span>() {
        <span class="keyword">return</span> <span class="string">"Rectángulo ["</span> + color + <span class="string">"] "</span>
            + ancho + <span class="string">" x "</span> + alto;
    }

    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Rectangulo</span> r1 = <span class="keyword">new</span> <span class="type">Rectangulo</span>();
        <span class="type">Rectangulo</span> r2 = <span class="keyword">new</span> <span class="type">Rectangulo</span>(<span class="number">5.0</span>, <span class="number">3.0</span>);
        <span class="type">Rectangulo</span> r3 = <span class="keyword">new</span> <span class="type">Rectangulo</span>(<span class="number">4.0</span>, <span class="number">2.0</span>, <span class="string">"Azul"</span>);

        <span class="type">System</span>.out.<span class="method">println</span>(r1); <span class="comment">// toString() se llama automáticamente</span>
        <span class="type">System</span>.out.<span class="method">println</span>(r2);
        <span class="type">System</span>.out.<span class="method">println</span>(r3);
    }
}`
            },
            {
                title: "toString() personalizado para representación",
                description: "Clase Empleado que demuestra la diferencia entre no sobrescribir toString() y tener una representación legible con toString().",
                code: `<span class="keyword">public class</span> <span class="type">Empleado</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">String</span> cargo;
    <span class="keyword">private</span> <span class="type">double</span> salario;

    <span class="keyword">public</span> <span class="method">Empleado</span>(<span class="type">String</span> nombre, <span class="type">String</span> cargo, <span class="type">double</span> salario) {
        <span class="keyword">this</span>.nombre = nombre;
        <span class="keyword">this</span>.cargo = cargo;
        <span class="keyword">this</span>.salario = salario;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">toString</span>() {
        <span class="keyword">return</span> <span class="type">String</span>.<span class="method">format</span>(
            <span class="string">"Empleado{nombre='%s', cargo='%s', salario=$%,.2f}"</span>,
            nombre, cargo, salario
        );
    }

    <span class="comment">// Sin toString(): imprime Empleado@7a81197d</span>
    <span class="comment">// Con toString(): imprime Empleado{nombre='Ana', cargo='Dev', salario=$3,500.00}</span>

    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Empleado</span> emp = <span class="keyword">new</span> <span class="type">Empleado</span>(<span class="string">"Ana López"</span>, <span class="string">"Desarrolladora"</span>, <span class="number">3500.0</span>);
        <span class="type">System</span>.out.<span class="method">println</span>(emp);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Representación explícita: "</span> + emp.<span class="method">toString</span>());
    }
}`
            }
        ],
        exercises: [
            {
                title: "Clase Fecha con constructores",
                description: "Crea una clase Fecha con atributos dia, mes y anio. Implementa tres constructores: uno por defecto (fecha actual simulada: 1/1/2025), otro que reciba dia, mes y anio, y otro que reciba solo anio (1/1/anio). Sobrescribe toString() para mostrar la fecha en formato 'dd/mm/aaaa'. Valida que los rangos sean correctos.",
                difficulty: "Intermedio"
            },
            {
                title: "Clase Matriz con toString() visual",
                description: "Diseña una clase Matriz que almacene una matriz de enteros de nxm. Implementa constructores: Matriz(int n, int m) que inicializa con ceros, y Matriz(int[][] datos). Sobrescribe toString() para que imprima la matriz de forma tabulada, con alineación de columnas.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 5,
        title: "Tema 5 — Pendiente",
        icon: "clock",
        pending: true,
        concept: `<div class="text-center py-16"><div class="text-6xl mb-4">⏳</div><h3 class="text-2xl font-bold text-white mb-2">Contenido en preparación</h3><p class="text-gray-400">Este tema será publicado próximamente por el equipo del curso.</p></div>`,
        examples: [],
        exercises: []
    },
    {
        id: 6,
        title: "Herencia en Java",
        icon: "git-branch",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                La <strong class="text-white">herencia</strong> es un mecanismo que permite crear una nueva clase basada en una existente, heredando sus atributos y métodos. La clase existente se llama <strong class="text-cyber-400">superclase</strong> (padre) y la nueva clase es la <strong class="text-cyber-400">subclase</strong> (hijo). Se declara con la palabra clave <code class="text-cyber-300">extends</code>.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Jerarquía de Herencia</div>
                <div class="flex flex-col items-center py-4 gap-2">
                    <div class="px-6 py-2 rounded-lg bg-cyber-600/20 border border-cyber-500/40 text-cyber-300 font-semibold">Animal (Superclase)</div>
                    <div class="w-px h-4 bg-cyber-700"></div>
                    <div class="flex gap-6">
                        <div class="flex flex-col items-center">
                            <div class="w-px h-4 bg-cyber-700"></div>
                            <div class="px-4 py-2 rounded-lg bg-cyber-800/40 border border-cyber-700/30 text-gray-300 text-sm">Perro</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-px h-4 bg-cyber-700"></div>
                            <div class="px-4 py-2 rounded-lg bg-cyber-800/40 border border-cyber-700/30 text-gray-300 text-sm">Gato</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-px h-4 bg-cyber-700"></div>
                            <div class="px-4 py-2 rounded-lg bg-cyber-800/40 border border-cyber-700/30 text-gray-300 text-sm">Pájaro</div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">extends</strong>: Palabra clave para indicar que una clase hereda de otra. Java solo permite herencia simple (una sola superclase directa).</li>
                <li><strong class="text-white">super</strong>: Hace referencia a la superclase. <code class="text-cyber-300">super()</code> llama al constructor padre; <code class="text-cyber-300">super.atributo</code> accede a un atributo del padre.</li>
                <li><strong class="text-white">protected</strong>: Modificador de acceso que permite que la subclase acceda al miembro, pero clases externas no.</li>
                <li><strong class="text-white">Sobreescritura (@Override)</strong>: La subclase puede reimplementar un método del padre para proporcionar un comportamiento específico.</li>
            </ul>
        `,
        examples: [
            {
                title: "Herencia simple con Animal y Perro",
                description: "Ejemplo completo de herencia donde Perro extiende de Animal, usando super() para llamar al constructor padre y @Override para personalizar comportamiento.",
                code: `<span class="keyword">public class</span> <span class="type">Animal</span> {
    <span class="keyword">protected</span> <span class="type">String</span> nombre;
    <span class="keyword">protected</span> <span class="type">int</span> edad;

    <span class="keyword">public</span> <span class="method">Animal</span>(<span class="type">String</span> nombre, <span class="type">int</span> edad) {
        <span class="keyword">this</span>.nombre = nombre;
        <span class="keyword">this</span>.edad = edad;
    }

    <span class="keyword">public void</span> <span class="method">comer</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(nombre + <span class="string">" está comiendo."</span>);
    }

    <span class="keyword">public void</span> <span class="method">dormir</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(nombre + <span class="string">" está durmiendo."</span>);
    }
}

<span class="keyword">public class</span> <span class="type">Perro</span> <span class="keyword">extends</span> <span class="type">Animal</span> {
    <span class="keyword">private</span> <span class="type">String</span> raza;

    <span class="keyword">public</span> <span class="method">Perro</span>(<span class="type">String</span> nombre, <span class="type">int</span> edad, <span class="type">String</span> raza) {
        <span class="keyword">super</span>(nombre, edad); <span class="comment">// Llamada al constructor de Animal</span>
        <span class="keyword">this</span>.raza = raza;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public void</span> <span class="method">comer</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(nombre + <span class="string">" devora su hueso con ganas."</span>);
    }

    <span class="keyword">public void</span> <span class="method">ladrar</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(nombre + <span class="string">": ¡Guau! ¡Guau!"</span>);
    }
}`
            },
            {
                title: "Jerarquía de Vehículos con super()",
                description: "Modelo de herencia donde Vehiculo es la superclase y Coche y Moto heredan de ella, usando super para acceder a constructores y métodos del padre.",
                code: `<span class="keyword">public class</span> <span class="type">Vehiculo</span> {
    <span class="keyword">protected</span> <span class="type">String</span> marca;
    <span class="keyword">protected</span> <span class="type">double</span> velocidad = <span class="number">0</span>;

    <span class="keyword">public</span> <span class="method">Vehiculo</span>(<span class="type">String</span> marca) {
        <span class="keyword">this</span>.marca = marca;
    }

    <span class="keyword">public void</span> <span class="method">acelerar</span>(<span class="type">double</span> kmh) {
        velocidad += kmh;
        <span class="type">System</span>.out.<span class="method">println</span>(marca + <span class="string">" acelerando a "</span> + velocidad + <span class="string">" km/h"</span>);
    }

    <span class="keyword">public</span> <span class="type">String</span> <span class="method">tipoVehiculo</span>() {
        <span class="keyword">return</span> <span class="string">"Vehículo genérico"</span>;
    }
}

<span class="keyword">public class</span> <span class="type">Coche</span> <span class="keyword">extends</span> <span class="type">Vehiculo</span> {
    <span class="keyword">private</span> <span class="type">int</span> puertas;

    <span class="keyword">public</span> <span class="method">Coche</span>(<span class="type">String</span> marca, <span class="type">int</span> puertas) {
        <span class="keyword">super</span>(marca);
        <span class="keyword">this</span>.puertas = puertas;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">tipoVehiculo</span>() {
        <span class="keyword">return</span> <span class="string">"Coche de "</span> + puertas + <span class="string">" puertas"</span>;
    }
}

<span class="keyword">public class</span> <span class="type">Moto</span> <span class="keyword">extends</span> <span class="type">Vehiculo</span> {
    <span class="keyword">private</span> <span class="type">boolean</span> tieneSidecar;

    <span class="keyword">public</span> <span class="method">Moto</span>(<span class="type">String</span> marca, <span class="type">boolean</span> tieneSidecar) {
        <span class="keyword">super</span>(marca);
        <span class="keyword">this</span>.tieneSidecar = tieneSidecar;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">tipoVehiculo</span>() {
        <span class="keyword">return</span> tieneSidecar ? <span class="string">"Moto con sidecar"</span> : <span class="string">"Moto"</span>;
    }
}`
            }
        ],
        exercises: [
            {
                title: "Jerarquía de Empleados",
                description: "Crea una clase base Empleado con atributos nombre, id y sueldoBase. Luego crea dos subclases: Gerente (agregar bonificación) y Programador (agregar horasExtras y pagoPorHora). Cada subclase debe sobrescribir un método calcularSalario() que Compute el salario total. Usa super() en los constructores.",
                difficulty: "Intermedio"
            },
            {
                title: "Sistema de Figuras geométricas",
                description: "Crea una clase Figura con atributo color y métodos area() y perimetro() (que deleguen a las subclases). Luego crea Circulo y Rectangulo que hereden de Figura y sobrescriban los métodos. Implementa un método toString() en cada clase que use super.toString() y añada información específica.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 7,
        title: "Polimorfismo y Sobreescritura de Métodos",
        icon: "shapes",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                El <strong class="text-white">polimorfismo</strong> significa "muchas formas" y es uno de los pilares más poderosos de la POO. En Java, se manifiesta cuando un objeto puede tomar múltiples formas: un objeto de tipo subclase puede ser tratado como si fuera de tipo superclase, pero ejecutará <strong class="text-cyber-400">su propia versión</strong> del método.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Tipos de Polimorfismo</div>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">🔄 Dinámico (en tiempo de ejecución)</div>
                        <p class="text-sm text-gray-400">Se produce al sobrescribir métodos (@Override). La JVM decide en tiempo de ejecución qué versión del método ejecutar, basándose en el tipo real del objeto.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">📐 Estático (en tiempo de compilación)</div>
                        <p class="text-sm text-gray-400">Se produce por sobrecarga de métodos: mismo nombre, diferentes parámetros. El compilador determina qué método llamar según los argumentos.</p>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">Sobreescritura (@Override)</strong>: La subclase redefine un método heredado. El método sobrescrito debe tener la misma firma que el método original.</li>
                <li><strong class="text-white"> Vinculación dinámica</strong>: Java determina en tiempo de ejecución qué método invocar, según el tipo real (no declarado) del objeto.</li>
                <li><strong class="text-white">Referencia polimórfica</strong>: <code class="text-cyber-300">Superclase obj = new Subclase();</code> — la variable es de tipo padre, pero el objeto es de tipo hijo.</li>
            </ul>
        `,
        examples: [
            {
                title: "Polimorfismo con Instrumentos",
                description: "Ejemplo clásico donde cada instrumento implementa su propia versión de tocar(), y el método tocarTodos() recibe la superclase y ejecuta la versión correcta en runtime.",
                code: `<span class="keyword">public class</span> <span class="type">Instrumento</span> {
    <span class="keyword">public void</span> <span class="method">tocar</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Sonando un instrumento genérico..."</span>);
    }
}

<span class="keyword">public class</span> <span class="type">Guitarra</span> <span class="keyword">extends</span> <span class="type">Instrumento</span> {
    <span class="annotation">@Override</span>
    <span class="keyword">public void</span> <span class="method">tocar</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"🎸 Rasgueando la guitarra..."</span>);
    }
}

<span class="keyword">public class</span> <span class="type">Piano</span> <span class="keyword">extends</span> <span class="type">Instrumento</span> {
    <span class="annotation">@Override</span>
    <span class="keyword">public void</span> <span class="method">tocar</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"🎹 Pulsando las teclas del piano..."</span>);
    }
}

<span class="comment">// Uso polimórfico</span>
<span class="keyword">public class</span> <span class="type">Concierto</span> {
    <span class="keyword">public static void</span> <span class="method">tocarTodos</span>(<span class="type">Instrumento</span>[] instrumentos) {
        <span class="keyword">for</span> (<span class="type">Instrumento</span> i : instrumentos) {
            i.<span class="method">tocar</span>(); <span class="comment">// Polimorfismo: se ejecuta la versión correcta</span>
        }
    }

    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Instrumento</span>[] orquesta = {
            <span class="keyword">new</span> <span class="type">Guitarra</span>(),
            <span class="keyword">new</span> <span class="type">Piano</span>(),
            <span class="keyword">new</span> <span class="type">Guitarra</span>()
        };
        <span class="method">tocarTodos</span>(orquesta);
    }
}`
            },
            {
                title: "Polimorfismo con formas geométricas",
                description: "Cada figura calcula su área de manera diferente. La referencia es de tipo Figura pero la ejecución es específica de cada subclase.",
                code: `<span class="keyword">public class</span> <span class="type">Figura</span> {
    <span class="keyword">public</span> <span class="type">double</span> <span class="method">calcularArea</span>() {
        <span class="keyword">return</span> <span class="number">0</span>;
    }
}

<span class="keyword">public class</span> <span class="type">Circulo</span> <span class="keyword">extends</span> <span class="type">Figura</span> {
    <span class="keyword">private</span> <span class="type">double</span> radio;

    <span class="keyword">public</span> <span class="method">Circulo</span>(<span class="type">double</span> radio) { <span class="keyword">this</span>.radio = radio; }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">double</span> <span class="method">calcularArea</span>() {
        <span class="keyword">return</span> <span class="type">Math</span>.PI * radio * radio;
    }
}

<span class="keyword">public class</span> <span class="type">Triangulo</span> <span class="keyword">extends</span> <span class="type">Figura</span> {
    <span class="keyword">private</span> <span class="type">double</span> base, altura;

    <span class="keyword">public</span> <span class="method">Triangulo</span>(<span class="type">double</span> base, <span class="type">double</span> altura) {
        <span class="keyword">this</span>.base = base;
        <span class="keyword">this</span>.altura = altura;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">double</span> <span class="method">calcularArea</span>() {
        <span class="keyword">return</span> base * altura / <span class="number">2</span>;
    }
}

<span class="comment">// Demostración polimórfica</span>
<span class="type">Figura</span>[] figuras = { <span class="keyword">new</span> <span class="type">Circulo</span>(<span class="number">5</span>), <span class="keyword">new</span> <span class="type">Triangulo</span>(<span class="number">4</span>, <span class="number">6</span>) };
<span class="keyword">for</span> (<span class="type">Figura</span> f : figuras) {
    <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Área: "</span> + <span class="type">String</span>.<span class="method">format</span>(<span class="string">"%.2f"</span>, f.<span class="method">calcularArea</span>()));
}`
            }
        ],
        exercises: [
            {
                title: "Sistema de Notificaciones polimórfico",
                description: "Crea una clase base Notificacion con método enviar(). Luego crea subclases: NotificacionEmail, NotificacionSMS y NotificacionPush, cada una sobrescribiendo enviar() con mensajes distintos. Crea un método enviarTodas(List<Notificacion> lista) que reciba una lista de notificaciones polimórficas y las envíe según su tipo real.",
                difficulty: "Intermedio"
            },
            {
                title: "Calculadora de descuentos polimórfica",
                description: "Crea una clase Producto con atributos nombre y precioBase. Luego crea subclases: ProductoAlimenticio (descuento 10% si vence pronto), ProductoElectronico (descuento 5% si es reacondicionado) y ProductoRopa (descuento 15% si es temporada pasada). Cada clase debe sobrescribir un método calcularPrecioFinal(). Demuestra el polimorfismo con un array de Producto.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 8,
        title: "Clases Abstractas e Interfaces",
        icon: "layers",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Las <strong class="text-white">clases abstractas</strong> y las <strong class="text-white">interfaces</strong> son herramientas fundamentales para diseñar contratos y abstracciones en Java. Ambas definen <em>qué debe hacer</em> un objeto, pero difieren en <em>cómo lo hacen</em> y en la flexibilidad que ofrecen.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Clases Abstractas vs Interfaces</div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm mt-2">
                        <thead>
                            <tr class="text-cyber-400">
                                <th class="text-left p-2 border-b border-cyber-700/30">Característica</th>
                                <th class="text-left p-2 border-b border-cyber-700/30">Clase Abstracta</th>
                                <th class="text-left p-2 border-b border-cyber-700/30">Interface</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-300">
                            <tr><td class="p-2 font-semibold">Palabra clave</td><td class="p-2"><code class="text-cyber-300">abstract class</code></td><td class="p-2"><code class="text-cyber-300">interface</code></td></tr>
                            <tr><td class="p-2 font-semibold">Métodos implementados</td><td class="p-2">Sí, puede tenerlos</td><td class="p-2">Solo default (desde Java 8)</td></tr>
                            <tr><td class="p-2 font-semibold">Atributos</td><td class="p-2">Cualquier tipo</td><td class="p-2">Solo public static final</td></tr>
                            <tr><td class="p-2 font-semibold">Herencia múltiple</td><td class="p-2">No</td><td class="p-2">Sí (implements)</td></tr>
                            <tr><td class="p-2 font-semibold">Constructor</td><td class="p-2">Sí</td><td class="p-2">No</td></tr>
                            <tr><td class="p-2 font-semibold">Se instancia</td><td class="p-2">No</td><td class="p-2">No</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ul class="concept-list">
                <li><strong class="text-white">abstract</strong>: Palabra clave para declarar que una clase o método no puede ser instanciado directamente y debe ser implementado por subclases.</li>
                <li><strong class="text-white">implements</strong>: Palabra clave que indica que una clase implementa una o varias interfaces, obligándose a definir todos sus métodos abstractos.</li>
                <li><strong class="text-white">Métodos default</strong>: Desde Java 8, las interfaces pueden tener métodos con implementación por defecto usando <code class="text-cyber-300">default</code>.</li>
            </ul>
        `,
        examples: [
            {
                title: "Clase abstracta Figura con subclases",
                description: "Ejemplo de clase abstracta que define un contrato (calcularArea) y proporciona implementación parcial (toString), mientras las subclases completan la lógica específica.",
                code: `<span class="keyword">public abstract class</span> <span class="type">Figura</span> {
    <span class="keyword">protected</span> <span class="type">String</span> color;

    <span class="keyword">public</span> <span class="method">Figura</span>(<span class="type">String</span> color) {
        <span class="keyword">this</span>.color = color;
    }

    <span class="comment">// Método abstracto: las subclases DEBEN implementarlo</span>
    <span class="keyword">public abstract</span> <span class="type">double</span> <span class="method">calcularArea</span>();

    <span class="comment">// Método concreto: heredado tal cual</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getColor</span>() {
        <span class="keyword">return</span> color;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">toString</span>() {
        <span class="keyword">return</span> <span class="keyword">this</span>.<span class="method">getClass</span>().<span class="method">getSimpleName</span>()
            + <span class="string">" ["</span> + color + <span class="string">"] área="</span>
            + <span class="type">String</span>.<span class="method">format</span>(<span class="string">"%.2f"</span>, <span class="method">calcularArea</span>());
    }
}

<span class="keyword">public class</span> <span class="type">Cuadrado</span> <span class="keyword">extends</span> <span class="type">Figura</span> {
    <span class="keyword">private</span> <span class="type">double</span> lado;

    <span class="keyword">public</span> <span class="method">Cuadrado</span>(<span class="type">double</span> lado, <span class="type">String</span> color) {
        <span class="keyword">super</span>(color);
        <span class="keyword">this</span>.lado = lado;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">double</span> <span class="method">calcularArea</span>() {
        <span class="keyword">return</span> lado * lado;
    }
}`
            },
            {
                title: "Interface Dibujable ySerializable",
                description: "Ejemplo de uso de interfaces que definen contratos. Una clase puede implementar múltiples interfaces, logrando un tipo de herencia múltiple de comportamiento.",
                code: `<span class="keyword">public interface</span> <span class="type">Dibujable</span> {
    <span class="type">void</span> <span class="method">dibujar</span>();
    <span class="type">void</span> <span class="method">redimensionar</span>(<span class="type">double</span> factor);
}

<span class="keyword">public interface</span> <span class="type">Exportable</span> {
    <span class="type">String</span> <span class="method">exportarAFormato</span>(<span class="type">String</span> formato);
}

<span class="keyword">public class</span> <span class="type">Grafico</span> <span class="keyword">implements</span> <span class="type">Dibujable</span>, <span class="type">Exportable</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">double</span> tamaño;

    <span class="keyword">public</span> <span class="method">Grafico</span>(<span class="type">String</span> nombre, <span class="type">double</span> tamaño) {
        <span class="keyword">this</span>.nombre = nombre;
        <span class="keyword">this</span>.tamaño = tamaño;
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public void</span> <span class="method">dibujar</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"🎨 Dibujando gráfico: "</span> + nombre);
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public void</span> <span class="method">redimensionar</span>(<span class="type">double</span> factor) {
        tamaño *= factor;
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Nuevo tamaño: "</span> + tamaño);
    }

    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">exportarAFormato</span>(<span class="type">String</span> formato) {
        <span class="keyword">return</span> nombre + <span class="string">" exportado como ."</span> + formato.toLowerCase();
    }
}`
            }
        ],
        exercises: [
            {
                title: "Sistema de transporte con interfaces",
                description: "Define una interface Transporte con métodos encender(), apagar() y getVelocidadMaxima(). Luego crea una clase abstracta VehiculoMotor con atributos marca y modelo, que implemente Transporte parcialmente. Crea subclases Avion y Tren. Un Avión puede implementar también una interface Volador con métodos despegar() y aterrizar(). El Tren implementa la interface Terrestre con método engancharVagon().",
                difficulty: "Avanzado"
            },
            {
                title: "Clase abstracta EmpleadoBase con interface Calculable",
                description: "Crea una interface Calculable con método double calcular(). Crea una clase abstracta EmpleadoBase con atributos nombre y tipo. Crea subclases EmpleadoFijo (salario mensual) y EmpleadoPorHora (horas * tarifa), ambas implementando Calculable para calcular su salario. Demuestra polimorfismo con un array de Calculable.",
                difficulty: "Intermedio"
            }
        ]
    },
    {
        id: 9,
        title: "Composición y Modularización del Código",
        icon: "puzzle",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                La <strong class="text-white">composición</strong> es un principio de diseño donde un objeto se construye a partir de otros objetos, estableciendo una relación <em>"tiene-un"</em> (has-a). A diferencia de la herencia (<em>"es-un"</em>), la composición favorece la <strong class="text-cyber-400">flexibilidad</strong> y el <strong class="text-cyber-400">bajo acoplamiento</strong> entre componentes.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Herencia vs Composición</div>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="p-4 rounded-xl bg-red-950/30 border border-red-700/30">
                        <div class="text-red-400 font-bold mb-2">❌ Herencia rígida</div>
                        <p class="text-sm text-gray-400">class Moto extends Vehiculo — Si cambia Vehiculo, afecta a todas las subclases. Acoplamiento fuerte.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-green-950/30 border border-green-700/30">
                        <div class="text-green-400 font-bold mb-2">✅ Composición flexible</div>
                        <p class="text-sm text-gray-400">class Moto { private Motor motor; } — Si cambia Motor, solo afecta a los que lo contienen. Desacoplamiento.</p>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">Composición</strong>: Relación fuerte donde el objeto compuesto "posee" a sus componentes. Si el compuesto se destruye, los componentes también.</li>
                <li><strong class="text-white">Agregación</strong>: Relación débil donde el objeto "usa" a otros, pero estos pueden existir independientemente.</li>
                <li><strong class="text-white">Principio</strong>: <em>"Favor composition over inheritance"</em> — prefiera componer objetos antes que crear jerarquías profundas de herencia.</li>
                <li><strong class="text-white">Modularización</strong>: Dividir el sistema en módulos independientes con responsabilidades claras y bien definidas.</li>
            </ul>
        `,
        examples: [
            {
                title: "Composición: Carro contiene Motor y Ruedas",
                description: "Ejemplo donde un Carro se compone de un Motor y múltiples Ruedas. Los componentes tienen su propio comportamiento y el Carro los coordina.",
                code: `<span class="keyword">public class</span> <span class="type">Motor</span> {
    <span class="keyword">private</span> <span class="type">int</span> caballosFuerza;
    <span class="keyword">private</span> <span class="type">boolean</span> encendido = <span class="keyword">false</span>;

    <span class="keyword">public</span> <span class="method">Motor</span>(<span class="type">int</span> caballosFuerza) {
        <span class="keyword">this</span>.caballosFuerza = caballosFuerza;
    }

    <span class="keyword">public void</span> <span class="method">encender</span>() {
        encendido = <span class="keyword">true</span>;
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Motor de "</span> + caballosFuerza + <span class="string">" HP encendido"</span>);
    }

    <span class="keyword">public void</span> <span class="method">apagar</span>() { encendido = <span class="keyword">false</span>; }
    <span class="keyword">public boolean</span> <span class="method">isEncendido</span>() { <span class="keyword">return</span> encendido; }
}

<span class="keyword">public class</span> <span class="type">Rueda</span> {
    <span class="keyword">private</span> <span class="type">double</span> presion;

    <span class="keyword">public</span> <span class="method">Rueda</span>() { <span class="keyword">this</span>.presion = <span class="number">32.0</span>; }
    <span class="keyword">public void</span> <span class="method">inflar</span>(<span class="type">double</span> presion) { <span class="keyword">this</span>.presion = presion; }
}

<span class="keyword">public class</span> <span class="type">Carro</span> {
    <span class="keyword">private final</span> <span class="type">Motor</span> motor;         <span class="comment">// Composición</span>
    <span class="keyword">private final</span> <span class="type">Rueda</span>[] ruedas;      <span class="comment">// Composición</span>

    <span class="keyword">public</span> <span class="method">Carro</span>(<span class="type">int</span> hp) {
        <span class="keyword">this</span>.motor = <span class="keyword">new</span> <span class="type">Motor</span>(hp); <span class="comment">// Carro crea su Motor</span>
        <span class="keyword">this</span>.ruedas = <span class="keyword">new</span> <span class="type">Rueda</span>[<span class="number">4</span>]; <span class="comment">// Carro crea sus Ruedas</span>
        <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i < <span class="number">4</span>; i++) ruedas[i] = <span class="keyword">new</span> <span class="type">Rueda</span>();
    }

    <span class="keyword">public void</span> <span class="method">arrancar</span>() { motor.<span class="method">encender</span>(); }
}`
            },
            {
                title: "Agregación: Universidad contiene Profesores",
                description: "Ejemplo de agregación: un Departamento contiene Profesores, pero los Profesores existen independientemente del Departamento. Seinyectan desde fuera.",
                code: `<span class="keyword">public class</span> <span class="type">Profesor</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">String</span> especialidad;

    <span class="keyword">public</span> <span class="method">Profesor</span>(<span class="type">String</span> nombre, <span class="type">String</span> especialidad) {
        <span class="keyword">this</span>.nombre = nombre;
        <span class="keyword">this</span>.especialidad = especialidad;
    }

    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getNombre</span>() { <span class="keyword">return</span> nombre; }
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getEspecialidad</span>() { <span class="keyword">return</span> especialidad; }
}

<span class="keyword">public class</span> <span class="type">Departamento</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">List</span><<span class="type">Profesor</span>> profesores = <span class="keyword">new</span> <span class="type">ArrayList</span><>();

    <span class="keyword">public</span> <span class="method">Departamento</span>(<span class="type">String</span> nombre) {
        <span class="keyword">this</span>.nombre = nombre;
    }

    <span class="comment">// Agregación: el profesor se pasa desde afuera</span>
    <span class="keyword">public void</span> <span class="method">agregarProfesor</span>(<span class="type">Profesor</span> p) {
        profesores.<span class="method">add</span>(p);
    }

    <span class="keyword">public void</span> <span class="method">listarProfesores</span>() {
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"📋 Departamento: "</span> + nombre);
        profesores.<span class="method">forEach</span>(p ->
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"  - "</span> + p.<span class="method">getNombre</span>()
                + <span class="string">" ("</span> + p.<span class="method">getEspecialidad</span>() + <span class="string">")"</span>));
    }
}`
            }
        ],
        exercises: [
            {
                title: "Composición: Computadora con componentes",
                description: "Crea una clase Computadora que se componga de Procesador, MemoriaRAM y DiscoDuro. Cada componente debe tener sus propios atributos y métodos (ej: Procesador tiene marca y velocidadGHz, con método ejecutarProceso()). La Computadora debe tener métodos encender() que llame a los métodos de inicio de cada componente, y mostrarEspecificaciones().",
                difficulty: "Intermedio"
            },
            {
                title: "Sistema de biblioteca modular",
                description: "Diseña un sistema modular donde una Biblioteca contiene Catalogo (que gestiona Libros) y ServicioPrestamo (que gestiona Préstamos). Los Libros existen independientemente (agregación). Los Préstamos solo existen dentro del servicio (composición). Implementa que Bibliota delegue responsabilidades a sus componentes internos usando composición.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 10,
        title: "Tema 10 — Pendiente",
        icon: "clock",
        pending: true,
        concept: `<div class="text-center py-16"><div class="text-6xl mb-4">⏳</div><h3 class="text-2xl font-bold text-white mb-2">Contenido en preparación</h3><p class="text-gray-400">Este tema será publicado próximamente por el equipo del curso.</p></div>`,
        examples: [],
        exercises: []
    },
    {
        id: 11,
        title: "Manejo de Errores y Excepciones",
        icon: "alert-triangle",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                El <strong class="text-white">manejo de excepciones</strong> en Java es un mecanismo robusto que permite controlar errores en tiempo de ejecución sin que el programa se detenga abruptamente. Las excepciones son objetos que representan condiciones anómalas y se propagan a través de la pila de llamadas hasta ser capturadas.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Jerarquía de Excepciones en Java</div>
                <div class="flex flex-col items-center py-4 gap-1 text-sm">
                    <div class="px-4 py-1.5 rounded bg-red-900/30 border border-red-700/30 text-red-300 font-mono">Throwable</div>
                    <div class="flex gap-8 mt-2">
                        <div class="flex flex-col items-center gap-1">
                            <div class="px-3 py-1 rounded bg-orange-900/30 border border-orange-700/30 text-orange-300 font-mono text-xs">Error</div>
                            <div class="text-xs text-gray-600">No se maneja</div>
                        </div>
                        <div class="flex flex-col items-center gap-1">
                            <div class="px-3 py-1 rounded bg-cyber-800/50 border border-cyber-600/30 text-cyber-300 font-mono text-xs">Exception</div>
                            <div class="flex gap-3 mt-1">
                                <div class="px-2 py-0.5 rounded bg-yellow-900/30 border border-yellow-700/30 text-yellow-300 font-mono text-xs">Checked</div>
                                <div class="px-2 py-0.5 rounded bg-green-900/30 border border-green-700/30 text-green-300 font-mono text-xs">Unchecked</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="concept-list mb-6">
                <li><strong class="text-white">try-catch</strong>: Bloque que intercepta excepciones. El código riesgoso va en <code class="text-cyber-300">try</code>, y el manejo del error va en <code class="text-cyber-300">catch</code>.</li>
                <li><strong class="text-white">finally</strong>: Bloque que siempre se ejecuta, haya o no excepción. Ideal para liberar recursos (cerrar archivos, conexiones).</li>
                <li><strong class="text-white">throw</strong>: Lanza manualmente una excepción. <code class="text-cyber-300">throw new IllegalArgumentException("msg")</code>.</li>
                <li><strong class="text-white">throws</strong>: Declara en la firma del método que puede lanzar una excepción checked, obligando al llamador a manejarla.</li>
                <li><strong class="text-white">Checked vs Unchecked</strong>: Checked se verifican en compilación (IOException). Unchecked ocurren en runtime (NullPointerException, ArrayIndexOutOfBoundsException).</li>
            </ul>
        `,
        examples: [
            {
                title: "try-catch-finally con múltiples excepciones",
                description: "Ejemplo completo de manejo de varias excepciones con bloques catch encadenados y un bloque finally para limpieza de recursos.",
                code: `<span class="keyword">import</span> java.util.Scanner;

<span class="keyword">public class</span> <span class="type">DivisionSegura</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">Scanner</span> sc = <span class="keyword">new</span> <span class="type">Scanner</span>(<span class="type">System</span>.in);

        <span class="keyword">try</span> {
            <span class="type">System</span>.out.<span class="method">print</span>(<span class="string">"Numerador: "</span>);
            <span class="type">int</span> num = <span class="type">Integer</span>.<span class="method">parseInt</span>(sc.<span class="method">nextLine</span>());

            <span class="type">System</span>.out.<span class="method">print</span>(<span class="string">"Denominador: "</span>);
            <span class="type">int</span> den = <span class="type">Integer</span>.<span class="method">parseInt</span>(sc.<span class="method">nextLine</span>());

            <span class="type">int</span> resultado = num / den;
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Resultado: "</span> + resultado);

        } <span class="keyword">catch</span> (<span class="type">ArithmeticException</span> e) {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"❌ Error: División por cero."</span>);
        } <span class="keyword">catch</span> (<span class="type">NumberFormatException</span> e) {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"❌ Error: Debe ingresar un número entero."</span>);
        } <span class="keyword">catch</span> (<span class="type">Exception</span> e) {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"❌ Error inesperado: "</span> + e.<span class="method">getMessage</span>());
        } <span class="keyword">finally</span> {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"✅ Operación finalizada."</span>);
            sc.<span class="method">close</span>();
        }
    }
}`
            },
            {
                title: "Excepción personalizada con throw y throws",
                description: "Creación de una excepción propia que extiende de Exception, y cómo lanzarla con throw/declararla con throws.",
                code: `<span class="comment">// Excepción personalizada</span>
<span class="keyword">public class</span> <span class="type">NotaInvalidaException</span> <span class="keyword">extends</span> <span class="type">Exception</span> {
    <span class="keyword">private</span> <span class="type">double</span> nota;

    <span class="keyword">public</span> <span class="method">NotaInvalidaException</span>(<span class="type">String</span> mensaje, <span class="type">double</span> nota) {
        <span class="keyword">super</span>(mensaje);
        <span class="keyword">this</span>.nota = nota;
    }

    <span class="keyword">public</span> <span class="type">double</span> <span class="method">getNota</span>() {
        <span class="keyword">return</span> nota;
    }
}

<span class="comment">// Uso con throws y throw</span>
<span class="keyword">public class</span> <span class="type">Estudiante</span> {
    <span class="keyword">private</span> <span class="type">String</span> nombre;
    <span class="keyword">private</span> <span class="type">double</span>[] notas;

    <span class="comment">// Declara que puede lanzar la excepción</span>
    <span class="keyword">public void</span> <span class="method">setNota</span>(<span class="type">int</span> indice, <span class="type">double</span> nota)
            <span class="keyword">throws</span> <span class="type">NotaInvalidaException</span> {
        <span class="keyword">if</span> (nota < <span class="number">0</span> || nota > <span class="number">5</span>) {
            <span class="comment">// Lanza la excepción manualmente</span>
            <span class="keyword">throw new</span> <span class="type">NotaInvalidaException</span>(
                <span class="string">"La nota debe estar entre 0 y 5."</span>, nota);
        }
        notas[indice] = nota;
    }
}

<span class="comment">// Quien llama debe manejar con try-catch</span>
<span class="keyword">try</span> {
    est.<span class="method">setNota</span>(<span class="number">0</span>, <span class="number">6.5</span>);
} <span class="keyword">catch</span> (<span class="type">NotaInvalidaException</span> e) {
    <span class="type">System</span>.out.<span class="method">println</span>(e.<span class="method">getMessage</span>());
}`
            }
        ],
        exercises: [
            {
                title: "Validador de edad con excepción propia",
                description: "Crea una excepción personalizada llamada EdadInvalidaException que extienda de IllegalArgumentException. Luego crea una clase RegistroCivil con método registrarPersona(String nombre, int edad) que lance esta excepción si la edad es menor a 0 o mayor a 120. Maneja la excepción con try-catch mostrando un mensaje amigable.",
                difficulty: "Intermedio"
            },
            {
                title: "Lector de números con finally",
                description: "Escribe un programa que lea 5 números enteros del teclado usando Scanner. Cada número debe ser validado: si hay una InputMismatchException (no es entero) debe mostrar 'Entrada inválida' y continuar con el siguiente. Usa un bloque finally para garantizar que el Scanner se cierre correctamente, incluso si ocurre una excepción inesperada.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
        id: 12,
        title: "Colecciones y Estructuras de Datos",
        icon: "database",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                El <strong class="text-white">Framework de Colecciones</strong> de Java (java.util) proporciona estructuras de datos listas para usar que facilitan almacenar, manipular y recorrer grupos de objetos. Las tres interfaces principales son <strong class="text-cyber-400">List</strong>, <strong class="text-cyber-400">Set</strong> y <strong class="text-cyber-400">Map</strong>, cada una con características y casos de uso distintos.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Jerarquía de Colecciones</div>
                <div class="grid md:grid-cols-3 gap-4 mt-4">
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">📋 List</div>
                        <p class="text-xs text-gray-400 mb-2">Ordenada, permite duplicados</p>
                        <div class="text-xs font-mono text-gray-500">
                            • ArrayList ← más usada<br>
                            • LinkedList<br>
                            • Vector (thread-safe)
                        </div>
                    </div>
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">🎯 Set</div>
                        <p class="text-xs text-gray-400 mb-2">No duplicados</p>
                        <div class="text-xs font-mono text-gray-500">
                            • HashSet ← más rápido<br>
                            • LinkedHashSet (orden inserción)<br>
                            • TreeSet (orden natural)
                        </div>
                    </div>
                    <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30">
                        <div class="text-cyber-400 font-bold mb-2">🗺️ Map</div>
                        <p class="text-xs text-gray-400 mb-2">Pares clave-valor</p>
                        <div class="text-xs font-mono text-gray-500">
                            • HashMap ← más usada<br>
                            • LinkedHashMap (orden)<br>
                            • TreeMap (orden natural)
                        </div>
                    </div>
                </div>
            </div>
            <ul class="concept-list">
                <li><strong class="text-white">ArrayList</strong>: Lista basada en array redimensionable. Acceso O(1) por índice. Ideal cuando se necesita acceso aleatorio frecuente.</li>
                <li><strong class="text-white">HashMap</strong>: Mapa basado en tabla hash. Inserción y búsqueda O(1) promedio. No garantiza orden.</li>
                <li><strong class="text-white">Generics</strong>: <code class="text-cyber-300">List&lt;String&gt;</code> permite tipar las colecciones para seguridad en compilación.</li>
            </ul>
        `,
        examples: [
            {
                title: "Operaciones con ArrayList y HashMap",
                description: "Ejemplo completo que demuestra operaciones CRUD con ArrayList y HashMap, incluyendo recorrido con foreach y métodos de búsqueda.",
                code: `<span class="keyword">import</span> java.util.*;

<span class="keyword">public class</span> <span class="type">ColeccionesDemo</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="comment">// ArrayList — lista ordenada con duplicados</span>
        <span class="type">List</span><<span class="type">String</span>> frutas = <span class="keyword">new</span> <span class="type">ArrayList</span><>();
        frutas.<span class="method">add</span>(<span class="string">"Manzana"</span>);
        frutas.<span class="method">add</span>(<span class="string">"Banana"</span>);
        frutas.<span class="method">add</span>(<span class="string">"Naranja"</span>);
        frutas.<span class="method">add</span>(<span class="string">"Manzana"</span>); <span class="comment">// Permite duplicados</span>

        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Frutas: "</span> + frutas);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Primera: "</span> + frutas.<span class="method">get</span>(<span class="number">0</span>));
        frutas.<span class="method">remove</span>(<span class="string">"Banana"</span>);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Contiene Naranja? "</span> + frutas.<span class="method">contains</span>(<span class="string">"Naranja"</span>));

        <span class="comment">// HashMap — pares clave-valor</span>
        <span class="type">Map</span><<span class="type">String</span>, <span class="type">Integer</span>> edades = <span class="keyword">new</span> <span class="type">HashMap</span><>();
        edades.<span class="method">put</span>(<span class="string">"Ana"</span>, <span class="number">25</span>);
        edades.<span class="method">put</span>(<span class="string">"Carlos"</span>, <span class="number">30</span>);
        edades.<span class="method">put</span>(<span class="string">"Lucía"</span>, <span class="number">22</span>);

        <span class="comment">// Recorrer Map con entrySet</span>
        <span class="keyword">for</span> (<span class="type">Map.Entry</span><<span class="type">String</span>, <span class="type">Integer</span>> entry : edades.<span class="method">entrySet</span>()) {
            <span class="type">System</span>.out.<span class="method">println</span>(entry.<span class="method">getKey</span>() + <span class="string">": "</span> + entry.<span class="method">getValue</span>());
        }
    }
}`
            },
            {
                title: "HashSet para eliminar duplicados",
                description: "Ejemplo que usa un HashSet para eliminar elementos duplicados de una lista y demuestra las operaciones básicas de un Set.",
                code: `<span class="keyword">import</span> java.util.*;

<span class="keyword">public class</span> <span class="type">SetDemo</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="comment">// Lista con duplicados</span>
        <span class="type">List</span><<span class="type">Integer</span>> numeros = <span class="type">Arrays</span>.<span class="method">asList</span>(<span class="number">5</span>, <span class="number">3</span>, <span class="number">8</span>, <span class="number">5</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">9</span>, <span class="number">8</span>);

        <span class="comment">// Eliminar duplicados con HashSet</span>
        <span class="type">Set</span><<span class="type">Integer</span>> sinDuplicados = <span class="keyword">new</span> <span class="type">HashSet</span><>(numeros);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Sin duplicados: "</span> + sinDuplicados);

        <span class="comment">// TreeSet — mantiene orden natural</span>
        <span class="type">Set</span><<span class="type">Integer</span>> ordenados = <span class="keyword">new</span> <span class="type">TreeSet</span><>(numeros);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Ordenados: "</span> + ordenados);

        <span class="comment">// Operaciones entre conjuntos</span>
        <span class="type">Set</span><<span class="type">Integer</span>> setA = <span class="keyword">new</span> <span class="type">HashSet</span><>(<span class="type">Arrays</span>.<span class="method">asList</span>(<span class="number">1</span>,<span class="number">2</span>,<span class="number">3</span>,<span class="number">4</span>));
        <span class="type">Set</span><<span class="type">Integer</span>> setB = <span class="keyword">new</span> <span class="type">HashSet</span><>(<span class="type">Arrays</span>.<span class="method">asList</span>(<span class="number">3</span>,<span class="number">4</span>,<span class="number">5</span>,<span class="number">6</span>));

        <span class="comment">// Intersección</span>
        <span class="type">Set</span><<span class="type">Integer</span>> interseccion = <span class="keyword">new</span> <span class="type">HashSet</span><>(setA);
        interseccion.<span class="method">retainAll</span>(setB);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Intersección: "</span> + interseccion);

        <span class="comment">// Unión</span>
        <span class="type">Set</span><<span class="type">Integer</span>> union = <span class="keyword">new</span> <span class="type">HashSet</span><>(setA);
        union.<span class="method">addAll</span>(setB);
        <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Unión: "</span> + union);
    }
}`
            }
        ],
        exercises: [
            {
                title: "Gestor de tareas con List y Map",
                description: "Crea un sistema de gestión de tareas donde uses un ArrayList<Tarea> para mantener las tareas ordenadas por fecha de creación, y un HashMap<String, Tarea> para búsqueda rápida por ID. Implementa métodos: agregarTarea(), completarTarea(id), obtenerTareasPendientes(), y obtenerTareasPorPrioridad(). La clase Tarea debe tener id, descripcion, prioridad (ALTA, MEDIA, BAJA) y completada.",
                difficulty: "Avanzado"
            },
            {
                title: "Eliminador de duplicados y contador de frecuencia",
                description: "Escribe un programa que reciba un array de strings y: a) Use un HashSet para mostrar las palabras sin duplicados, b) Use un HashMap para contar la frecuencia de cada palabra, c) Use un TreeSet para mostrar las palabras ordenadas alfabéticamente. Prueba con: {\"java\", \"python\", \"java\", \"c++\", \"java\", \"python\", \"go\"}.",
                difficulty: "Intermedio"
            }
        ]
    },
    {
        id: 13,
        title: "Lectura y Escritura de Archivos en Java",
        icon: "file-text",
        pending: false,
        concept: `
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Java proporciona diversas clases para <strong class="text-white">leer y escribir archivos</strong>. Las principales se encuentran en el paquete <code class="text-cyber-300">java.io</code> y <code class="text-cyber-300">java.nio.file</code>. Es fundamental usar el bloque <strong class="text-cyber-400">try-with-resources</strong> para garantizar el cierre automático de recursos.
            </p>
            <div class="diagram-box mb-6">
                <div class="diagram-title">Clases Principales para Archivos</div>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <h4 class="text-cyber-400 font-semibold mb-2">📄 Lectura</h4>
                        <ul class="text-sm text-gray-400 space-y-1">
                            <li><code class="text-cyber-300">BufferedReader</code> — Lectura eficiente línea a línea</li>
                            <li><code class="text-cyber-300">Scanner</code> — Lectura con parsing automático</li>
                            <li><code class="text-cyber-300">Files.readAllLines()</code> — Lee todo a un List</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-cyber-400 font-semibold mb-2">✏️ Escritura</h4>
                        <ul class="text-sm text-gray-400 space-y-1">
                            <li><code class="text-cyber-300">BufferedWriter</code> — Escritura eficiente con buffer</li>
                            <li><code class="text-cyber-300">PrintWriter</code> — Escritura con formato (como System.out)</li>
                            <li><code class="text-cyber-300">Files.write()</code> — Escritura rápida en una línea</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="concept-list">
                <li><strong class="text-white">try-with-resources</strong>: Sintaxis que cierra automáticamente recursos que implementan AutoCloseable. <code class="text-cyber-300">try (BufferedReader br = ...) { }</code></li>
                <li><strong class="text-white">Archivos .txt</code>: Archivos de texto plano, leído línea por línea.</li>
                <li><strong class="text-white">Archivos .csv</strong>: Valores separados por comas. Cada línea es un registro y las comas delimitan los campos.</li>
                <li><strong class="text-white">File vs Path</strong>: <code class="text-cyber-300">java.io.File</code> es la clase antigua; <code class="text-cyber-300">java.nio.file.Path</code> es la moderna y preferida.</li>
            </ul>
        `,
        examples: [
            {
                title: "Leer y escribir archivo .txt",
                description: "Ejemplo completo de lectura y escritura de un archivo de texto plano usando BufferedReader, BufferedWriter y Files.",
                code: `<span class="keyword">import</span> java.io.*;
<span class="keyword">import</span> java.nio.file.*;

<span class="keyword">public class</span> <span class="type">ArchivoTexto</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">String</span> ruta = <span class="string">"datos.txt"</span>;

        <span class="comment">// ESCRIBIR archivo .txt</span>
        <span class="keyword">try</span> (<span class="type">BufferedWriter</span> bw = <span class="type">Files</span>.<span class="method">newBufferedWriter</span>(
                <span class="type">Paths</span>.<span class="method">get</span>(ruta),
                <span class="type">StandardOpenOption</span>.CREATE,
                <span class="type">StandardOpenOption</span>.WRITE)) {

            bw.<span class="method">write</span>(<span class="string">"Línea 1: Hola mundo"</span>);
            bw.<span class="method">newLine</span>();
            bw.<span class="method">write</span>(<span class="string">"Línea 2: Java es genial"</span>);
            bw.<span class="method">newLine</span>();
            bw.<span class="method">write</span>(<span class="string">"Línea 3: Archivos POO"</span>);
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"✅ Archivo escrito."</span>);

        } <span class="keyword">catch</span> (<span class="type">IOException</span> e) {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Error al escribir: "</span> + e.<span class="method">getMessage</span>());
        }

        <span class="comment">// LEER archivo .txt</span>
        <span class="keyword">try</span> (<span class="type">BufferedReader</span> br = <span class="type">Files</span>.<span class="method">newBufferedReader</span>(<span class="type">Paths</span>.<span class="method">get</span>(ruta))) {
            <span class="type">String</span> linea;
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"📖 Contenido:"</span>);
            <span class="keyword">while</span> ((linea = br.<span class="method">readLine</span>()) != <span class="keyword">null</span>) {
                <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"  "</span> + linea);
            }
        } <span class="keyword">catch</span> (<span class="type">IOException</span> e) {
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"Error al leer: "</span> + e.<span class="method">getMessage</span>());
        }
    }
}`
            },
            {
                title: "Leer y escribir archivo .csv",
                description: "Ejemplo de manejo de archivos CSV donde cada línea tiene campos separados por comas. Incluye parsing manual y escritura con formato.",
                code: `<span class="keyword">import</span> java.io.*;
<span class="keyword">import</span> java.nio.file.*;
<span class="keyword">import</span> java.util.*;

<span class="keyword">public class</span> <span class="type">ArchivoCSV</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] args) {
        <span class="type">String</span> ruta = <span class="string">"estudiantes.csv"</span>;

        <span class="comment">// ESCRIBIR CSV</span>
        <span class="keyword">try</span> (<span class="type">PrintWriter</span> pw = <span class="keyword">new</span> <span class="type">PrintWriter</span>(
                <span class="keyword">new</span> <span class="type">FileWriter</span>(ruta))) {
            pw.<span class="method">println</span>(<span class="string">"nombre,edad,nota"</span>); <span class="comment">// Encabezado</span>
            pw.<span class="method">println</span>(<span class="string">"Ana,20,4.5"</span>);
            pw.<span class="method">println</span>(<span class="string">"Carlos,22,3.8"</span>);
            pw.<span class="method">println</span>(<span class="string">"Lucía,19,4.9"</span>);
            <span class="type">System</span>.out.<span class="method">println</span>(<span class="string">"✅ CSV escrito."</span>);
        } <span class="keyword">catch</span> (<span class="type">IOException</span> e) {
            e.<span class="method">printStackTrace</span>();
        }

        <span class="comment">// LEER CSV</span>
        <span class="type">List</span><<span class="type">String</span>[]> registros = <span class="keyword">new</span> <span class="type">ArrayList</span><>();
        <span class="keyword">try</span> (<span class="type">BufferedReader</span> br = <span class="keyword">new</span> <span class="type">BufferedReader</span>(
                <span class="keyword">new</span> <span class="type">FileReader</span>(ruta))) {
            <span class="type">String</span> linea;
            <span class="type">boolean</span> encabezado = <span class="keyword">true</span>;
            <span class="keyword">while</span> ((linea = br.<span class="method">readLine</span>()) != <span class="keyword">null</span>) {
                <span class="keyword">if</span> (encabezado) { encabezado = <span class="keyword">false</span>; <span class="keyword">continue</span>; }
                <span class="type">String</span>[] campos = linea.<span class="method">split</span>(<span class="string">","</span>);
                registros.<span class="method">add</span>(campos);
            }
        } <span class="keyword">catch</span> (<span class="type">IOException</span> e) {
            e.<span class="method">printStackTrace</span>();
        }

        <span class="comment">// Mostrar registros parseados</span>
        <span class="keyword">for</span> (<span class="type">String</span>[] r : registros) {
            <span class="type">System</span>.out.<span class="method">printf</span>(<span class="string">"Nombre: %s | Edad: %s | Nota: %s%n"</span>,
                r[<span class="number">0</span>], r[<span class="number">1</span>], r[<span class="number">2</span>]);
        }
    }
}`
            }
        ],
        exercises: [
            {
                title: "Registro de contactos en .txt",
                description: "Crea un programa que permita registrar contactos (nombre, teléfono, email) y guardarlos en un archivo contactos.txt. El programa debe leer el archivo al iniciar (si existe) para cargar contactos previos, y mostrar un menú por consola con opciones: 1) Agregar contacto, 2) Buscar por nombre, 3) Mostrar todos, 4) Guardar y salir. Cada contacto debe guardarse en una línea separada con formato nombre|telefono|email.",
                difficulty: "Intermedio"
            },
            {
                title: "Analizador de ventas en CSV",
                description: "Escribe un programa que lea un archivo ventas.csv con columnas: producto,cantidad,precioUnitario. El programa debe: a) Calcular el total de ventas general, b) Encontrar el producto más vendido (mayor cantidad), c) Escribir un archivo resumen_ventas.txt con estos resultados. Maneja las excepciones de archivo no encontrado y formato incorrecto.",
                difficulty: "Avanzado"
            }
        ]
    },
    {
       id: 14,
    title: "Buenas Prácticas y Refactorización",
    icon: "sparkles",
    pending: false,
    concept: `
        <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Las <strong class="text-white">buenas prácticas de programación</strong> son técnicas y convenciones que permiten desarrollar software más ordenado, legible y fácil de mantener. 

            La <strong class="text-white">refactorización</strong> consiste en mejorar la estructura interna del código sin cambiar lo que hace.
        </p>

        <div class="diagram-box mb-6">

            <div class="diagram-title">
                Principios Clave
            </div>

            <div class="grid md:grid-cols-3 gap-4 mt-4">

                <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30 text-center">

                    <div class="text-2xl mb-2">🎯</div>

                    <div class="text-cyber-400 font-bold mb-1 text-sm">
                        DRY
                    </div>

                    <p class="text-xs text-gray-500">
                        Don't Repeat Yourself. Evitar duplicación.
                    </p>

                </div>


                <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30 text-center">

                    <div class="text-2xl mb-2">🧹</div>

                    <div class="text-cyber-400 font-bold mb-1 text-sm">
                        Código Limpio
                    </div>

                    <p class="text-xs text-gray-500">
                        Variables y métodos descriptivos.
                    </p>

                </div>


                <div class="p-4 rounded-xl bg-cyber-900/50 border border-cyber-700/30 text-center">

                    <div class="text-2xl mb-2">⚡</div>

                    <div class="text-cyber-400 font-bold mb-1 text-sm">
                        Refactorización
                    </div>

                    <p class="text-xs text-gray-500">
                        Mejorar estructura sin alterar comportamiento.
                    </p>

                </div>

            </div>

        </div>


        <h3 class="text-xl font-bold text-cyber-400 mt-8 mb-4">
        Ejemplo 1
        </h3>

<div class="code-block">
<pre><code>
// Antes

int a=10;
int b=5;
int c=a+b;


// Después

int numeroA=10;
int numeroB=5;
int suma=numeroA+numeroB;

</code></pre>
</div>



<h3 class="text-xl font-bold text-cyber-400 mt-8 mb-4">
Ejemplo 2
</h3>

<div class="code-block">
<pre><code>

// Antes

if(x==true){

System.out.println("Acceso");

}


// Después

if(x){

System.out.println("Acceso");

}

</code></pre>
</div>




<h3 class="text-xl font-bold text-red-400 mt-8 mb-4">
Ejercicio 1
</h3>

<div class="exercise-box">

<p class="text-gray-300">

Refactoriza el siguiente código usando nombres descriptivos:

</p>

<div class="code-block mt-4">

<pre><code>

int x=7;
int y=9;
int z=x*y;

</code></pre>

</div>

</div>




<h3 class="text-xl font-bold text-red-400 mt-8 mb-4">
Ejercicio 2
</h3>

<div class="exercise-box">

<p class="text-gray-300">

Mejora este fragmento eliminando redundancia:

</p>

<div class="code-block mt-4">

<pre><code>

String nombre1="Ana";
String nombre2="Ana";

</code></pre>

</div>

</div>

}
];

document.addEventListener('DOMContentLoaded',()=>{

const navList =
document.getElementById("nav-list");

topics.forEach(topic=>{

navList.innerHTML+=`

<a href="#tema-${topic.id}"
class="block px-4 py-3 rounded-lg">

${topic.id}. ${topic.title}

</a>

`;

});


const container=
document.getElementById(
"topics-container");

topics.forEach(topic=>{

container.innerHTML+=`

<section id="tema-${topic.id}"
class="bg-cyber-900/20 border border-cyber-800/50 rounded-2xl p-8">

<h2 class="text-3xl font-bold mb-6">

${topic.id}. ${topic.title}

</h2>

${topic.concept}

</section>

`;

});

lucide.createIcons();

});

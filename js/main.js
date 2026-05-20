document.addEventListener("DOMContentLoaded",()=>{

const navList = document.getElementById("nav-list");
const container = document.getElementById("topics-container");

topics.forEach(topic=>{

const link = document.createElement("a");

link.href = `#tema-${topic.id}`;

link.className = "nav-link";

link.innerHTML = `
${topic.id}. ${topic.title}
`;

navList.appendChild(link);

});

topics.forEach(topic=>{

const section = document.createElement("section");

section.id = `tema-${topic.id}`;

section.className = "topic-section glass-card";

section.innerHTML = `

<h2>
${topic.id}. ${topic.title}
</h2>

${topic.concept}

<h3>
Ejemplos
</h3>

${topic.examples.map(example=>`

<div class="glass-card">

<h4>
${example.title}
</h4>

<p>
${example.description}
</p>

<div class="code-block">
<pre>${example.code}</pre>
</div>

</div>

`).join("")}

<h3>
Ejercicios
</h3>

${topic.exercises.map(exercise=>`

<div class="exercise-card">

<h4>
${exercise.title}
</h4>

<p>
${exercise.description}
</p>

</div>

`).join("")}

`;

container.appendChild(section);

});

});

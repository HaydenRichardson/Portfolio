fetch("/data/projects.json")
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById("projects");

        projects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project";

            div.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href=project.html?id=${project.id}>View Project</a>
            `;

            container.appendChild(div);
        });
    })
    .catch(err => console.err("Failed to load projects:", err));
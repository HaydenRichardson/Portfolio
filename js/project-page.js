const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

fetch("/data/projects.json")
    .then(res => res.json())
    .then(projects => {
        const project = projects.find(p => p.id === projectId);
        if(!project){
            document.body.innerHTML = "<h1>Project not found</h1>";
            return;
        }
        const link = document.getElementById("link");
        document.title = project.title + " | My Portfolio";
        document.getElementById("title").textContent = project.title;
        document.getElementById("date").textContent = project.date;
        document.getElementById("description").textContent = project.description;
        document.getElementById("tech").textContent = "Tech: " + project.tech.join(", ");
        if(project.link){
            link.textContent = "View Project on GitHub";
            link.href = project.link;
            link.target = "_blank";
        } else{
            link.style.display = "none";
        }
        document.getElementById("content").textContent = project.content;
    });
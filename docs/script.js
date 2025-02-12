fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        let list = document.getElementById("project-list");
        projects.forEach(project => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = project.url;
            a.textContent = project.name;
            li.appendChild(a);
            list.appendChild(li);
        });
    });

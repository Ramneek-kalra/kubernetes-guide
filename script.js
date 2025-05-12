document.addEventListener('DOMContentLoaded', () => {
    const guidesList = document.getElementById('guides-list');
    const guides = [
        { title: "Introduction to Kubernetes", link: "#" },
        { title: "Setting up Kubernetes Cluster", link: "#" },
        { title: "Managing Kubernetes Workloads", link: "#" }
    ];

    guides.forEach(guide => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = guide.link;
        a.textContent = guide.title;
        li.appendChild(a);
        guidesList.appendChild(li);
    });
});

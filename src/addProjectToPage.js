import trashCan from "../images/trash-can-outline.png";
import arrow from "../images/arrow-right-circle-outline.png";

export const addProjectToPage = (pjName) => {
    const projectsContainer = document.querySelector('.projectsContainer');

    const project = document.createElement('div');
        project.classList.add("navText");

    const projectBullet = document.createElement('img');
        projectBullet.setAttribute("src", arrow);
        projectBullet.setAttribute("alt", "Project bullet");

    const projectName = document.createElement('div');
        projectName.textContent =`${pjName}`;

    const spacing = document.createElement('span');
        spacing.classList.add("projectSpacing");

    const deleteProject = document.createElement('img');
        deleteProject.setAttribute("src", trashCan);
        deleteProject.setAttribute("alt", "delete Project");
        deleteProject.classList.add("deleteProject");

    project.appendChild(projectBullet);
    project.appendChild(projectName);
    project.appendChild(spacing);
    project.appendChild(deleteProject);

    projectsContainer.appendChild(project);
};
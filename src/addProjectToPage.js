import trashCan from "../images/trash-can-outline.png";
import arrow from "../images/arrow-right-circle-outline.png";

import {addTaskToPage} from "./addTaskToPage.js";
import {headerAndTaskNumber} from "./headerAndTaskNumber.js";

export const addProjectToPage = (pjName) => {
    const content = document.querySelector(".content");

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

    const addTaskFunction = ()=>{
        content.textContent = '';
        
        const localKey = localStorage.getItem(`${pjName}`);
        const obj = JSON.parse(localKey);
        const taskArray = obj.task;

        headerAndTaskNumber(`${obj.name}`,`${taskArray.length}`);

        taskArray.forEach((element) => {
            addTaskToPage(`${element.taskID}`,`${element.title}`,`${element.description}`,`${element.dueDate}`,`${element.priority}`,`${element.project}`);
        });
    };

    projectName.addEventListener("click",addTaskFunction);
    projectBullet.addEventListener("click",addTaskFunction);
    spacing.addEventListener("click",addTaskFunction);

    project.appendChild(projectBullet);
    project.appendChild(projectName);
    project.appendChild(spacing);
    project.appendChild(deleteProject);

    projectsContainer.appendChild(project);
};
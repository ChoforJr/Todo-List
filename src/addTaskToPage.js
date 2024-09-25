
import trashCan from "../images/trash-can-outline.png";

export const addTaskToPage = (taskID,tkName,tkDescription,tkDate,tkPriority,tkProject) => {
    const content = document.querySelector(".content");

    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    taskContent.id = `${taskID}`;
    
    const space1 = document.createElement("div");
    space1.classList.add("space1");
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("completeBtn");
        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.textContent = "Edit";
    space1.appendChild(completeBtn);
    space1.appendChild(editBtn);
    
    const space2 = document.createElement("div");
    space2.classList.add("space2");
        const taskName = document.createElement("h4");
        taskName.textContent = `${tkName}`;
        const description = document.createElement("p");
        description.textContent = `${tkDescription}`;
        const date = document.createElement("h4");
        date.textContent = `${tkDate}`;
    space2.appendChild(taskName);
    space2.appendChild(description);
    space2.appendChild(date);
    
    const space3 = document.createElement("div");
    space3.classList.add("space3");
        const priority = document.createElement("h4");
        priority.classList.add("priority");
        priority.textContent = `${tkPriority}`;
        const project = document.createElement("p");
        project.textContent = `#${tkProject}`;
        const deleteTask = document.createElement("img");
        deleteTask.setAttribute("src", trashCan);
        deleteTask.setAttribute("alt", "delete task");

        if(priority.textContent=="High"){
            priority.style.backgroundColor ="red";
        }
        if(priority.textContent=="Medium"){
            priority.style.backgroundColor ="yellow";
        }
        
    space3.appendChild(priority);
    space3.appendChild(project);
    space3.appendChild(deleteTask);
    
    taskContent.appendChild(space1);
    taskContent.appendChild(space2);
    taskContent.appendChild(space3);
    
    content.appendChild(taskContent);
};




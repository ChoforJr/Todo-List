
import trashCan from "../images/trash-can-outline.png";
import {editTaskModal} from "./editTaskModal.js";

export const addTaskToPage = (taskID,tkName,tkDescription,tkDate,tkPriority,tkProject) => {
    const content = document.querySelector(".content");

    const localKey = localStorage.getItem(`${tkProject}`);
    const obj = JSON.parse(localKey);
    const taskArray = obj.task;
    const taskNumber = document.querySelector("#tasksNumber");
    taskNumber.textContent = `${taskArray.length}`;


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
        
  

    const removeTaskFunction = ()=>{
        const localKey2 = localStorage.getItem(`${tkProject}`);
        const obj2 = JSON.parse(localKey2);
        const taskArray2 = obj2.task;

        taskArray2.forEach((element,index) => {
            if(element.completed === true){
                taskArray2.splice(index, 1);
                return;
            }
            if(element.taskID == taskID){
                taskArray2.splice(index, 1);
            }
        });
        localStorage.setItem(`${tkProject}`,JSON.stringify(obj2));
        content.removeChild(taskContent);

        const taskNumber2 = document.querySelector("#tasksNumber");
        taskNumber2.textContent = `${taskArray2.length}`;
    };



    deleteTask.addEventListener("click",removeTaskFunction);


    completeBtn.addEventListener("click",()=>{
        const localKey2 = localStorage.getItem(`${tkProject}`);
        const obj2 = JSON.parse(localKey2);
        const taskArray2 = obj2.task;

        taskArray2.forEach((element) => {
            if(element.taskID == taskID){
                element.completed = true;
                alert("Task Completed");
                return;
            }
        });
        localStorage.setItem(`${tkProject}`,JSON.stringify(obj2));
    });


    completeBtn.addEventListener("click",removeTaskFunction);


    editBtn.addEventListener("click",()=> {
        const selectElement = document.querySelector("#editProject");
        const editTaskDialog = document.querySelector(".editTaskDialog");

        while (selectElement.firstChild) {
            selectElement.removeChild(selectElement.firstChild);
        }

        const storedKeys = Object.keys(localStorage);

        storedKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        selectElement.appendChild(option);
        });

        editTaskModal(editTaskDialog,tkName,tkDescription,tkDate,tkPriority,tkProject,taskName,description,date,priority,project,taskID,taskContent);
    });


    space3.appendChild(priority);
    space3.appendChild(project);
    space3.appendChild(deleteTask);
    
    
    taskContent.appendChild(space1);
    taskContent.appendChild(space2);
    taskContent.appendChild(space3);
    
    content.appendChild(taskContent);
};




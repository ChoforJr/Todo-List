
import { format} from 'date-fns';
import { storeTask } from './storeTask.js';

export const editTaskModal = (editTaskDialog,tkName,tkDescription,tkDate,tkPriority,tkProject,taskName,description,date,priority,project,taskID,taskContent) => {

    const content = document.querySelector(".content");

    editTaskDialog.showModal();
    
    const cancelEditTask = document.querySelector(".cancelEditTask");
    const submitChanges = document.querySelector(".submitChanges");
    
    const editTaskName = document.querySelector("#editTaskName");
    const editDescription = document.querySelector("#editDescription");
    const editProject = document.querySelector("#editProject");
    const editPriority = document.querySelector("#editPriority");
    const editDueDate = document.querySelector("#editDueDate");

    editTaskName.value = `${tkName}`;
    editDescription.value = `${tkDescription}`;
    editPriority.value = `${tkPriority}`;
    editDueDate.value = `${tkDate}`;
    editProject.value = `${tkProject}`;
  
    cancelEditTask.addEventListener("click",()=>{
        editTaskName.value = `${tkName}`;
        editDescription.value = `${tkDescription}`;
        editPriority.value = `${tkPriority}`;
        editDueDate.value = `${tkDate}`;
        editProject.value = `${tkProject}`;

        editTaskDialog.close();
    });
    
    submitChanges.addEventListener("click",()=>{
        const today = format(new Date(), "yyyy-MM-dd");

        if (editTaskName.value.trim() === '') {
            alert('Please fill out the input field!');
            return;
        }
        if (editDescription.value.trim() === '') {
            editDescription.value = 'none';
        }
        if (editDueDate.value.trim() == '') {
            editDueDate.value = today;
        }
    

        const localKey = localStorage.getItem(`${tkProject}`);
        const obj = JSON.parse(localKey);
        const taskArray = obj.task;

        if(editProject.value == tkProject){
            taskArray.forEach((element) => {
                if(element.taskID == taskID){
                    element.title = `${editTaskName.value}`;
                    element.description = `${editDescription.value}`;
                    element.dueDate = `${editDueDate.value}`;
                    element.project = `${editProject.value}`;
                    element.priority = `${editPriority.value}`;
                    return;
                }
            });
            localStorage.setItem(`${tkProject}`,JSON.stringify(obj));

            taskName.textContent = `${editTaskName.value}`;

            description.textContent = `${editDescription.value}`;
    
            date.textContent = `${editDueDate.value}`;
    
            priority.textContent = `${editPriority.value}`;
    
            project.textContent = `${editProject.value}`;
    
            if(priority.textContent=="High"){
                priority.style.backgroundColor ="red";
            }
            if(priority.textContent=="Medium"){
                priority.style.backgroundColor ="yellow";
            }
            if(priority.textContent=="Low"){
                priority.style.backgroundColor ="green";
            }
        }else{

            taskArray.forEach((element,index) => {
                if(element.taskID == taskID){
                    taskArray.splice(index, 1);
                }
            });
            localStorage.setItem(`${tkProject}`,JSON.stringify(obj));

            if (content.contains(taskContent)) { 
                content.removeChild(taskContent); 
              }
    
            const taskNumber = document.querySelector("#tasksNumber");
            taskNumber.textContent = `${taskArray.length}`;

            storeTask(taskID,`${editTaskName.value}`,`${editDescription.value}`,`${editDueDate.value}`,`${editPriority.value}`,`${editProject.value}`);
            
        }


        editTaskDialog.close();

    });
};

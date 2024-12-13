
import { format, compareAsc, differenceInDays } from 'date-fns';


export const addTaskModal = (addTaskToPage,storeTask) => {
    const contentHeader = document.querySelector("#contentHeader");

    const addTask = document.querySelector(".addTaskBtn");
    const addTaskDialog = document.querySelector(".addTaskDialog");
    
    const cancelAddTask = document.querySelector(".cancelAddTask");
    const submitTask = document.querySelector(".submitTask");
    
    const taskName = document.querySelector("#taskName");
    const description = document.querySelector("#description");
    const project = document.querySelector("#project");
    const priority = document.querySelector("#priority");
    const dueDate = document.querySelector("#dueDate");


    addTask.addEventListener("click",()=>{
        const selectElement = document.querySelector("#project");

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

        addTaskDialog.showModal();
    });
  
    cancelAddTask.addEventListener("click",()=>{
        taskName.value = '';
        description.value = '';
        priority.value = 'Medium';
        dueDate.value = null;

        addTaskDialog.close();
    });
    
    submitTask.addEventListener("click",()=>{
        const taskID = Math.floor(Math.random() * 900) + 100;

        const today = format(new Date(), "yyyy-MM-dd");

        if (taskName.value.trim() === '') {
            alert('Please fill out the input field!');
            return;
        }
        if (description.value.trim() === '') {
            description.value = 'none';
        }
        if (dueDate.value.trim() == '') {
            dueDate.value = today;
        }
        
        // const isTodayCompare = compareAsc(dueDate.value, today);
        // let isToday;
        // if (isTodayCompare ==0) {
        //     isToday = true;
        // }else{
        //     isToday = false;
        // }

        // const isInNext7Days = differenceInDays(dueDate.value, today);
        // let isThisWeek;
        // if (0 < isInNext7Days <= 7){
        //     isThisWeek = true;
        // }else{
        //     isThisWeek = false;
        // }

       
        storeTask(taskID,`${taskName.value}`,`${description.value}`,`${dueDate.value}`,`${priority.value}`,`${project.value}`);

       if(contentHeader.textContent === `${project.value}`){
        addTaskToPage(taskID,`${taskName.value}`,`${description.value}`,`${dueDate.value}`,`${priority.value}`,`${project.value}`);
       }


        taskName.value = '';
        description.value = '';
        priority.value = 'Medium';
        dueDate.value = null;

        addTaskDialog.close();

    });
};





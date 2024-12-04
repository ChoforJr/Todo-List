
import { format, compareAsc, differenceInDays } from 'date-fns';

export const addTaskModal = (addTaskToPage,pushToStorage) => {
    const addTask = document.querySelector(".addTaskBtn");
    const addTaskDialog = document.querySelector(".addTaskDialog");
    // const addTaskForm = document.querySelector(".addTaskForm");
    
    const cancelAddTask = document.querySelector(".cancelAddTask");
    const submitTask = document.querySelector(".submitTask");
    
    const taskName = document.querySelector("#taskName");
    const description = document.querySelector("#description");
    const project = document.querySelector("#project");
    const priority = document.querySelector("#priority");
    const dueDate = document.querySelector("#dueDate");

    addTask.addEventListener("click",()=>{
        addTaskDialog.showModal();
    });
  
    cancelAddTask.addEventListener("click",()=>{
        taskName.value = '';
        description.value = '';
        project.value = 'Unknown';
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


        // pushToStorage(taskID,`${taskName.value}`,`${description.value}`,`${dueDate.value}`,`${priority.value}`,`${project.value}`);


        addTaskToPage(`${taskID}`,`${taskName.value}`,`${description.value}`,`${dueDate.value}`,`${priority.value}`,`${project.value}`);

        taskName.value = '';
        description.value = '';
        project.value = 'Unknown';
        priority.value = 'Medium';
        dueDate.value = null;

        addTaskDialog.close();
    });
};





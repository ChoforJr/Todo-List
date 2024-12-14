
import { format, compareAsc} from 'date-fns';
import {headerAndTaskNumber} from "./headerAndTaskNumber.js";

export const todaysTask = (addTaskToPage)=>{
    const todayTab = document.querySelector(".todayBtn");
    const content = document.querySelector(".content");

    const today = format(new Date(), "yyyy-MM-dd");

    const todaysTaskFunction = ()=>{
        content.textContent = '';
        const storedKeys = Object.keys(localStorage);
        let todaysTaskLength = 0;

        storedKeys.forEach(key => {

            const localKey = localStorage.getItem(`${key}`);
            const obj = JSON.parse(localKey);
            const taskArray = obj.task;

            taskArray.forEach((element) => {
                const isTodayCompare = compareAsc(element.dueDate, today);
                if (isTodayCompare == 0) {
                    todaysTaskLength++;
                    addTaskToPage(element.taskID,element.title,element.description,element.dueDate,element.priority,element.project);
                }
            });

        });

        headerAndTaskNumber("Today",todaysTaskLength);

    };


    todayTab.addEventListener("click",todaysTaskFunction);
}
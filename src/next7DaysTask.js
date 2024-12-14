
import { format, differenceInDays } from 'date-fns';
import {headerAndTaskNumber} from "./headerAndTaskNumber.js";

export const next7DaysTask = (addTaskToPage)=>{
    const next7DaysTab = document.querySelector(".next7daysBtn");
    const content = document.querySelector(".content");

    const today = format(new Date(), "yyyy-MM-dd");

    const next7DaysTaskFunction = ()=>{
        content.textContent = '';
        const storedKeys = Object.keys(localStorage);
        let next7DaysTaskLength = 0;

        storedKeys.forEach(key => {

            const localKey = localStorage.getItem(`${key}`);
            const obj = JSON.parse(localKey);
            const taskArray = obj.task;

            taskArray.forEach((element) => {
                const isInNext7Days = differenceInDays(element.dueDate,today);
                if (isInNext7Days >0 && isInNext7Days <=7){
                    next7DaysTaskLength++;
                    addTaskToPage(element.taskID,element.title,element.description,element.dueDate,element.priority,element.project);
                }
            });

        });

        headerAndTaskNumber("Next 7 Days",next7DaysTaskLength);

    };


    next7DaysTab.addEventListener("click",next7DaysTaskFunction);
}

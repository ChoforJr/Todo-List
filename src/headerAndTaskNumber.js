
export const headerAndTaskNumber = (projectName,projectTaskLength) =>{
    const contentHeader = document.querySelector("#contentHeader");
    const taskNumber = document.querySelector("#tasksNumber");
    
    contentHeader.textContent = `${projectName}`;
    taskNumber.textContent = `${projectTaskLength}`;
}
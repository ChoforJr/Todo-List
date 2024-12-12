
export const storeTask = (taskID,taskName,description, dueDate, priority, project) => {
  const localKey = localStorage.getItem(`${project}`);
  const obj = JSON.parse(localKey);
  const taskArray = obj.task;
  
  const task = {
    title:taskName,
    description:description,
    dueDate: dueDate,
    project:project,
    priority:priority,
    taskID:taskID,
    completed:false
  }
  taskArray.push(task);
  localStorage.setItem(`${project}`,JSON.stringify(obj));


  }
  
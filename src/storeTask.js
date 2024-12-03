
export function storeTask(taskID,taskName,taskDescription, taskDueDate, taskPriority, taskProject) {
  
  const request = new Request('http://192.168.1.194:8080/storage.json', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        id: taskID,
        name: taskName,
        description: taskDescription,
        dueDate: taskDueDate,
        priority: taskPriority,
        project: taskProject,
        completed: false
    }),
  });


  }
  
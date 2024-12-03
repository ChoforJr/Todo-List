import { format} from 'date-fns';

export const initialProjects = (addProjectToPage) => {
    if (!localStorage.getItem("Unknown")){
        const today = format(new Date(), "yyyy-MM-dd");
        let firstProject = {
            name:"Unknown",
            task:[
                {
                    title:"Workout",
                    description:"workout from Monday to Friday and rest on sunday",
                    dueDate: today,
                    project:"Unknown",
                    priority:"High",
                    taskID:123,
                    completed:false
                },
                {
                    title:"Explore",
                    description:"explore what you can",
                    dueDate: today,
                    project:"Unknown",
                    priority:"Low",
                    taskID:124,
                    completed:false
                }
            ]
        }
        localStorage.setItem("Unknown", JSON.stringify(firstProject));
    }
    
    if (!localStorage.getItem("Study")){
        const today = format(new Date(), "yyyy-MM-dd");
        let secondProject = {
            name:"Study",
            task:[
                {
                    title:"Javascript Course",
                    description:"Complete it by the 15th of December 2024",
                    dueDate: today,
                    project:"Study",
                    priority:"High",
                    taskID:125,
                    completed:false
                },
                {
                    title:"Odin Project",
                    description:"Finish the Odin project by 20th of January 2025",
                    dueDate: today,
                    project:"Study",
                    priority:"High",
                    taskID:126,
                    completed:false
                }
            ]
        }
        localStorage.setItem("Study", JSON.stringify(secondProject));
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
      
        addProjectToPage(`${key}`);
      
      }
};
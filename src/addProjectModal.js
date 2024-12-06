
export const addProjectModal = (addProjectToPage,storeProject) => {
    const addingMyProjects = document.querySelector(".addingMyProjects");
    const addProjectDialog = document.querySelector(".addProjectDialog");
    // const addProjectForm = document.querySelector(".addProjectForm");
    
    const cancelAddProject = document.querySelector(".cancelAddProject");
    const submitProject = document.querySelector(".submitProject");
    
    const projectName = document.querySelector("#projectName");

    addingMyProjects.addEventListener("click",()=>{
        addProjectDialog.showModal();
    })
  
    cancelAddProject.addEventListener("click",()=>{
        projectName.value = '';
        addProjectDialog.close();
    })
    submitProject.addEventListener("click",()=>{

        if (projectName.value.trim() === '') {
            alert('Please fill out the input field!');
            return;
        }
        
        const lowerCaseProjectName = projectName.value.toLowerCase();

        for (let i=0; i<localStorage.length;i++){
            const key = localStorage.key(i);
            const lowerCaseKey = key.toLowerCase();
            if (lowerCaseKey === lowerCaseProjectName){
                alert ('This name is taken, Please use another name for your project');
                return;
            }
        }
        
        addProjectToPage(`${projectName.value}`);

        storeProject(`${projectName.value}`);

        projectName.value = '';

        addProjectDialog.close();
    });
};
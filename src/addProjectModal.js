export const addProjectModal = (push) => {
    const addingMyProjects = document.querySelector(".addingMyProjects");
    const addProjectDialog = document.querySelector(".addProjectDialog");
    const addProjectForm = document.querySelector(".addProjectForm");
    
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
        const projectID = Math.floor(Math.random() * 90) + 10;

        if (projectName.value.trim() === '') {
            alert('Please fill out the input field!');
            return;
        }
        
        push(`${projectID}`,`${projectName.value}`);

        projectName.value = '';

        addProjectDialog.close();
    });
};
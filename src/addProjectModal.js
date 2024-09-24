export const addProjectModal = () => {
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
};
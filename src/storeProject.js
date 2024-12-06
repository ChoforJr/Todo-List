
export const storeProject = (projectName) => {
        const createProject = {
            name:`${projectName}`,
            task:[]
        }
        localStorage.setItem(`${projectName}`, JSON.stringify(createProject));
};
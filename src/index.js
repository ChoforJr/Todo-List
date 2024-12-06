import "./styles.css";
import "./addTaskModal.css";
import "./addProjectModal.css";

import {addTaskToPage} from "./addTaskToPage.js";
import {addTaskModal} from "./addTaskModal.js";
import {addProjectToPage} from "./addProjectToPage.js";
import {addProjectModal} from "./addProjectModal.js";
import {storeTask} from "./storeTask.js";
import { storeProject } from "./storeProject.js";
import {initialProjects} from "./initialProjects.js";

initialProjects(addProjectToPage);



addTaskModal(addTaskToPage,storeTask);

addProjectModal(addProjectToPage,storeProject);

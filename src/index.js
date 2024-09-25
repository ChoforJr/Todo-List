import "./styles.css";
import "./addTaskModal.css";
import "./addProjectModal.css";

import {addTaskToPage} from "./addTaskToPage.js";
import {addTaskModal} from "./addTaskModal.js";
import {addProjectToPage} from "./addProjectToPage.js";
import {addProjectModal} from "./addProjectModal.js";


addTaskModal(addTaskToPage);
addProjectModal(addProjectToPage);

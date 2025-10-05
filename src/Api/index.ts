import type TasksPlugin from '../main';
import { toggleLine } from '../Commands/ToggleDone';
import type { Task } from '../Task/Task';
import { createTaskLineModal } from './createTaskLineModal';
import type { TasksApiV1 } from './TasksApiV1';
import { editTaskLineModal } from './editTaskLineModal';
import { toggleTask } from './toggleTask';
import { mapObjToTasks } from './mapObjToTasks';

/**
 * Factory method for API v1
 *
 * @param app - The Obsidian App
 */
export const tasksApiV1 = (plugin: TasksPlugin): TasksApiV1 => {
    const app = plugin.app;

    return {
        createTaskLineModal: (): Promise<string> => {
            return createTaskLineModal(app, plugin.getTasks());
        },
        editTaskLineModal: (taskLine: string): Promise<string> => {
            return editTaskLineModal(app, taskLine, plugin.getTasks());
        },
        executeToggleTaskDoneCommand: (line: string, path: string) => toggleLine(line, path).text,
        toggleTask: (task: Task): Task => {
            return toggleTask(task);
        },
        mapObjToTasks: (objTasks: Task[]): Task[] => {
            return mapObjToTasks(objTasks);
        },
    };
};

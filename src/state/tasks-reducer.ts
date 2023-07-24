import {TaskStateType} from "../App";
import {v1} from "uuid";

export type RemoveTasksActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    idTask: string

}
export type AddTasksActionType = {
    type: 'ADD-TASK'
    todolistId: string
    title: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    todolistId: string
    taskId: string
    newTitle: string

}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    todolistId: string
    taskId: string
    isDone: boolean
}

type ActionTypes =
    RemoveTasksActionType
    | AddTasksActionType
    | ChangeTaskTitleActionType
 | ChangeTaskStatusActionType

export const tasksReducer = (state: TaskStateType, action: ActionTypes): TaskStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.idTask)}

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTasksAC = (todolistId: string, idTask: string): RemoveTasksActionType => {
    return {type: 'REMOVE-TASK', todolistId: todolistId, idTask: idTask};
}





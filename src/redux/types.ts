import { AppAction } from "./store";

export enum ActionTypes {
    on_increment = 'ON_INCREMENT',
    on_passing_value = 'ON_PASSING_VALUE'
}

export class PostsReducerStateType {
    value: number = 0;
};

export interface OnPassingValueActionType extends AppAction {
    newValue: number;
}

export type Action =
    | OnPassingValueActionType
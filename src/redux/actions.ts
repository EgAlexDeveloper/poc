import { AppAction } from "./store";
import { ActionTypes, OnPassingValueActionType } from "./types";

export const onIncrement = (): AppAction => ({
    type: ActionTypes.on_increment
});

export const onPassingValue = (value: number): OnPassingValueActionType => ({
    type: ActionTypes.on_passing_value,
    newValue: value
});
import { Action, ActionTypes, PostsReducerStateType } from "./types";

const initialState: PostsReducerStateType = new PostsReducerStateType();

const postsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.on_increment:
            return { ...state, value: state.value + 1 }
        case ActionTypes.on_passing_value:
            return {
                ...state,
                value: action.newValue
            }
        default:
            return state
    }
}


export default postsReducer;
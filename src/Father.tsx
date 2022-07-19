import { FC, Fragment, useEffect } from "react";
import { useAuthContext } from "./Auth";
import { onPassingValue } from "./redux/actions";
import { AppState, useDispatch, useSelector } from "./redux/store";

type Gender = 1 | 2;

export type Child = {
    name: string;
    age: number;
    gender: Gender
}

type Props = {
    name: string;
    childs: Child[],
    onNewChild: (newChild: Child) => void
}

const Father: FC<Props> = (props: Props) => {
    const { user } = useAuthContext();
    const dispatch = useDispatch();
    const value: number = useSelector((state: AppState) => state.posts.value);
    const genderD = (gender: Gender) => `gender: ${gender == 1 && 'Male' || gender == 2 && 'Female'}`;

    return (
        <>
            <h1>Father Name: {props.name}</h1>

            <h2>Childs List</h2>
            <ul>
                {
                    props.childs.map((child: Child, index: number) => (
                        <Fragment key={index}>
                            <li>name: {child.name}</li>
                            <li>age: {child.age}</li>
                            <li>
                                {genderD(child.gender)}
                            </li>
                        </Fragment>
                    ))
                }
            </ul>

            <button onClick={() => props.onNewChild({ name: "Ali", age: 0, gender: 1 })}>I Have a New Child</button>

            <div>{value}</div>

            <button onClick={() => dispatch(onPassingValue(10))}>Add 10</button>

            <div>
                {user?.token}
            </div>
        </>
    )
}

export default Father;
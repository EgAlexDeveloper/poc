import { FC, Fragment } from "react";
import { useParams } from 'react-router-dom';

const Child = () => {
    let { name } = useParams();

    return (
        <>
            Child is {name}
        </>
    )
}

export default Child;
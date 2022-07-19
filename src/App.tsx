import React, { FC, Fragment, useContext, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useAuthContext } from './Auth';
import SingleChild from './Child';
import Childs from './Childs';

import Father, { Child } from './Father';
import Fathers from './Fathers';
import Login from './login';
import { onIncrement } from './redux/actions';
import { useDispatch } from './redux/store';

const childs: Child[] = [{ name: "ahmed", age: 5, gender: 1 }, { name: "lily", age: 2, gender: 2 }];

const App = () => {
  const authState = useAuthContext();
  const dispatch = useDispatch();
  const [childListState, updateChildListState] = useState<Child[]>(childs);

  const updateChilds = (newChild: Child): void => {
    childListState.push(newChild);
    updateChildListState([...childListState]);
  };

  const addMore = (): void => {
    dispatch(onIncrement());
  };

  return <>

    <button onClick={addMore}>More</button>

    {authState.isLoggedIn ? 'welcome' : 'you are a guest'}


    <Routes>
      <Route path="fathers" element={<Fathers />} />
      <Route path="childs" element={<Childs />} />
      <Route path="child/:name" element={<SingleChild />} />
      <Route path="login" element={<Login />} />
    </Routes>


    <Father name="Adel" childs={childListState} onNewChild={updateChilds} />

    <Link to="/login">Login</Link>

  </>;
}

export default App;
import {  Route, Routes } from "react-router-dom";

import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";
import Card from "./components/store/Card";

function App() {

  return (
    <Card>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/pw' element={<PasswordFindForm />} />
        <Route path='/test' element={<SpinnerTest />} />
      </Routes>
      <SignupForm />
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
};
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e

export default App

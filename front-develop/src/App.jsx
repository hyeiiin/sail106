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
};
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a

export default App

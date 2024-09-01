import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route } from "react=router";



function App() {
    return (
        <Router>
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                {/* Nice spot for a nav, eh? */}
            </header>
            <Route path="studentForm/">
    <StudentForm />
           <Route path="studentList/">
            <StudentList />

        </div>
        </Router>
        <Route/>
    );
}


export default App;

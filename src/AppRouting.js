import {BrowserRouter as Router, Route, Routes, Link, Navigate, useParams} from 'react-router-dom';
import LogIn from './pages/LogIn';
import Main from './pages/Main';



function AppRouting(){
    let loggedIn = false;

    return (
        <Router>
            <Routes>
                {/* PAGINA PRiNCIPAL */}
                <Route path='' element={<Main/>}>

                </Route>
                <Route path='/login' element={<LogIn/>}/>
            </Routes>
        </Router>
    )

}

export default AppRouting;
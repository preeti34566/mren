import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
//import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
//import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact="true" path="/" element={<CodeForInterview /> } />
        <Route exact="true" path="all" element={<AllUsers /> } />
        <Route exact="true" path="/add" element={<AddUser />} />
        {/* <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
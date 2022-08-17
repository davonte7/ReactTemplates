//Packages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

//Styling
import './App.css';

//Components
import NavBar from "./components/navBar";
import Footer from "./components/footer";

//utils
import handleAuth from "./util/handleAuth";

//Pages
import Home from "./pages/public/home";
import Data from "./pages/private/data";
import Resources from "./pages/public/resources";
import Profile from "./pages/public/profile";
import EditProfile from "./pages/public/editProfile";
import NotFound from "./components/notFound";
import UploadFile from "./pages/private/uploadFile";


export const AppRoutes = (props) => {
  const user = props.user
  const setUser = props.setUser
  return (
    <Routes>
      {/* Private Routes (Requires Specific Auth) */}
      <Route exact path={'/data'} element={<Data user={user} />} />
      <Route exact path={'/uploadFile'} element={<UploadFile user={user} />} />
      
      {/* Public Routes */}
      <Route exact path={'/editprofile'} element={<EditProfile user={user} setUser={setUser} />} />
      <Route exact path={'/profile'} element={<Profile user={user} />} />
      <Route exact path={'/resources'} element={<Resources />} />
      <Route exact path={'/'} element={<Home />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

function App() {
  /* Authentication Handling
    Modify in utils/handleAuth.js
  */
  const [user, setUser] = useState(handleAuth())

  return (
    <BrowserRouter>
      {/* Test of Authentication Change*/}
      <div>
        <button onClick={() => setUser((prevState) => ({
          name: prevState.name, email: prevState.email, auth: !prevState.auth
        }))}>
          Press for Auth Change
        </button>
      </div>

      <NavBar user={user} />

      {/* div used to keep footer at bottom of page */}
      <div className='app-flex-wrapper'>
        <AppRoutes user={user} setUser={setUser} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

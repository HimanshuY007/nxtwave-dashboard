import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginContext } from "./context/LoginContextProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddResource from "./pages/AddResource";

const App = () => {
  const { isLoggedin } = useLoginContext();
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/login"
          element={!isLoggedin ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={isLoggedin ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/add_user"
          element={isLoggedin ? <AddResource /> : <Navigate to="/login" />}
        />
      </Routes>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
          transition:Bounce
        />
      </div>
    </div>
  );
};

export default App;

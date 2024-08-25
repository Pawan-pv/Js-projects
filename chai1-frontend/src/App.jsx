import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import PublicVideo from './pages/publicVideo';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={
          <Layout>
            <PublicVideo/>
          </Layout>
        } /> */}



        <Route path="/" element={
          <Layout>
            <SignIn />
          </Layout>
        } />

        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />



        <Route path="/profile" element={
          <Layout>
            <Profile />
          </Layout>
        } />


        {/* <Route path="/login" element={
          <Layout>
            <Login/>
          </Layout>
        } /> */}

      </Routes>
    </Router>
  );
}

export default App;

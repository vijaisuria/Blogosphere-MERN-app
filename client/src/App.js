import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./partials/Layout";
import IndexPage from "./pages/IndexPage";
import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./utils/UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import Contact from "./pages/Contact";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

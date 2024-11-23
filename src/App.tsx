import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {RequireAuth} from "./components/RequireAuth";
import Profile from "./pages/ProfilePage";
import PostEditPage from "./pages/PostEditPage";
import MyPosts from "./pages/MyPostsPage";
import Home from './pages/HomePage.tsx'
import Posts from "./pages/PostsPage";
import {Login} from "./components/Login";
import About from "./pages/AboutPage";
import NavigationBars from "./components/NavigationBars";
import {contentStyle, pageStyle} from "./styles/styles.tsx";
function App() {
  return (
      <div style={pageStyle}>
          <NavigationBars/>
              <Router>
                  <div style={contentStyle}>
                      <Routes>
                          <Route path="/about" element={<About/>}/>
                          <Route path="/profile" element={
                              <RequireAuth>
                                  <Profile/>
                              </RequireAuth>
                          }/>
                          <Route path="/posts" element={
                              <RequireAuth>
                                  <Posts/>
                              </RequireAuth>
                          }/>
                          <Route path="/post/:postId" element={
                              <RequireAuth>
                                  <PostEditPage/>
                              </RequireAuth>
                          }/>
                          <Route path="/my-posts" element={
                              <RequireAuth>
                                  <MyPosts/>
                              </RequireAuth>
                          }/>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/login" element={<Login/>}/>

                      </Routes>
                  </div>
              </Router>
      </div>
  )

}

export default App

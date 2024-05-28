import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/developer/ui/home/Home"
import Single from "./components/pages/developer/ui/single/Single"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Login from "./components/pages/developer/access/Login"
import Post from "./components/pages/developer/dashboard/post/Post"
import Users from "./components/pages/developer/dashboard/user/Users"
import PageNotFound from "./components/partials/PageNotFound"
import Category from "./components/pages/developer/dashboard/category/Category"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"
import Tag from "./components/pages/developer/dashboard/tag/Tag"

function App() {

  const queryClient = new QueryClient
  return (
    <>
       


      <QueryClientProvider client={queryClient}>
    <StoreProvider>
    <Router>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/single" element={<ProtectedRoute><Single/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard/post" element={<ProtectedRoute><Post/></ProtectedRoute>}/>
        <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
        <Route path="/*" element={<ProtectedRoute><PageNotFound/></ProtectedRoute>}/>
        <Route path="/dashboard/category" element={<ProtectedRoute><Category/></ProtectedRoute>}/>
        <Route path="/dashboard/tag" element={<ProtectedRoute><Tag/></ProtectedRoute>}/>
    
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}
export default App
         
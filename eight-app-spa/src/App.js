import {createBrowserRouter, RouterProvider, 
  // createRoutesFromElements, 
  // Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

// OLD WAY TO IMPLEMENT
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home></Home>}></Route>
//     <Route path='/products' element={<Products></Products>}></Route>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/products', element: <Products/>},

])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;

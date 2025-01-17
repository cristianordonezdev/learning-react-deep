import {createBrowserRouter, RouterProvider, 
  // createRoutesFromElements, 
  // Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';

// OLD WAY TO IMPLEMENT
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home></Home>}></Route>
//     <Route path='/products' element={<Products></Products>}></Route>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products', element: <Products/>},
    ]
  },
  // We can have multiple root elements
  // {
  //   path: '/admin', 
  //   element: <Root/>,
  //   children: [

  //   ]
  // },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;

import {createBrowserRouter, RouterProvider, 
  // createRoutesFromElements, 
  // Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error404 from './pages/Error404';
import DetailProduct from './pages/DetailProduct';

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
    errorElement: <Error404 />,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products', element: <Products/>},
      {path: '/detail-product/:id', element: <DetailProduct/>},

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

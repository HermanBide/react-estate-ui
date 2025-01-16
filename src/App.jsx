import Layout, { RequireAuth } from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import HomePage from "./pages/homePage/homePage";
import SinglePage from "./pages/singlePage/singlePage";
import ProfilePage from "./pages/profile/profilePage";
import ProfileUpdatePage from "./pages/profileUpdate/profileUpdatePage";
import NewPostPage from "./pages/newPostPage/newPostPage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: (
            <ErrorBoundary>
              <SinglePage />
            </ErrorBoundary>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          // loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

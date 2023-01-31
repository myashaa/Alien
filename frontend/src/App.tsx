import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/MainPage/MainPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AddingPostPage } from './pages/AddingPostPage/AddingPostPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import { MessagesPage } from './pages/MessagesPage/MessagesPage';
import { MyFeedPage } from './pages/MyFeedPage/MyFeedPage';
import { PostPage } from './pages/PostPage/PostPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { AnaliticPage } from './pages/AnaliticPage/AnaliticPage';
import { EditingProfilePage } from './pages/EditingProfilePage/EditingProfilePage';
import { AnotherProfilePage } from './pages/AnotherProfilePage copy/AnotherProfilePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />  ,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/adding-post",
    element: localStorage.getItem('token')!= null ? <AddingPostPage />: <ErrorPage />,
  },
  {
    path: "/feed",
    element: localStorage.getItem('token')!= null ? <FeedPage /> : <ErrorPage />,
  },
  {
    path: "/messages",
    element: localStorage.getItem('token')!= null ? <MessagesPage /> : <ErrorPage />,
  },
  {
    path: "/my-feed",
    element: localStorage.getItem('token')!= null ? <MyFeedPage /> : <ErrorPage />,
  },
  {
    path: "/post/:postId",
    element: localStorage.getItem('token')!= null ? <PostPage /> : <ErrorPage />,
  },
  {
    path: "/profile",
    element: localStorage.getItem('token')!= null ? <ProfilePage /> : <ErrorPage />,
  },
  {
    path: "/profile/:profileId",
    element: localStorage.getItem('token')!= null ? <AnotherProfilePage /> : <ErrorPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/search",
    element: localStorage.getItem('token')!= null ? <SearchPage /> : <ErrorPage />,
  },
  {
    path: "/analitic",
    element: localStorage.getItem('token')!= null ? <AnaliticPage /> : <ErrorPage />,
  },
  {
    path: "/editing-profile",
    element: localStorage.getItem('token')!= null ? <EditingProfilePage /> : <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

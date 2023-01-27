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
import { useSelector } from 'react-redux';
import { IRootState } from './store';



function App() {
  const isLoggedIn = useSelector(
    //(state: IRootState) => true
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <ProfilePage /> : <MainPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/adding-post",
      element: <AddingPostPage />,
    },
    {
      path: "/feed",
      element: <FeedPage />,
    },
    {
      path: "/messages",
      element: <MessagesPage />,
    },
    {
      path: "/my-feed",
      element: <MyFeedPage />,
    },
    {
      path: "/post",
      element: <PostPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/profile/:profileId",
      element: <AnotherProfilePage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/analitic",
      element: <AnaliticPage />,
    },
    {
      path: "/editing-profile",
      element: <EditingProfilePage />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;

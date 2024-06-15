import React from "react";
import MainNavigation from "../Components/MainNavigation";
import { Outlet } from "react-router-dom";
import classes from './Root.module.css'
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
      <Outlet />
      </main>
      
    </>
  );
}

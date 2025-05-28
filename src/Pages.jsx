import {useContext} from 'react'
import { ThemeContext } from './context';
import React from 'react'
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


const Pages = () => {

    const {darkMode} = useContext(ThemeContext);
  return (
    <div className={` h-full -w-full ${darkMode ? "dark" : ""}`}>
     <Header />
        <section className="grid grid-cols-[25%_75%] gap-3 px-10 py-2  ">
          <Sidebar />
          <MovieList />
        </section>
        <Footer />
    </div>
  )
}

export default Pages
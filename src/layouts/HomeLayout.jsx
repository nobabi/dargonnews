import React from "react";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import CategoryNews from "../pages/CategoryNews";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
return (
<div className="font-poppins">
    <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <LatesNews></LatesNews>
        </section>

    </header>
    <nav>
        <section className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
        </section>
    </nav>
    <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
            <LeftNavbar></LeftNavbar>

        </aside>
        <section className="col-span-6">Main Section

        <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
            <RightNavbar></RightNavbar>

        </aside>
    </main>
</div>
);
};

export default HomeLayout;
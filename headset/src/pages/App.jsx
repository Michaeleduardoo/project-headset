import React, { useEffect } from "react";
import Header from "../components/header.jsx";
import Banner from "../components/banner.jsx";

const App = () => {
  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const headerMenu = document.getElementById("header");

    const toggleMenu = () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    };

    if (burgerMenu && navbarMenu) {
      burgerMenu.addEventListener("click", toggleMenu);
    }

    const closeMenu = () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    };

    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const changeHeaderBackground = () => {
      if (window.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
      } else {
        headerMenu.classList.remove("on-scroll");
      }
    };

    window.addEventListener("scroll", changeHeaderBackground);

    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        navbarMenu.classList.remove("is-active");
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      burgerMenu.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      window.removeEventListener("scroll", changeHeaderBackground);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default App;

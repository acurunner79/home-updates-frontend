import React from "react";
import TopNav from "./TopNav";
import Hamburger from './Hamburger'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    color-scheme: dark;
}

body{
    width: 100vw;
    height: 100vh;
    text-align: center;
    // background-color: rgb(37, 115, 163);
    color-scheme: dark;
}

h1{
    font-size: 45px;
}

button{
    width: 150px;
    height: 30px;
    margin: 15px auto;
    border-radius: 8px;
}

a{
    text-decoration: none;
    color: white;
}
`

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <Hamburger />
            <TopNav />
            <section>{children}</section>
        </div>
    )
}

export default Layout
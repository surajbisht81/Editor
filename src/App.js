import React from "react";
import './App.css';
import EcoIcon from '@material-ui/icons/Eco';
import MainText from "./MainText";
import { Avatar } from "@material-ui/core";

function App() {
  return (
    <div className="app">
        <div className="app__left">
           <EcoIcon className="app__left__logo" />
           <h6>templates</h6>
        </div>

        <div className="app__right">
           <div className="app__right__top">
                <p> &lt; Editing Project heading </p>
                <div id="button__side">
                    <button> UPGRADE </button>
                    <Avatar alt="random_img" src="https://www.wikihow.com/images/thumb/1/17/Be-Random-Step-12-Version-2.jpg/v4-460px-Be-Random-Step-12-Version-2.jpg" />
                </div>
           </div>

           <MainText />
        </div>
    </div>
  );
}

export default App;

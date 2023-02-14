import React,{Fragment} from "react";
import classes from "./Header.module.css"
import Foodimg from "../image/meals.jpg"
export default function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>djie</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
<img src={Foodimg} alt="Tasty Food" />
            </div>
        </Fragment>
    )
}
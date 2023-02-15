import React,{Fragment} from "react";
import classes from "./Header.module.css"
import Foodimg from "../image/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
              <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
<img src={Foodimg} alt="Tasty Food" />
            </div>
        </Fragment>
    )
}
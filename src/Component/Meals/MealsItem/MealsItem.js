import classes from "./MealsItem.module.css"
export default function MealsItem(props){
    const Price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
          <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{Price}</div>
          </div>
          <div></div>  
        </li>
    )
}
import classes from './Rating.module.css';

interface Props {
    value: number;
    text: string;
    color?: string;
}

export default function Rating(props: Props) {

    const value: number = props.value;
    const defaultColor: string = props.color ? props.color : "#f8e825";

  return (
    <div className={classes.rating}>
        <span>
            <i style={{color: defaultColor}} className={value >= 1 ? 'fa fa-star' : value >= 0.5 ? 'fa fa-star-half-o': 'fa fa-star-o'}></i>
            <i style={{color: defaultColor}} className={value >= 2 ? 'fa fa-star' : value >= 1.5 ? 'fa fa-star-half-o': 'fa fa-star-o'}></i>
            <i style={{color: defaultColor}} className={value >= 3 ? 'fa fa-star' : value >= 2.5 ? 'fa fa-star-half-o': 'fa fa-star-o'}></i>
            <i style={{color: defaultColor}} className={value >= 4 ? 'fa fa-star' : value >= 3.5 ? 'fa fa-star-half-o': 'fa fa-star-o'}></i>
            <i style={{color: defaultColor}} className={value >= 5 ? 'fa fa-star' : value >= 4.5 ? 'fa fa-star-half-o': 'fa fa-star-o'}></i>
        </span>
        <span>{props.text && props.text}</span>
    </div>
  )
}


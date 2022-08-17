import classes from './notFound.module.css';
import { Button } from '@cloudscape-design/components';
import { NavLink } from 'react-router-dom';

export default function NotFound() {

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.largeText} > 404  </h1> 
            <br />
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist, or another error has occured</p>
            <NavLink to='/'>
                <Button variant='secondary'>Return Home</Button>
            </NavLink>
        </div>
    )
}
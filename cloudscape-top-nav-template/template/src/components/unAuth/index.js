import classes from './unAuth.module.css'

export default function UnAuth(){

    return(
        <div className={classes.wrapper}>
        <h1>Unauthorized</h1>
        <h3>You are not authorized to view this page</h3> <br/>
        <p>If this is an error, please contact your support team</p>
        </div>
    )
}
import classes from "./profile.module.css";

export default function Profile(props) {
    const username = props.user.name
    const email = props.user.email
    const auth = props.user.auth
    return (
        <div className={classes.wrapper}>
            <h1>Username: {username}</h1>
            <h3>Email: {email}</h3>
            <h3>Authorized: {auth.toString().toUpperCase()}</h3>
        </div>
    )
}
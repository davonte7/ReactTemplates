import classes from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <p className={classes.text}> © 2010 - 2022, {'[Company Name]'} or its affiliates. All Rights Reserved.</p>
        </footer>
    )
}
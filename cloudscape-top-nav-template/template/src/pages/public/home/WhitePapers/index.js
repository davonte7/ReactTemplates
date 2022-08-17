import classes from './WhitePapers.module.css';

const WhitePapers = (props) => {
    return (
        <div>
            <div className={classes.jumbotron}>
                <div className={classes.whitePaperText}>
                    <h1>AWS White Papers</h1>
                    <div className={classes.subtitle}>Find the in-depth information you are looking for</div>
                    <p>The AWS white papers will help to get the in depth information that you need in order to complete your migration
                        as well as have a better understanding of the services you plan on using.</p>
                </div>
                <div className={classes.get_started}>
                    <h5>Explore White Papers</h5>
                    <br />
                    <div>Start Exploring AWS White Papers Now.</div>
                    <br />
                    <a href="https://aws.amazon.com/whitepapers" target="_blank" rel="noreferrer">
                        <button className={classes.button} type="button">Get Started</button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default WhitePapers;
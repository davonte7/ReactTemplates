import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.jumbotron }>
                <div className={classes.headerText}>
                    <h1>[Application Title]</h1>
                    <div className={classes.subtitle}>[Description for your Application]</div>
                    <p>[A more detailed description of your application and its main function]</p>
                </div>
                <div >
                    <img alt="" src="https://d1.awsstatic.com/Marketplace/solutions-center/icons/professional-services-dark2.6787b72c22d4877a5dd90dc7e34eb0a71d331a3d.png" />
                </div>
            </div>
        </div>
    )
};

export default Header;
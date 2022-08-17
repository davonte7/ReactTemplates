import { ColumnLayout } from '@cloudscape-design/components';
import classes from './GetStarted.module.css';

const GetStarted = (props) => {
    return (
            <ColumnLayout columns={3} className={classes.columns}>
                <div className={classes.links}>
                    <a href="https://aws.amazon.com/premiumsupport/?nc2=h_m_bc">
                    <img  src='https://d1.awsstatic.com/webteam/homepage/editorials/Site-Merch_Marketplace_Editorial.25547b7e616177eb433579b534c7d2ad598740ae.png'
                          alt="Business Support"/>
                    <h3 className={classes.linksh3}>[Resource for your Application]</h3>
                    <p className={classes.linksp}>[Description of the resource that supports your application and maybe some information on how to use it.]</p>
                    </a>
                </div>

                <div className={classes.links}>
                    <a href="https://partners.amazonaws.com/search/partners?facets=Use%20Case%20%3A%20Migration">
                        <img src='https://d1.awsstatic.com/webteam/homepage/editorials/Site-Merch_APN_Editorial.12df33fb7e0299389b086fb48dba7b9deeef07df.png'
                             alt="APN Network"/>
                        <h3 className={classes.linksh3}>[Resource for your Application]</h3>
                        <p className={classes.linksp}>[Description of the resource that supports your application and maybe some information on how to use it.]</p>
                    </a>
                </div>

                <div className={classes.links}>
                    <a href="https://www.aws.training/LearningLibrary?query=&filters=Language%3A1&from=0&size=15&sort=_score&hp=tile&tile=fdt">
                        <img src='https://d1.awsstatic.com/webteam/homepage/editorials/Site-Merch_Training_Editorial.5cc72ab0552ba66ef4e36a1a60ee742bc31113c7.png'
                             alt="Free Training"/>
                        <h3 className={classes.linksh3}>[Resource for your Application]</h3>
                        <p className={classes.linksp}>[Description of the resource that supports your application and maybe some information on how to use it.]</p>
                    </a>
                </div>
            </ColumnLayout>


    )
};

export default GetStarted;
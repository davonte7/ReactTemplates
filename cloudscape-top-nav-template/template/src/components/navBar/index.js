import { TopNavigation } from '@cloudscape-design/components';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from "./navBar.module.css";

export default function NavBar(props) {
    const navigate = useNavigate();
    const username = props.user.name;
    const userEmail = props.user.email;
    const isAuth = props.user.auth
    return (
        <div className={classes.wrapper}>
            <TopNavigation
                identity={{
                    href: "/",
                    title: "[Application Name]",
                    logo: {
                        src:
                            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
                        alt: "Application Name"
                    }
                }}
                utilities={[
                    {
                        type: "button",
                        text: "AWS",
                        href: "https://aws.amazon.com/",
                        external: true,
                        externalIconAriaLabel: " (opens in a new tab)"
                    },
                    {
                        type: "menu-dropdown",
                        iconName: "settings",
                        ariaLabel: "Settings",
                        title: "Settings",
                        items: [
                            {
                                id: "edit-profile",
                                text: "Edit Profile",
                                href: '/editprofile',
                                external: false
                            },
                            {
                                id: "settings-project",
                                text: "Project settings"
                            }
                        ],
                        onItemClick: ((event) => {
                            if (event.detail.external === false) {
                                event.preventDefault();
                                navigate(event.detail.href);
                            }

                        })
                    },
                    {
                        type: "menu-dropdown",
                        text: username,
                        description: userEmail,
                        iconName: "user-profile",
                        items: [
                            { id: "profile", text: "Profile", href: "/profile", external: false },
                            {
                                id: "support-group",
                                text: "Support",
                                items: [
                                    {
                                        id: "documentation",
                                        text: "Documentation",
                                        href: "#",
                                        external: true,
                                        externalIconAriaLabel:
                                            " (opens in new tab)"
                                    },
                                    { id: "support", text: "Support" },
                                    {
                                        id: "feedback",
                                        text: "Feedback",
                                        href: "#",
                                        external: true,
                                        externalIconAriaLabel:
                                            " (opens in new tab)"
                                    }
                                ]
                            },
                            { id: "signout", text: "Sign out" }
                        ],
                        onItemClick: ((event) => {
                            if (event.detail.external === false) {
                                event.preventDefault();
                                navigate(event.detail.href);
                            }

                        })
                    }
                ]}

                i18nStrings={{
                    searchIconAriaLabel: "Search",
                    searchDismissIconAriaLabel: "Close search",
                    overflowMenuTriggerText: "More",
                    overflowMenuTitleText: "All",
                    overflowMenuBackIconAriaLabel: "Back",
                    overflowMenuDismissIconAriaLabel: "Close menu"
                }}
                className={classes.navBar}
            />
            <ul className={classes.subNavBar}>
                <li className={classes.subNavItem}><NavLink to='/'>Home</NavLink></li>
                <li className={classes.subNavItem}><NavLink to='/data'>Data</NavLink></li>
                <li className={classes.subNavItem}><NavLink to='/resources'>Resources</NavLink></li>
                
                {isAuth ? <li className={classes.subNavItem}><NavLink to='/'>Admin Area</NavLink></li> : <></>}
            </ul>
        </div>
    )
}
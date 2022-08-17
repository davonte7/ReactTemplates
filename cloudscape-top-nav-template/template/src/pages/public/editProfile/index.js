import { Button, Form, FormField, Header, Input, SpaceBetween } from '@cloudscape-design/components';
import { useState } from "react";
import classes from "./editProfile.module.css";

export default function EditProfile(props) {
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);

    function updateUser() {
        props.setUser({ name: name, email: email, auth: props.user.auth })
        /* 
            TODO Handle Server Side Auth Update Here 
        */
        console.log("User Updated")
    }

    return (
        <div className={classes.wrapper}>
            <form onSubmit={e => { e.preventDefault() }}>
                <Form
                    actions={
                        <SpaceBetween direction="horizontal" size="s">
                            <Button formAction="none" variant="link">Cancel</Button>
                            <Button variant="primary" onClick={() => updateUser()}>Submit</Button>
                        </SpaceBetween>
                    }
                    header={<Header variant="h1" description="Edit your profile information">
                        Edit Profile
                    </Header>}
                >
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Name">
                            <Input onChange={(e) => setName(e.detail.value)} value={name} type="text" inputMode="text" />
                        </FormField>
                        <FormField label="Email">
                            <Input onChange={(e) => setEmail(e.detail.value)} value={email} type="email" inputMode="email" />
                        </FormField>
                    </SpaceBetween>
                </Form>
            </form>
        </div>
    )
}
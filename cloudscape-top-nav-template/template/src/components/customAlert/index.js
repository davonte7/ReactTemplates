import { Alert } from '@cloudscape-design/components'
import { useState } from 'react'
import classes from './customAlert.module.css'

export default function CustomAlert(props) {
    const [visible, setVisible] = useState(props.isVisible)
    return (
        <div className={classes.alert}>
            <Alert
                /* Types consist of success, error, warning, info  */
                type={props.type}
                dismissAriaLabel="Close alert"
                header={props.header}
                visible={visible}
                onDismiss={() => setVisible(false)}
                dismissible
            > {props.message}
            </Alert>
        </div>
    )
}
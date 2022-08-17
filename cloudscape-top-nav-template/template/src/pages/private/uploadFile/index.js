
import classes from "./uploadFile.module.css";
import UnAuth from "../../../components/unAuth";

import FileUploader from "../../../components/fileUploader";
export default function UploadFile(props) {

    return (
        <>
            {props.user.auth ?
                <>
                    <div className={classes.wrapper}>
                        {/* Username is passed through for 'uploadedBy' metadata */}
                        <FileUploader user={props.user.name} />
                    </div>
                </>
                : <UnAuth />
            }
        </>
    )
}
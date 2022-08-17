import classes from './fileUploader.module.css'
import { Form, Header, Button, SpaceBetween, FormField, Input, Container, Textarea } from '@cloudscape-design/components';
import { useState } from 'react'
export default function FileUploader(props) {

    const [fileName, setFileName] = useState('')
    const [fileDesc, setFileDesc] = useState('')
    const [file, setFile] = useState(null)
    const [filePreview, setFilePreview] = useState(null)

    const onFileUpload = (detail) =>{
        const uploadedFile = detail.target.files[0]
        const fileType = ((uploadedFile.type).split('/'))[0]
        const fileURL = URL.createObjectURL(uploadedFile)
        setFilePreview({url:fileURL, type: fileType})
        setFile(uploadedFile)
    }

    const handleSubmit = (e) =>{
        const today = new Date()
        e.preventDefault()
        const temp = file
        const formattedFile = {
            name: fileName,
            description: fileDesc,
            file: temp,
            uploadDate: (today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear() ),
            uploadedBy: props.user
        }
        console.log('formatted file') 
        console.log(formattedFile)
        console.log("Submitted")
    } 

    console.log(file)
    return (
        <div className={classes.wrapper}>
            <form onSubmit={e => handleSubmit(e)}>
                <Form
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button formAction="none" variant="link">
                                Cancel
                            </Button>
                            <Button variant="primary">Submit</Button>
                        </SpaceBetween>
                    }
                >
                    <Container
                        header={
                            <Header variant="h2">
                                Upload a File
                            </Header>
                        }
                    >
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="File Name">
                                <Input value={fileName} onChange={({detail}) => setFileName(detail.value)} />
                            </FormField>
                            <FormField label="File Description">
                                <Textarea value={fileDesc} onChange={({detail}) => setFileDesc(detail.value)} />
                            </FormField>
                            <FormField label="File">
                                <input type={'file'} onChange={(detail) => onFileUpload(detail)} multiple={false}/>
                            </FormField>
                            <FormField label="File Preview">
                            {filePreview !== null 
                            ? 
                            filePreview.type ==='image' 
                                    ?
                                        <img src={filePreview.url} style={{width:"40%"}} alt={fileName}/>
                                    :   <p style={{fontStyle:"oblique",fontWeight:"bold"}}>{filePreview.type + " file, No Preview Provided"} </p>  
                            : <p style={{fontStyle:"oblique",fontWeight:"bold"}}>Upload a file to see a preview</p>}
                            </FormField>
                            
                        </SpaceBetween>
                    </Container>
                </Form>
            </form>
            
        </div>
    )
}
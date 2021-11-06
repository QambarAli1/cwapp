import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import * as Yup from 'yup';
import { textAlign } from "@mui/system";


function CreatePost() {

    function onSubmitFunction(values, { resetForm }) {
        if (values.post.length < 2) {
            console.log('Write something to post')
            alert("Write something to post")
        }
        else {
            console.log("values: ", values)
            resetForm({ values: '' })
        }
    }

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        // validationSchema: PostSchema,
        onSubmit: onSubmitFunction,
    });


    return (
        <div className='post-user'>
            <div className='post-form'>
                <h1>CREATE POST HERE</h1>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>

                        <TextareaAutosize
                            className='TextareaAutosize'
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="What's on your mind ..."

                            name="post"
                            value={formik.values.post}
                            onChange={formik.handleChange}

                            error={formik.touched.post && Boolean(formik.errors.post)}
                            helperText={formik.touched.post && formik.errors.post}
                        />
                        <div className='post-btn'>
                            <Button sx={{
                                width: 90,
                                textAlign: 'center'
                            }} size='medium' variant="contained" color="primary" type="submit">Post</Button>
                        </div>
                    </Stack>
                </form>
                
            </div>
        </div>
        
    );
}

export default CreatePost;
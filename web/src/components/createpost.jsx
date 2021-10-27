import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import * as Yup from 'yup';

// const dev = "http://localhost:5000"
// const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";

// const PostSchema = Yup.object().shape({
//     post: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),

// });

function CreatePost() {

    function onSubmitFunction(values, { resetForm }) {
        if(values.post.length<2){
            console.log('Write something to post')
            alert("Write something to post")
        }
        else{
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
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="What's on your mind ..."
                            style={{ width: 300 , padding:8 }}
        
                            name="post"
                            value={formik.values.post}
                            onChange={formik.handleChange}

                            error={formik.touched.post && Boolean(formik.errors.post)}
                            helperText={formik.touched.post && formik.errors.post}
                        />
                        <Button size='medium' variant="contained" color="primary" type="submit">Post</Button>
                    </Stack>
                </form>
                <h2> {values.post} </h2>
            </div>


        </div>
    );
}

export default CreatePost;
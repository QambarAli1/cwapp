import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

// const dev = "http://localhost:5000"
// const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

function Login() {

    function onSubmitFunction(values, { resetForm }) {
        console.log("values: ", values)
        resetForm({ values: '' })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: onSubmitFunction,
    });


    return (
        <div className='form-user'>
            <div className='login-form'>
                <h1>LOGIN</h1>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            size="small"
                            color="primary"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"

                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}

                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            size="small"
                            color="primary"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type='password'

                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}

                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <Button size='medium' variant="contained" color="primary" type="submit">Login</Button>
                        <Button size='medium' variant="text" color="success" sx={{ fontWeight: 'bold' }} >Create New Account</Button>
                    </Stack>
                </form>
            </div>


        </div>
    );
}

export default Login;
import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// const dev = "http://localhost:5000"
// const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";


function Signup() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
        },
        onSubmit: onSubmitFunction
    });

    function onSubmitFunction(values) {
        console.log("values: ", values)

    }


    return (
        <div className='form-user'>

            <div>
            <h1>LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        size="small"
                        color="primary"
                        id="outlined-basic"
                        label="email"
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

                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}

                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
                </Stack>
            </form>
            </div>


        </div>
    );
}

export default Signup;
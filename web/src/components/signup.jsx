import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

// const dev = "http://localhost:5000"
// const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short Name!')
    .max(30, 'Too Long Name!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .required("required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, "to short")
    .max(11, "to long"),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

});

function Signup() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: onSubmitFunction,
  });

  function onSubmitFunction(values, { resetForm }) {
    console.log("values: ", values)
    resetForm({ values: '' })
}


  return (
    <div className='form-user'>
      <div className='signup-form'>
        <h1>SIGN UP</h1>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              size="small"
              color="primary"
              id="outlined-basic"
              label="Name"
              variant="outlined"

              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}

              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

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
              id="filled-basic"
              label="Number"
              variant="outlined"

              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}

              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <TextField
              fullWidth
              size="small"
              color="primary"
              id="filled-basic"
              label="Password"
              variant="outlined"
              type='password'

              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}

              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
            <Button size='medium' variant="text" color="success" sx={{fontWeight:'bold'}} >Login</Button>

          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Signup;
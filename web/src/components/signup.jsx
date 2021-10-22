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

            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
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

            name="Number"
            value={formik.values.address}
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

            name="password"
            value={formik.values.address}
            onChange={formik.handleChange}

            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
        </Stack>
      </form>


    </div>
  );
}

export default Signup;
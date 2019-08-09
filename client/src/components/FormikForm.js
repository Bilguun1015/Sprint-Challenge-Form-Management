import React, {useState, useEffect} from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Display from './Display'

const RegistrationForm = ({ errors, touched}) => {
    const [users, setUsers] = useState()
    console.log(users)

    useEffect(() => {
       axios
            .get(`http://localhost:5000/api/restricted/data`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response))
    }, [])
    return(
        <>
            <Form>
                <Field type="text" name="username" placeholder="username"/>
                {touched.username && errors.username && <p>{errors.username}</p>} 

                <Field type="password" name="password" placeholder="password"/>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <button type="submit">Submit</button>
            </Form>
            {users && users.map(user => {
                return <Display key={user.name} name={user.name} course={user.course} />
            })}
            
        </>
    )
    
}

const FormikRegistration = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().min(8, 'Minimum 8 characters required').required('Password is required')
    }),

    handleSubmit(values){
        axios
            .post(`http://localhost:5000/api/register`, values)
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    }
})(RegistrationForm)

export default FormikRegistration
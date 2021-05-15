import React, {useRef, useState} from 'react'
import {Form, Card, Button,Alert,Container} from 'react-bootstrap'
import FormContainer from './FormContainer'
import {Link} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'


const Login = ({history}) => {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async(e) => {
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem('login',`${emailRef.current.value}`)
            history.push('/dashboard')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
        
    }
    return (
        <Container style={{height:'100vh', marginTop:'2em'}}>
        <FormContainer style={{marginTop:'3em'}}>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email' className="mb-2">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password" className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" variant='primary'>Login</Button>
                    <div className="w-100 text-center mt-2">
                       <Link to="/forgetPassword">Forget Password ?</Link> 
                    </div>
                </Form>
        </FormContainer>       
        
        <div className="w-100 text-center mt-2">
            Need an account ? <Link to="/signup">Register</Link> 
        </div>
        </Container>
    )
}

export default Login

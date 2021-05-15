import React, {useRef, useState} from 'react'
import {Form, Card, Button,Alert, Container} from 'react-bootstrap'
import FormContainer from './FormContainer'
import {Link} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'


const Signup = ({history}) => {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async(e) => {
        e.preventDefault()
        
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            console.log(`${passwordRef.current.value}+" "+${confirmPasswordRef.current.value}`)
            return setError('Passwords does not match')
        }
        
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem('login',`${emailRef.current.value}`)
            history.push('/dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
        
    }
    return (
        <Container style={{height:'100vh', marginTop:'2em'}}>
        <FormContainer className="mt-3">
                <h2 className="text-center mb-4">Sign Up</h2>
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
                    <Form.Group controlId="confirmPassword" className="mb-4" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={confirmPasswordRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" variant='primary'>Sign Up</Button>
                </Form>
        </FormContainer>       
        
        <div className="w-100 text-center mt-2">
            Already have an account ? <Link to="/">Log In</Link> 
        </div>
        </Container>
    )
}

export default Signup

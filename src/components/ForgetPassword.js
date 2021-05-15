import React,{useRef, useState} from 'react'
import { Container, Form,Alert,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from './FormContainer'
import {useAuth} from '../Context/AuthContext'

const ForgetPassword = () => {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const {resetPassword} = useAuth()
    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check Your Email For Furthur Instruction')
        } catch {
            setError('Invalid Email Address')
        }
        setLoading(false)
    }
    return (
        <Container style={{height:'100vh', marginTop:'2em'}}>
        <FormContainer style={{marginTop:'3em'}}>
                <h2 className="text-center mb-4">Password Reset</h2>
                {message && <Alert variant='success'>{message}</Alert>}
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email' className="mb-2">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" variant='primary'>Reset Password</Button>
                </Form>
        </FormContainer>       
        
        <div className="w-100 text-center mt-2">
            already have an account ? <Link to="/">Log In</Link> 
        </div>
        </Container>
    )
}

export default ForgetPassword

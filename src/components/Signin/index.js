import React from 'react'
import { Container, FormContent, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon> Student Portal</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1><img src="/images/logo1.png" width={70} height={70} alt="AAST LOGO"/> <br /> Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Student ID</FormLabel>
                        <FormInput type="text" name="username" placeholder="student ID" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput  type="password" name="password" placeholder="password" required />
                        <FormButton type="submit" className="btnss"> Sign In</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container> 
        </>
    )
}

export default SignIn

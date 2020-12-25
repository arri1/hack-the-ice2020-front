import React from 'react'
import styled from 'styled-components'
import {Form} from 'antd'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`
const FormContainer = styled.div`
  box-shadow: black;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`

const Login = () => {
    return (
        <Container>
            <Title>
                Login
            </Title>
            <FormContainer>
                <Form>
                    <Form.Item

                    >

                    </Form.Item>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default Login

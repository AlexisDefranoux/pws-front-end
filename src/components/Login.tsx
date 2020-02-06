import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Form, Icon, Input} from "antd";
import { FormComponentProps } from 'antd/es/form';

interface UserFormProps extends FormComponentProps {
    username: string;
    password: string;
    remember: any;
}

class Login extends Component<UserFormProps, any>  {

    handleSubmit(e: any) {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="Login" style={{maxWidth: "600px", margin: "auto"}}>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" style={{float: "right"}} href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create<UserFormProps>()(Login);

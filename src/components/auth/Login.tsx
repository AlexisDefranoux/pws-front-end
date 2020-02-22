import React, {Component} from 'react';
import {Button, Card, Checkbox, Form, Icon, Input} from "antd";
import { FormComponentProps } from 'antd/es/form';
import {Link, Redirect} from "react-router-dom";
import Parse from 'parse';

interface LoginFormProps extends FormComponentProps {}

class Login extends Component<LoginFormProps, any>  {

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    await Parse.User.logIn(values.username, values.password);
                    this.setState({});
                } catch(err) {
                    console.error(err);
                }
            }
        });
    };

    render() {
        if(Parse.User.current()) return <Redirect to='/'/>;
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="Login" style={{maxWidth: "600px", margin: "auto"}}>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item label={'username'}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label={'password'}>
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
                        <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                            Log in
                        </Button>
                        Or <Link to={"/register"}>register now!</Link>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create<LoginFormProps>()(Login);

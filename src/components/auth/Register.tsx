import React, {Component} from 'react';
import {Button, Card, Form, Icon, Input, notification, Tooltip} from "antd";
import {FormComponentProps} from 'antd/es/form';
import Parse from 'parse';
import { Redirect } from 'react-router-dom';

interface RegisterFormProps extends FormComponentProps {}

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

type MyState = {
    confirmDirty: boolean,
    redirect?: string
};

class Register extends Component<RegisterFormProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            confirmDirty: false,
            redirect: undefined
        };
    }

    handleSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        this.props.form.validateFields( async (err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const user = new Parse.User();
                user.set("username", this.props.form.getFieldValue('nickname'));
                user.set("password", this.props.form.getFieldValue('password'));
                user.set("email", this.props.form.getFieldValue('email'));
                try {
                    await user.signUp();
                    this.setState(state => {
                        return {redirect: '/shop', confirmDirty: state.confirmDirty};
                    });
                } catch(err) {
                    notification.open({
                        type: "error",
                        message: 'Failed to register you',
                    });
                    console.error(err);
                }
            }
        });
    };

    handleConfirmBlur = (e: any) => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule: any, value: any, callback: any) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule: any, value: any, callback: any) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        if(this.state.redirect) return <Redirect to={this.state.redirect}/>;

        const {getFieldDecorator} = this.props.form;
        return (
            <Card title="Register" style={{maxWidth: "600px", margin: "auto"}}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password/>)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
              Nickname&nbsp;
                                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                        }
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create<RegisterFormProps>()(Register);

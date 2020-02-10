import {Form, Select, Input, Button, Checkbox} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import React, { Component } from 'react';
import UploadImage from "./UploadImage";
import TagForm from "./TagForm";

const { Option } = Select;

interface AddPluginFormProps extends FormComponentProps {

}

type MyState = { imageUrl: any, tags: string []};
class AddPlugin extends Component<AddPluginFormProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            imageUrl: undefined,
            tags: [],
        };
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = (value: string) => {
        console.log(value);
        // this.props.form.setFieldsValue({
        //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
    };

    setImageValidate = (canValidateImage : any) => {
        this.setState({imageUrl: canValidateImage});
    };

    setTags = (tags : string []) => {
        this.setState({tags: tags});
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Version">
                    {getFieldDecorator('version', {
                        rules: [{ required: true, message: 'Please input your version!' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Description">
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input your description!' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item  label="Open Source">
                    {getFieldDecorator('open_source', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            Le logiciel est en Open Source
                        </Checkbox>,
                    )}
                </Form.Item>

                <Form.Item label="Image">
                    {getFieldDecorator('image', {
                        trigger: 'isImageValidate',
                        rules: [{ validator: () => {return this.state.imageUrl !== undefined}, required: true, message: 'Please upload your image!' }],
                    })(
                            <UploadImage isImageValidate = {this.setImageValidate}/>
                    )}
                </Form.Item>

                <Form.Item label="Category">
                    {getFieldDecorator('category', {
                        rules: [{ required: true, message: 'Please select your category!' }],
                    })(
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="modulation">Modulation</Option>
                            <Option value="distorsion">Distorsion</Option>
                            <Option value="egalisation">Egalisation</Option>
                            <Option value="accordeur">Accordeur</Option>
                        </Select>,
                    )}
                </Form.Item>

                <Form.Item label="Tags">
                    {getFieldDecorator('tags', {
                        trigger: 'returnTags',
                        rules: [{ required: false }],
                    })(<TagForm returnTags = {this.setTags}/>)}
                </Form.Item>

                <Form.Item label="URL">
                    {getFieldDecorator('url', {
                        rules: [{ required: false }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const AddPluginForm = Form.create({})(AddPlugin);

export default AddPluginForm;
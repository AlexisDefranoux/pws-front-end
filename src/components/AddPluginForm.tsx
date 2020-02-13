import {Form, Select, Input, Button, Checkbox, Card} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import React, { Component } from 'react';
import UploadImage from "./UploadImage";
import TagForm from "./TagForm";

import Parse from 'parse';

const { Option } = Select;

interface AddPluginFormProps extends FormComponentProps {

}

type MyState = { imageUrl: any, tags: string [], categories: string[]};
class AddPlugin extends Component<AddPluginFormProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            imageUrl: undefined,
            tags: [],
            categories: ["distortion", "equalization", "tuner"],
        };
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const plugin = new (Parse.Object.extend("Plugin"))(
                    {
                        name: values.name,
                        version: values.version,
                        description: values.description,
                        open_source: values.open_source,
                        category: values.category,
                        tags: "TODO",
                        url: values.url
                    }
                );
                try {
                    await values.image.save();
                    await values.zip_plugin.save();
                    plugin.set("image", values.image);
                    plugin.set("zip_plugin", values.zip_plugin);
                    await plugin.save();
                    console.log("success")
                } catch (e) {
                    console.error(e);
                }
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
            <Card title="Add a plugin">
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
                            initialValue: false,
                        })(
                            <Checkbox>
                                The plugin is Open Source
                            </Checkbox>,
                        )}
                    </Form.Item>

                    <Form.Item label="Image">
                        {getFieldDecorator('image', {
                            trigger: 'isImageValidate',
                            rules: [{ validator: () => {return this.state.imageUrl !== undefined}, required: true, message: 'Please upload your image!' }],
                        })(
                                <UploadImage isImageValidate = {this.setImageValidate} isZip={false}/>
                        )}
                    </Form.Item>

                    <Form.Item label="Plugin's zip">
                        {getFieldDecorator('zip_plugin', {
                            trigger: 'isImageValidate',
                            rules: [{ validator: () => {return this.state.imageUrl !== undefined}, required: true, message: 'Please upload your zip!' }],
                        })(
                            <UploadImage isImageValidate = {this.setImageValidate} isZip={true}/>
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
                                {this.state.categories.map(el =>
                                    <Option key={el} value={el}>{el}</Option>
                                )}
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
                            initialValue: '',
                            rules: [{ required: false }],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

const AddPluginForm = Form.create({})(AddPlugin);

export default AddPluginForm;
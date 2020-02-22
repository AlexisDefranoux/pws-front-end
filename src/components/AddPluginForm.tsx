import {Form, Select, Input, Button, Checkbox, Card, InputNumber, notification} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import React, { Component } from 'react';
import UploadImageZip from "./UploadImageZip";
import TagForm from "./TagForm";

import Parse from 'parse';
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

interface AddPluginFormProps extends FormComponentProps {}

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
                const Category = Parse.Object.extend("Category");
                const query = new Parse.Query(Category);
                query.equalTo("name", values.category);
                const results = await query.find();
                if (results.length === 0)
                    console.error("Category " + values.category + " does not exist.");

                const plugin = new (Parse.Object.extend("Plugin"))(
                    {
                        name: values.name,
                        version: values.version,
                        short_description: values.short_description,
                        long_description: values.long_description,
                        open_source: values.open_source,
                        category: results[0], //TODO
                        tags: values.tags,
                        url: values.url
                    }
                );
                try {
                    await values.image.save();
                    await values.zip_plugin.save();
                    plugin.set("image", values.image);
                    plugin.set("zip_plugin", values.zip_plugin);
                    await plugin.save();
                    notification.open({
                        type: "success",
                        message: 'Your plugin has been posted',
                    });
                } catch (e) {
                    notification.open({
                        type: "error",
                        message: 'Failed to post your plugin',
                    });
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

                    <Form.Item label="Short Description">
                        {getFieldDecorator('short_description', {
                            rules: [{ required: true, message: 'Please input your description!' }],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="Long Description">
                        {getFieldDecorator('long_description', {
                            rules: [{ required: true, message: 'Please input your long description!' }],
                        })(<TextArea rows={3}/>)}
                    </Form.Item>

                    <Form.Item label="Price">
                        {getFieldDecorator('price', {
                            rules: [{ required: true, message: 'Please input your price!' }],
                        })(<InputNumber min={0}/>)}
                        <span className="ant-form-text">€</span>
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
                                <UploadImageZip isImageValidate = {this.setImageValidate} isZip={false}/>
                        )}
                    </Form.Item>

                    <Form.Item label="Plugin's zip">
                        {getFieldDecorator('zip_plugin', {
                            trigger: 'isImageValidate',
                            rules: [{ validator: () => {return this.state.imageUrl !== undefined}, required: true, message: 'Please upload your zip!' }],
                        })(
                            <UploadImageZip isImageValidate = {this.setImageValidate} isZip={true}/>
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

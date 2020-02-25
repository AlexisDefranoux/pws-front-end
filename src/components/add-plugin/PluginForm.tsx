import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Parse from 'parse';
import {Redirect, useHistory} from 'react-router-dom';

import {RcFile} from 'antd/lib/upload';
import {Checkbox, Form, Input, InputNumber, SubmitButton} from 'formik-antd';
import {Card, Col, Icon, message, notification, Row, Select, Upload} from 'antd';

import TagForm from './TagForm';

const {Option} = Select;

const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    version: Yup.string()
        .matches(/^(\d+\.)?(\d+\.)?(\*|\d+)$/, 'Incorrect format')
        .required('Required'),
    short_description: Yup.string()
        .min(10, 'Too short')
        .max(200, 'Too long')
        .required('The plugin needs a short description'),
    long_description: Yup.string()
        .min(10, 'Too short')
        .required('Required'),
    image: Yup.object()
        .required('Required'),
    zip_plugin: Yup.object()
        .required('Required'),
    price: Yup.number()
        .required('Required'),
    category: Yup.object()
        .required('Required'),
    open_source: Yup.boolean()
        .required('Required'),
    official: Yup.boolean()
        .required('Required'),
    tags: Yup.array()
        .of(Yup.string()),
    url: Yup.string(),
    user: Yup.object()
});

const dummyRequest = (options: { file: any, onSuccess: any }) => {
    setTimeout(() => options.onSuccess('ok'), 0);
};

type Props = {};

const PluginForm: React.FC<Props> = () => {

    let history = useHistory();

    const initialValues = {
        name: '',
        version: '1.0.0',
        short_description: '',
        long_description: '',
        image: undefined,
        zip_plugin: undefined,
        price: 0,
        category: undefined,
        open_source: false,
        official: false,
        tags: [],
        url: '',
        user: Parse.User.current()
    };

    const [categories, setCategories]: [Parse.Object[], any] = useState([]);


    async function fetchCategories() {
        const Category = Parse.Object.extend('Category');
        const query = new Parse.Query(Category);
        const results = await query.find();
        setCategories(results);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    async function handleSubmit(values: any, options: any) {
        const plugin = new (Parse.Object.extend('Plugin'))({...values});
        try {
            notification.open({
                type: "info",
                message: 'submitting...',
            });
            await plugin.save();
            options.setSubmitting(true);
            notification.open({
                type: "success",
                message: 'Your plugin has been posted',
            });
            history.push('/detail/'+ plugin.id);
        } catch (err) {
            console.error(err);
            options.setSubmitting(false);
            notification.open({
                type: "error",
                message: 'Failed to post your plugin',
            });
        }
    }


    function checkImageUpload(file: RcFile): boolean {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    function checkZipUpload(file: RcFile): boolean {
        const isZip = (file.type === 'application/zip' || file.type === 'application/x-zip-compressed');
        if (!isZip) {
            message.error('You can only upload Zip file!');
        }
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isLt50M) {
            message.error('Plugin must smaller than 50MB!');
        }
        return isZip && isLt50M;
    }

    if (!Parse.User.current()) return <Redirect to='/'/>;

    return (
        <Card title='Add a new plugin'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({setFieldValue, values}) => (
                    <Form>
                        <Row gutter={15} type="flex">
                            <Col span={9}>
                                <Form.Item name="name" hasFeedback>
                                    <Input name="name" placeholder="Name"/>
                                </Form.Item>
                            </Col>

                            <Col span={6}>
                                <Form.Item name="version" hasFeedback>
                                    <Input name="version" placeholder="Version"/>
                                </Form.Item>
                            </Col>

                            <Col span={9}>
                                <Form.Item name="open_source">
                                    <Checkbox name="open_source">Open Source</Checkbox>
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="short_description" hasFeedback>
                                    <Input.TextArea name="short_description" placeholder="Short Description"/>
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="long_description" hasFeedback>
                                    <Input.TextArea name="long_description" placeholder="Long Description"/>
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="price" label="Price €" hasFeedback>
                                    <InputNumber name="price" placeholder="Price"/>
                                </Form.Item>
                            </Col>

                            <Col span={6}>
                                <Form.Item name="category" label="Category" hasFeedback>
                                    <Select
                                        placeholder="Select a category "
                                        onSelect={(value: any) => setFieldValue('category', categories[parseInt(value)])}>
                                        {categories.map((c, index) => (
                                            <Option key={c.id} value={index}>{c.attributes.name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={18}>
                                <Form.Item name="tags" label="Tags">
                                    <TagForm returnTags={(tags: any) => setFieldValue('tags', tags)}/>
                                </Form.Item>
                            </Col>

                            <Col>
                                <Form.Item name="image" hasFeedback>
                                    <Upload
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        beforeUpload={checkImageUpload}
                                        customRequest={dummyRequest}
                                        onChange={(info: any) =>
                                            setFieldValue('image', new Parse.File('image', info.file.originFileObj))}
                                    >
                                        {values.image ?
                                            <img src="https://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png"
                                                 alt="avatar" style={{width: '100%'}}/> :
                                            <div>
                                                <Icon type='plus'/>
                                                <div className="ant-upload-text">Drop image</div>
                                            </div>
                                        }
                                    </Upload>
                                </Form.Item>
                            </Col>

                            <Col>
                                <Form.Item name="zip_plugin" hasFeedback>
                                    <Upload
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        beforeUpload={checkZipUpload}
                                        customRequest={dummyRequest}
                                        onChange={(info: any) =>
                                            setFieldValue('zip_plugin', new Parse.File('plugin', info.file.originFileObj))}
                                    >
                                        {values.zip_plugin ?
                                            <img src="https://image.flaticon.com/icons/png/512/1465/1465628.png"
                                                 alt="avatar" style={{width: '100%'}}/> :
                                            <div>
                                                <Icon type='plus'/>
                                                <div className="ant-upload-text">Drop plugin</div>
                                            </div>
                                        }
                                    </Upload>
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="url">
                                    <Input name="url" placeholder="Youtube video ID"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                )}
            </Formik>
        </Card>
    );
};

export default PluginForm;

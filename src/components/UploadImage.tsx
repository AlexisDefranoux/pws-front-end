import React, { Component } from 'react';
import {Icon, Upload, message} from "antd";
import {UploadChangeParam} from "antd/es/upload";

type MyProps = { isImageValidate : Function, isZip : boolean };
type MyState = { loading : boolean, imageUrl : any  };
class UploadImage extends Component<MyProps, MyState> {
    constructor(props : any) {
        super(props);
        this.state = {
            loading: false,
            imageUrl: undefined
        };
    }

    handleChange = (info: UploadChangeParam) => {
        this.props.isImageValidate(this.state.imageUrl);
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done' && info.file.originFileObj) {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, (imageUrl: any) => {
                    this.setState({
                        imageUrl,
                        loading: false,
                    });
                    this.props.isImageValidate(imageUrl)
                },
            );
        }
    };

    getBase64(img: File | Blob, callback: { (imageUrl: any): void; (arg0: (string | ArrayBuffer | null)): any }) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file: { type: string, size: number; }) => {
        if (this.props.isZip)
            return this.beforeUploadZip(file);
        else
            return this.beforeUploadJpgPng(file)
    };

    beforeUploadZip(file: { type: string, size: number; }) {
        const isZip = file.type === 'application/x-zip-compressed';
        if (!isZip)
            message.error('You can only upload ZIP file!');
        return isZip;
    }

    beforeUploadJpgPng(file: { type: string; size: number; }) {
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

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="image"
                listType="picture-card"
                className="image-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="plugin" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        );
    }
}


export default UploadImage;
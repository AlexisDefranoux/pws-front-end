import React, {Component} from 'react';
import {Icon, Input, Tag} from 'antd';
import {TweenOneGroup} from 'rc-tween-one';

type MyProps = { returnTags: Function };
type MyState = { tags: string [], inputVisible: boolean, inputValue: string };

class TagForm extends Component<MyProps, MyState> {
    private input: any;

    constructor(props: any) {
        super(props);
        this.state = {
            tags: [],
            inputVisible: false,
            inputValue: '',
        };
        this.props.returnTags(this.state.tags);
    }

    handleClose = (removedTag: any) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({tags});
        this.props.returnTags(tags);
    };

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus());
    };

    handleInputChange = (e: { target: { value: any; }; }) => {
        this.setState({inputValue: e.target.value});
    };

    handleInputConfirm = () => {
        const {inputValue} = this.state;
        let {tags} = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
        this.props.returnTags(tags);
    };

    saveInputRef = (input: any) => (this.input = input);

    forMap = (tag: string) => {
        const tagElem = (
            <Tag
                closable
                onClose={(e: { preventDefault: () => void; }) => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{display: 'inline-block'}}>
        {tagElem}
      </span>
        );
    };

    render() {
        const {tags, inputVisible, inputValue} = this.state;
        const tagChild = tags.map(this.forMap);
        return (
            <TweenOneGroup
                enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                }}
                leave={{opacity: 0, width: 0, scale: 0, duration: 200}}
                appear={false}
            >
                {tagChild}

                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{width: 78}}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}

                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{background: '#fff', borderStyle: 'dashed'}}>
                        <Icon type="plus"/> New Tag
                    </Tag>
                )}
            </TweenOneGroup>
        );
    }
}

export default TagForm;

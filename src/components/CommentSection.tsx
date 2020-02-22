import {Button, Comment, Icon, List, notification} from 'antd';
import React, {Component} from "react";
import Form from 'antd/es/form';
import TextArea from 'antd/lib/input/TextArea';
import Parse from "parse";

type MyProps = {
    plugin: any;
};
type MyState = {
    comments: any[],
    submitting: boolean,
    newComment: string
};

class CommentSection extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            newComment: ''
        }
    }

    async componentDidMount(): Promise<void> {
        let query = new Parse.Query(Parse.Object.extend("Comment"));
        query.equalTo("plugin", this.props.plugin);
        const comments = await query.find();
        this.setState({ comments: comments });
    }

    handleSubmit = async() => {
        const comment = new (Parse.Object.extend("Comment"))({
            plugin: this.props.plugin,
            user: Parse.User.current(),
            description: this.state.newComment,
        });

        try {
            await comment.save();
            this.state.comments.push(comment);
            this.setState({newComment: '',});
            notification.open({
                type: "success",
                message: 'Your comment has been posted',
            });
        } catch (e) {
            notification.open({
                type: "error",
                message: 'Failed to post your comment',
            });
            console.error(e);
        }
    };

    handleChange = (e: { target: { value: string; }; }) => {
        this.setState({
            newComment: e.target.value,
        });
    };

    render() {
        return (
            <div className="commentSection">
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.comments}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.attributes.user.attributes.username}
                                avatar={<Icon type="user"/>}
                                content={item.attributes.description}
                                datetime={item.createdAt.toLocaleDateString() + ' at ' + item.createdAt.toLocaleTimeString()}
                            />
                        </li>
                    )}
                />
                {Parse.User.current() &&
                    <Form.Item>
                        <TextArea rows={4} onChange={this.handleChange} value={this.state.newComment}/>
                    </Form.Item>
                }
                {Parse.User.current() &&
                    < Form.Item >
                        < Button htmlType="submit" loading={this.state.submitting} onClick={this.handleSubmit}
                        type="primary">
                        Add Comment
                        </Button>
                    </Form.Item>
                }
            </div>
        );
    }
}

export default CommentSection;

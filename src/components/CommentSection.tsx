import {Button, Comment, Icon, List, Tooltip} from 'antd';
import React, {Component} from "react";
import Form from 'antd/es/form';
import TextArea from 'antd/lib/input/TextArea';
import Parse from "parse";

type MyProps = {
    plugin: any;
};
type MyState = {
    comments: any[],
    user: any,
    submitting: boolean,
    newComment: string
};

class CommentSection extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            newComment: '',
            user: ''
        }
    }

    async componentDidMount(): Promise<void> {
        let query = new Parse.Query(Parse.Object.extend("Comment"));
        query.equalTo("plugin", this.props.plugin);
        const comments = await query.find();
        this.setState({ comments: comments });
        console.log(comments);

        //TODO REAL COMMENTS USERS
        let query2 = new Parse.Query(Parse.Object.extend("User"));
        const user = await query2.get('jFtSSqnAaG');
        this.setState({ user: user });
    }


    handleSubmit = async() => {
        const comment = new (Parse.Object.extend("Comment"))({
            plugin: this.props.plugin,
            user: this.state.user,
            description: this.state.newComment,
        });

        try {
            await comment.save();
            this.state.comments.push(comment);
            console.log("success");
            this.setState({
                newComment: '',
            });
        } catch (e) {
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
                            {console.log(item)}
                            <Comment
                                author={this.state.user.username}
                                avatar={<Icon type="user"/>}
                                content={<p>{item.attributes.description}</p>}
                                datetime={
                                    <Tooltip title={item.createdAt.toLocaleDateString() + ' at ' + item.createdAt.toLocaleTimeString()}>
                                        <span>
                                          {item.createdAt.toLocaleDateString() + ' at ' + item.createdAt.toLocaleTimeString()}
                                        </span>
                                    </Tooltip>
                                }
                            />
                        </li>
                    )}
                />
                <Form.Item>
                    <TextArea rows={4} onChange={this.handleChange} value={this.state.newComment}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" loading={this.state.submitting} onClick={this.handleSubmit}
                            type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </div>
        );
    }
}

export default CommentSection;

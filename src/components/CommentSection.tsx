import {Button, Comment, List, Tooltip} from 'antd';
import moment from 'moment';
import React, {Component} from "react";
import Form from 'antd/es/form';
import TextArea from 'antd/lib/input/TextArea';

type MyProps = {};
type MyState = {
    comments: any[],
    submitting: boolean,
    newcommentvalue: string
};

class CommentSection extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            newcommentvalue: '',
        }
    }


    componentDidMount(): void {
        this.setState({
            comments: this.getComments()
        });
    }

    getComments() {
        // sera plus tard chargé depuis le serveur

        return [
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content:
                    "We supply a series of design principles, practical patterns and high quality design" +
                    "resources (Sketch and Axure), to help people create their product prototypes beautifully and" +
                    "efficiently."
                ,
                datetime: (
                    moment()
                        .subtract(1, 'days')
                        .fromNow()
                ),
                datetimestring: (moment()
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')
                )
            },
            {
                author: 'Obi wan',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content:
                    "YES OF COURSE"
                ,
                datetime: (
                    moment()
                        .subtract(3, 'days')
                        .fromNow()
                ),
                datetimestring: (moment()
                        .subtract(3, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')
                )
            }
        ];
    }

    handleSubmit = () => {
        if (!this.state.newcommentvalue) {
            return;
        }

        this.setState({
            submitting: true,
        });

        //TODO Envoyer commentaire serveur et rafraichir section commntaires
    };

    handleChange = (e: { target: { value: string; }; }) => {
        this.setState({
            newcommentvalue: e.target.value,
        });
    };

    render() {
        return (
            <div className="commentSection">
                <List
                    header={`${this.state.comments.length} comments`}
                    itemLayout="horizontal"
                    dataSource={this.state.comments}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={<p>{item.content}</p>}
                                datetime={
                                    <Tooltip title={item.datetimestring}>
                                        <span>
                                          {item.datetime}
                                        </span>
                                    </Tooltip>
                                }
                            />
                        </li>
                    )}
                />
                <Form.Item>
                    <TextArea rows={4} onChange={this.handleChange} value={this.state.newcommentvalue}/>
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

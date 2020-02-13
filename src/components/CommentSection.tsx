import {Comment, List, Tooltip} from 'antd';
import moment from 'moment';
import React, {Component} from "react";

type MyProps = {};
type MyState = {};

class CommentSection extends Component<MyProps, MyState> {

    data = [
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

    render() {
        return (<div className="commentSection">
                <List
                    header={`${this.data.length} comments`}
                    itemLayout="horizontal"
                    dataSource={this.data}
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
            </div>
        );
    }
}

export default CommentSection;

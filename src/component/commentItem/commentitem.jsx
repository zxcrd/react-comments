import React, { Component } from 'react';

export default class CommentList extends Component {
    
    render() { 
        const {comments} = this.props
        return ( 
            <div>
                <p>{comments.userName}说：</p>
                <p>{comments.content}</p>
                <button>删除</button>
            </div>
         )
    }
}

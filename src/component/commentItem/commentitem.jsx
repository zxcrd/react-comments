import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class CommentList extends Component {
    static propTypes = {
        //这个是声明传入的属性
        delete: PropTypes.func.isRequired,
    }

    del = () => {
        const {id} = this.props
        this.props.delete(id)
    }
    render() { 
        const {comments} = this.props       
        return ( 
            <div>
                <p>{comments.userName}说：</p>
                <p>{comments.content}</p>
                <button onClick={this.del}>删除</button>
            </div>
         )
    }
}

import React, { Component } from 'react'
import CommentItem from '../commentItem/commentitem'
import './commentList.scss'
import PropTypes from 'prop-types'
export default class CommentList extends Component {
    static propTypes = {
        delete: PropTypes.func.isRequired
    }

    render() { 
        const {comments} = this.props
        return ( 
            <div className="commentreply">
                评论回复：
                {
                    comments.map((item,index) => <div className='reply' key={index}><CommentItem comments={item} id={index} delete={this.props.delete}/></div>)
                }
                    
            </div>
         );
    }
}
 
 
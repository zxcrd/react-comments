import React, { Component } from 'react';
import CommentItem from '../commentItem/commentitem'
import './commentList.scss'

export default class CommentList extends Component {

    render() { 
        const {comments} = this.props
        return ( 
            <div className="commentreply">
                评论回复：
                {
                    comments.map((item,index) => <div className='reply' key={index}><CommentItem comments={item} /></div>)
                }
                    
            </div>
         );
    }
}
 
 
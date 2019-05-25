import React, { Component } from 'react'
import './app.scss'
//导入组件
import Comment from '../comment/comment'
import CommentList from '../commentList/commentList'

export default  class App  extends Component {
    state = { 
        comments:[
            {
                userName:'小d',
                content:'xxx太难了',
            },
            {
                userName:'小c',
                content:'xxx太简单了',
            },
        ]
     }

     publish = (todo) => {
          const {comments} = this.state
          comments.unshift(todo)
          this.setState({comments})
        // this.setState([{userName:'小明',content:'xxx不难'}],comments)
     }

     delete = (id) => {
        const {comments} = this.state
        comments.splice(id,1)
        this.setState({comments})
     }

    render() { 
        const {comments} = this.state
        return ( 
            <div>
                <div className='banner'>请发表对XXX的评论</div>
                <Comment publish={this.publish} />
                <CommentList comments={comments} delete = {this.delete}/>
            </div>
         )
    }
}
 

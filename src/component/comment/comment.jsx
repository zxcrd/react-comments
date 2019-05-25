import React, { Component } from 'react'
import './comment.scss'

class Comment extends Component {
    //要使用受控组件，必须要有state
    state = {
        userName:'',
        content:'',
    }
   
    submit = (event) => {
        //注意取消默认行为，因为表单按钮的类型是submit,所以会有默认行为
        event.preventDefault()
        const comments = this.state
        this.props.publish(comments) 
        //数据提交到父组件成功后 ，把input中的数据清空
        this.setState({
            userName:'',
            content:'',
        }) 
    }

    handleChangeuser = (event) => {
        const userName = event.target.value
        this.setState({userName})
    }

    handleChangeContent = (event) => {
        const content = event.target.value
        this.setState({content})
    }

    render() { 
        const {userName,content} = this.state
        return ( 
            <form>
                <div className="form-group">
                    <label >用户名</label>
                    <input type="text" className="form-control userName" value={userName} onChange={this.handleChangeuser} placeholder="username" />
                </div>
                <div className="form-group">
                    <label >评论</label>
                    <input type="text" className="form-control content" value={content} onChange={this.handleChangeContent}  placeholder="content"  />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.submit}>提交发布</button>
            </form>
         );
    }
}
 
export default Comment;

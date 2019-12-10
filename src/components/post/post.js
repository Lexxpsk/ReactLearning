import React from 'react'



class Post extends React.Component{
    render(){

        let num = this.props.match.params.num;

        return <div>
            <h1>Post #{num}</h1>
        </div>
    }
}

export default Post
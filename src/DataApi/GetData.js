import React, { Component } from 'react';
import axios from 'axios'

class GetData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts : [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(reponse => {
            this.setState({
                posts: reponse.data
            })
            console.log(reponse);
        })
       
    }
    

    render() {
        const {posts} = this.state
        return (  
            <div>
               {
                   posts.length?
                   posts.map(post =>{
                       return <div key={post.id}><p>{post.name}</p></div>
                   }): null
               }
               
            </div>
        );
    }
}

export default GetData;
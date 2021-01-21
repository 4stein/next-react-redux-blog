import axios from "axios";
import Link from 'next/link'
import MainLayout from "../../components/MainLayout";
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postCommentTC} from "../../redux/reducers/PostReducer";
import {getPostTC} from "../../redux/reducers/PostReducer";


const Post = ({post}) => {
    let commentRef = useRef(null);
    // useSelector
    const commentsList = useSelector((state: any) => state.post.post );
    // useDispatch
    const dispatch = useDispatch();
    const uploadNotes = () => {
        dispatch(getPostTC(post.id))
    }
    const newComment = () => {
        let body = commentRef.current.value
        dispatch(postCommentTC(post.id, body))
        commentRef.current.value = ''
    }
    useEffect(() => {
        uploadNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <MainLayout title={'Post Page'}>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}>Back to all posts</Link>
            <div className="createComment">
                <div className="form-group">
                    <textarea ref={commentRef} className="form-control" placeholder="Comment body"></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={() => newComment()}>Create comment</button>
            </div>

            <h4>Comments:</h4>
            {commentsList.map(comment => <p key={comment.id}>{comment.body}</p>)}
        </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
    const post: any = await axios.get(`https://simple-blog-api.crew.red/posts/${ctx.query.id}?_embed=comments`)
    return {
        post: post.data
    }
}

export default Post;
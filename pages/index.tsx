import Link from 'next/link'
import React, {useEffect} from 'react'
import MainLayout from "../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC, postUsersTC} from "../redux/reducers/PostsReducer";
import {useRef} from "react";



const Posts = () => {

    let titleRef = useRef(null);
    let bodyRef = useRef(null);
    // useSelector
    const postsList = useSelector((state: any) => state.posts.posts);
    // useDispatch
    const dispatch = useDispatch();
    const uploadNotes = () => {
        dispatch(getUsersTC())
    }
    const newNote = () => {
        let title = titleRef.current.value
        let body = bodyRef.current.value
        dispatch(postUsersTC(title, body))
        titleRef.current.value = ''
        bodyRef.current.value = ''
    }
    useEffect(() => {
        uploadNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts Page</h1>
            <p>Write something to create new post.</p>
            <div className="createPost">
                <div className="form-group">
                    <input ref={titleRef} type="text" className="form-control" placeholder="Post title"/>
                </div>
                <div className="form-group">
                    <textarea ref={bodyRef} className="form-control" placeholder="Post body"></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={() => newNote()}>Create post</button>
            </div>
            <ul>
                {postsList.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </MainLayout>

    )
}


export default Posts;
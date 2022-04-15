import './profile.css'
import Info from "./info/info";
import NewPost from "./posts/newPost/newPost";
import Post from "./posts/post/post";
import ContentImg from "./contentImg/contentImg";


const profile = () => {
    return (
        <nav className="profile">
            <ContentImg />
            <Info/>
            <NewPost />
            <Post likeCount='20' text='hello' />
            <Post likeCount='23' text='hello you pidar ' />
        </nav>
    )
}

export default profile;
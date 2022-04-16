import './profile.css'
import Info from "./info/info";
import NewPost from "./posts/newPost/newPost";
import ContentImg from "./contentImg/contentImg";
import Posts from "./posts/posts";


const profile = (props) => {
    return (
        <nav className="profile">
            <ContentImg />
            <Info/>
            <NewPost />
            <Posts postsData={props.profilePage.postsData} />
        </nav>
    )
}

export default profile;
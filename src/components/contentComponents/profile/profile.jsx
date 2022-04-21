import './profile.css'
import Info from "./info/info";
import ContentImg from "./contentImg/contentImg";
import NewPostContainer from "./posts/newPost/newPostContainer";
import PostsContainer from "./posts/postsContainer";


const profile = (props) => {
    return (
        <nav className="profile">
            <ContentImg />
            <Info/>
            <NewPostContainer dispatch={props.dispatch} textareaText = {props.profilePage.NewPostText}/>
            <PostsContainer postsData={props.profilePage.postsData}/>
        </nav>
    )
}

export default profile;
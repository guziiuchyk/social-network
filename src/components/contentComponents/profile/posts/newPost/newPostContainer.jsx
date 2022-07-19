
import './newPost.css';
import {AddPostCreator, updateNewPostTextCreator} from "../../../../../redux/reducers/profileReducer";
import NewPost from "./newPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {textareaNewText:state.profilePage.NewPostText}
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (e) => {dispatch(AddPostCreator(e.target.value))},
        onTextareaChange: (e) => {dispatch(updateNewPostTextCreator(e.target.value))}
    }
}

const  NewPostContainer = connect(mapDispatchToProps,mapStateToProps)(NewPost)

export default NewPostContainer;
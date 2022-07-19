import './newMessage.css'
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../../../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import NewMessage from "./newMessage";


let mapDispatchToProps = (dispatch) => {
    return{
        OnChangeTextarea: (e) => {dispatch(updateNewMessageTextCreator(e.target.value))},
        sendMessage: (e) => {dispatch(sendNewMessageCreator(e.target.value))}
    }
};
debugger
let mapStateToProps = (state) => {
     return {newMessageText:state.dialogsPage.newMessageText}
}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
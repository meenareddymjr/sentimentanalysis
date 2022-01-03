import React from "react";
import CommentService  from "../services/CommentService";
import '../App.css';

class CommentComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            comments:[],
            openText:false,
            commentValue: "",
            sentimentReaction: ""
        }
        this.openTextbox = this.openTextbox.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openTextbox(){
        this.setState((state) => ({
            openText: !state.openText
          }));
    }

    handleChange(e){
        this.setState({commentValue: e.target.value});
    }

    handleSubmit(){
        this.setState((state) => ({
            openText: false,
            comments:state.commentValue===""?[]:[...state.comments,state.commentValue]
          })); 
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.comments.length>0 && prevState.comments !== this.state.comments){
            CommentService.postComments(this.state.commentValue).then(
                ()=>{
                    CommentService.getComments()?.then((response)=>{
                        this.setState({sentimentReaction: response.data})
                    })
                }
            );
        }

    }

    render (){
        return <div className="FlexStyles Comment">
            <div>
            {this.state.comments.length>0 ? (this.state.sentimentReaction?<h5 style={{color:"white"}}>The final reaction: {this.state.sentimentReaction}</h5>:null):null}
            {this.state.comments.length>0 ? this.state.comments?.map((comment,i) => <li  key={i} style={{color:"white"}}>{comment}</li>): null}
            </div>
            <button style={{width:"10em"}} onClick={this.openTextbox}>Add Comment</button>
            {this.state.openText ? 
            <div className="FormStyles">
            <textarea
            type="text"
            className="TextAreaStyles"
            onChange={this.handleChange}
         />
         <button role="button" className="SubmitButton" type="submit" onClick={this.handleSubmit}>Submit</button></div>:null}
        </div>;
    }

}

export default CommentComponent;
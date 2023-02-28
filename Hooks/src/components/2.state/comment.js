import { useState } from "react";
import styled from "styled-components";



function Comment({comment,index,onRevise,onDelete}) {
  const {User,content,myComment} = comment;

  const [isReviseComment,setIsReviseComment] = useState(myComment); // content가 내꺼인지 아닌지 구분해줘야함
  const [reviseComment,setReviseComment] = useState(content)// content에 변화가 생기면 화면에 띄워야함

  const onReviseComment = () =>{
    if(isReviseComment){
      onRevise(index,reviseComment)
    }
  }

  const reviseCommentSetting = () =>{

  }

  return (
    <S.CommentItem>
 
      <>
      <div>
        <p>
          작성자: <span>{User.nickname}</span>
        </p>
        <p>
            댓글 내용: <span>{content}</span>
        </p>
        <button style={isReviseComment ? {display:'block'} : {display:'none'}} onClick={onReviseComment}>수정하기</button>
        <button style={isReviseComment ? {display:'block'} : {display:'none'}} onClick={onDelete}>삭제</button>
      </div>
      </>

    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};

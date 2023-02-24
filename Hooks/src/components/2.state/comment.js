import styled from "styled-components";

function Comment({post}) {
  return (
    <S.CommentItem>
      {post.Comments.map((comment,idx)=>{
      return( 
      <>
        <p>
          작성자: <span>{comment.User.nickname}</span>
        </p>
        <p>
            댓글 내용: <span>{comment.content}</span>
        </p>
      </>
      )})}
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

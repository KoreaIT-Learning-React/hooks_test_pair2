import styled from 'styled-components';

function Comment({commentData}) {
  const {index, nickname, content, myComment, onDelete} = commentData;
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{content}</span>
      </p>
      <button disabled={!myComment} onClick={() => onDelete(index)}>
        삭제
      </button>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;
const S = {
  CommentItem,
};

import { styled } from "styled-components";

function formatData(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} `;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <ReviewListItemDiv>
      <img src={item.imgUrl} alt={item.title}></img>
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatData(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </ReviewListItemDiv>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {/* map에서 key를 지정해주는 이유는 해당 el의 순서가 바뀌어도 데이터를 유지하기 위함입니다.
          idx값은 고유한 값이 아니며 해당 el의 순서가 바뀌면 idx도 따라서 바뀝니다.
          따라서 idx는 key값으로 사용하기 부적절합니다. 
      */}
      {items.map((el) => (
        <ReviewListItem item={el} key={el.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}

const ReviewListItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    max-width: 200px;
    height: 300px;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export default ReviewList;

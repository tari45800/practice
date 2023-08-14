import { styled } from "styled-components";

function formatData(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} `;
}

function ReviewListItem({ item }) {
  return (
    <ReviewListItemDiv>
      <img src={item.imgUrl} alt={item.title}></img>
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatData(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </ReviewListItemDiv>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((el, idx) => (
        <ReviewListItem item={el} key={idx} />
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

import { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { async } from "q";
import { getReviews } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState(`createdAt`);
  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder(`createdAt`);
  const handleBestClick = () => setOrder(`rating`);
  const handleDelete = (id) => {
    const nestItem = items.filter((item) => item.id !== id);
    setItems(nestItem);
  };

  useEffect(() => {
    // 렌더링이 끝나고 나면
    // 비동기로 실행할 함수
    handleLoad(order);

    // 콜백함수가 호출되고 두번째 값을 기억합니다.
    // 컴포넌트가 렌더링 될 때 두번째 값을 비교해 다르다면 다시 콜백함수를 호출합니다.
    // 빈 배열이기 때문에 첫번째 렌더링에만 동작하게 됩니다.
  }, [order]);

  const handleLoad = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery);
    setItems(reviews);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>평점순</button>
      </div>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { async } from "q";
import { getReviews } from "./api";

function App() {
  const [order, setOrder] = useState(`createdAt`);
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const sortedItem = items.sort((a, b) => b[order] - a[order]);
  const limit = 16;

  const handleNewestClick = () => setOrder(`createdAt`);
  const handleBestClick = () => setOrder(`rating`);

  const handleDelete = (id) => {
    const nestItem = items.filter((item) => item.id !== id);
    setItems(nestItem);
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);

    if (options.offset === 0) {
      setItems(reviews);
    } else {
      // 비동기 상황에서 스테이트 값을 사용하려면
      // 고정된 값이 아니라 이전 상태의 값을 사용해야한다.
      // setItems([...items, ...reviews]);
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: limit });
  };

  useEffect(() => {
    // 랜더링이 끝나고 나면
    // 비동기로 실행할 함수
    handleLoad({ order, offset: 0, limit: limit });

    // 콜백함수가 호출되고 두번째 값을 기억합니다.
    // 컴포넌트가 랜더링 될 때 두번째 값을 비교해 다르다면 다시 콜백함수를 호출합니다.
    // 빈 배열이기 때문에 첫번째 랜더링에만 동작하게 됩니다.
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>평점순</button>
      </div>
      <ReviewList items={sortedItem} onDelete={handleDelete} />

      {hasNext && (
        <button disabled={!hasNext} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
    </div>
  );
}

export default App;

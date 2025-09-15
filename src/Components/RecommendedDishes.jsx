
import TopDishes from './TopDishes';
export const RecommendedDishes = () => {
  return (
    <section>
      <TopDishes title="Recommended Dishes" start={9} end={17} showMoreButton = {false} subTitle = {false}  />
    </section>
  );
};

import { fetchMeals } from "../http";
import useFetch from "../hooks/useFetch";
import Meal from "./Meal";

export default function Meals() {

  const {isFetching, errorFetching, getFetchData: meals} = useFetch(fetchMeals, [])
  return(
      <section id="meals">
        {!isFetching && meals.map((meal) => (
          <Meal key={meal.id} data={meal}></Meal>
        ))}
      </section>
  )
}
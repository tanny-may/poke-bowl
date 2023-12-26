import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Poke with tofu',
		description:
			'tofu, avocado, cashews, radishes, tomatoes, cucumbers, sweet corn, fried onions, cilantro, sushi rice, nut sauce, sesame seeds, green onions, nori',
		price: 350,
	},
	{
		id: 'm2',
		name: 'Poke with tuna',   
		description: 'tuna, avocado, carrots, cucumbers, cherry tomatoes, radishes, chuka salad, fried onions, ginger, sushi rice, light spice sauce, sesame seeds, cilantro, green onions',
		price: 500,
	},
	{
		id: 'm3',
		name: 'Poke with salmon',
		description: 'salmon, cucumbers, coleslaw, edamame beans, radishes, ponzu sauce, sushi rice, ginger, sesame seeds, green onions, nori',
		price: 450,
	},
	{
		id: 'm4',
		name: 'Poke with shrimps',
		description: 'king shrimps, avocado, cashews, chuka salad, carrots, sushi rice, sesame seeds, sweet chili sauce, nut sauce',
		price: 400,
	},
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;

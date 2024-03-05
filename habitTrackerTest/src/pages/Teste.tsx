import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { RootState } from "../store";
import { getAllHabits } from "../slices/habitSlice";

const Teste = () => {
  const dispatch = useAppDispatch();

  const { habits } = useSelector((state: RootState) => state.habit);

  useEffect(() => {
    dispatch(getAllHabits());
  }, [dispatch]);

  console.log(habits);

  return (
    <div>
      <h1>All Habits</h1>
      <table className="flex justify-between">
        <th>Id</th>
        <th>Title</th>
        <th>Date</th>
        <th>Days</th>
      </table>
      {habits.map((habit, index) => (
        <table key={index} className="flex justify-between">
          <tr>{habit.id}</tr>
          <tr>{habit.title}</tr>
          <tr>{habit.createdAt}</tr>
          <tr>{habit.weekDays}</tr>
        </table>
      ))}
    </div>
  );
};

export default Teste;

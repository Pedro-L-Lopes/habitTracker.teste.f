import { useEffect, useState } from "react";
import Header from "../components/Header";
import SummaryTable from "../components/SummaryTable";
import Summary from "../components/Summary";
import { api } from "../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "../slices/habitSlice";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks/useAppDispatch";

const HabitsTest = () => {
  const dispatch = useAppDispatch();

  //   const [summary, setSummary] = useState<Summary>();

  const { habits } = useSelector((state: RootState) => state.habit);

  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <SummaryTable summary={habits} />
    </div>
  );
};

export default HabitsTest;

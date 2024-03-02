import { useEffect, useState } from "react";
import Header from "../components/Header";
import SummaryTable from "../components/SummaryTable";
import Summary from "../components/Summary";
import { api } from "../lib/axios";

const Habits = () => {
  const [summary, setSummary] = useState<Summary>();

  useEffect(() => {
    api.get("summary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  console.log(summary);

  return (
    <div>
      <Header />
      <SummaryTable summary={summary} />
    </div>
  );
};

export default Habits;

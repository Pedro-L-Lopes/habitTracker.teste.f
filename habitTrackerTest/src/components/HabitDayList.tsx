import { api } from "../lib/config";
import { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa6";

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

const HabitDayList = () => {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: selectedDate,
        },
      })
      .then((response) => {
        setHabitsInfo(response.data);
      });
  }, [selectedDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="max-w-[1000px] flex items-center justify-center flex-col mb-10 border border-zinc-800 rounded-lg">
      <h2>Selecione a data:</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="text-black rounded-md p-2 flex justify-center items-center"
      />
      <div>
        <h1>HabitDayList</h1>
        {habitsInfo?.possibleHabits.map((habit) => {
          return (
            <Checkbox.Root
              key={habit.id}
              checked={habitsInfo.completedHabits.includes(habit.id)}
              className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
            >
              <div className="h-6 w-6 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-50 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
                <Checkbox.Indicator>
                  <FaCheck size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                {habit.title}
              </span>
              {/* <button onClick={() => deleteHabit(habit.id)}>Ex</button> */}
            </Checkbox.Root>
          );
        })}
      </div>
    </div>
  );
};

export default HabitDayList;

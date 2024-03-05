// import * as Popover from "@radix-ui/react-popover";
// import ProgressBar from "./ProgressBar";
// import HabitList from "./HabitList";
// import clsx from "clsx";
// import dayjs from "dayjs";
// import { useState } from "react";
// import { completedPercentageAndAmount } from "../slices/habitSlice";
// import { useSelector } from "react-redux";

// interface HabitDayProps {
//   date: Date;
//   defaultCompleted?: number;
//   amount?: number;
// }

// const HabitDay = ({
//   defaultCompleted = 0,
//   amount = 0,
//   date,
// }: HabitDayProps) => {
//   const [completed, setCompleted] = useState(defaultCompleted);

//   let { completedPercentageAndAmount } = useSelector(
//     (state: any) => state.habit
//   );

//   completedPercentageAndAmount =
//     amount > 0 ? Math.round((completed / amount) * 100) : 0;

//   // console.log("HabitDay: ", completedPercentageAndAmount);

//   const dayAndMonth = dayjs(date).format("DD/MM");
//   const dayOfWeek = dayjs(date).format("dddd");

//   const classes = clsx(
//     "w-10 h-10 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background",
//     {
//       "bg-zinc-900 border-zinc-800": completedPercentageAndAmount === 0,
//       "bg-violet-900 border-violet-500":
//         completedPercentageAndAmount > 0 && completedPercentageAndAmount < 20,
//       "bg-violet-800 border-violet-500":
//         completedPercentageAndAmount >= 20 && completedPercentageAndAmount < 40,
//       "bg-violet-700 border-violet-500":
//         completedPercentageAndAmount >= 40 && completedPercentageAndAmount < 60,
//       "bg-violet-600 border-violet-500":
//         completedPercentageAndAmount >= 60 && completedPercentageAndAmount < 80,
//       "bg-violet-500 border-violet-400":
//         completedPercentageAndAmount >= 80 &&
//         completedPercentageAndAmount <= 100,
//     }
//   );

//   async function handleCompletedChange(completed: number) {
//     setCompleted(completed);
//   }

//   return (
//     <Popover.Root>
//       <Popover.Trigger className={classes} />

//       <Popover.Portal>
//         <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
//           <div className="flex justify-between">
//             <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
//             <span className="font-semibold text-zinc-400">
//               {completed}/{amount}
//             </span>
//           </div>
//           <span className="mt-1 font-extrabold leading-tight text-3xl">
//             {dayAndMonth}
//           </span>

//           <ProgressBar progress={completedPercentageAndAmount} />

//           <HabitList date={date} onCompletedChanged={handleCompletedChange} />

//           <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
//         </Popover.Content>
//       </Popover.Portal>
//     </Popover.Root>
//   );
// };

// export default HabitDay;

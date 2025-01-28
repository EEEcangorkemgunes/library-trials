const Animals = ["Tarcin", "Oreo", "Kucuk", "Saskin", "Mirmir"];
const OldAnimals = ["Capul", "Kral", "Daisy", { date: "2021-01-01" }, { date: "" }];
export default function ListReturn() {
  return [Animals, OldAnimals];
}
export function TaskFilter(tasks, Dates: string[]) {
  const filteredDates = [];
  for (const date of Dates) {
    console.log(date);
    filteredDates.push({ date: new Date(date) });
    for (const task of tasks) {
      if (task.type === "Todo") {
      }
    }
  }
  return;
}

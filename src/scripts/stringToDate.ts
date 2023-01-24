export default function stringToDate(text: string): Date {
  const [date, time] = text.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const seconds = Number(time.replace(/(\d+)\:(\d+)\:(\d+)\.(\d+\D+)/g, "$3"));

  return new Date(year, month - 1, day, hour, minute, seconds);
}

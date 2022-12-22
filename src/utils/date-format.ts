export function dateFormat(date: string) {
  const created_date = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = created_date.getFullYear();
  const month = months[created_date.getMonth()];
  const actualDate = created_date.getDate();
  const time = actualDate + ", " + month + " " + year;

  return time;
}

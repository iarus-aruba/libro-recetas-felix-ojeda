export function formatMinutes(minutes: number): string {
  if (minutes <= 0) return "—";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (rest === 0) return `${hours} h`;
  return `${hours} h ${rest} min`;
}

export function totalMinutes(prep: number, cook: number): number {
  return prep + cook;
}

export function formatServings(servings: number): string {
  return servings === 1 ? "1 ración" : `${servings} raciones`;
}

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function formatWorldDay(worldDay?: {
  name: string;
  day: number;
  month: number;
}): string | null {
  if (!worldDay) return null;
  const month = MONTHS[worldDay.month - 1];
  if (!month) return worldDay.name;
  return `${worldDay.day} ${month}. ${worldDay.name}`;
}

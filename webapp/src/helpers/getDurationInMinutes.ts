export const getDurationInMinutes = (from: number, to: number) => {
  return Math.trunc((to - from) / 60000);
};

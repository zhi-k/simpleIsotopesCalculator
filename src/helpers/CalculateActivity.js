import moment from "moment";

export function calculateActivity(input) {
  const values = Object.assign({}, input);
  const { halfLife, original, startDate, startTime, endDate, endTime } = values;

  const startArg = startDate.concat(" ", startTime);
  const endArg = endDate.concat(" ", endTime);

  // result is in milliseconds - divide by 1000 to get seconds
  const timeDiffInSeconds = moment(endArg).diff(moment(startArg)) / 1000;

  // convert seconds to minutes
  const timeDiffInMinutes = timeDiffInSeconds / 60;

  // Ln 2 divided by half life
  const Ln2dividedHalfLife = -Math.LN2 / halfLife;

  // exp of whatever has been divided by half life multiply with time diff
  const decayConstant = Math.exp(Ln2dividedHalfLife * timeDiffInMinutes);

  let finalActivity = Math.round(decayConstant * original * 100) / 100;

  // Check if calculated activity is infinity or less than 0
  if (finalActivity < 0 || isNaN(finalActivity) || !isFinite(finalActivity)) finalActivity = `Impossible to calculate`;
  return finalActivity;
}

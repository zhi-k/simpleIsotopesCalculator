import moment from "moment";

export function formValidation(input) {
  let outcome = {
    result: "",
    message: "",
  };

  if (!input.halfLife || !input.original || !input.startDate || !input.startTime || !input.endDate || !input.endTime) {
    outcome.result = false;
    outcome.message = `All fields are required!`;
    return outcome;
  }

  const { original, startDate, endDate, startTime, endTime } = input;
  if (isNaN(original)) {
    outcome.result = false;
    outcome.message = `Original activity must be a number!`;
    return outcome;
  }

  const startArg = startDate.concat(" ", startTime);
  const endArg = endDate.concat("", endTime);
  if (!moment(startArg, "YYYY-MM-DD hh:mm").isBefore(moment(endArg, "YYYY-MM-DD hh:mm"))) {
    outcome.result = false;
    outcome.message = `End date or time cannot be before start date or time!`;
    return outcome;
  }

  outcome.result = true;
  return outcome;
}

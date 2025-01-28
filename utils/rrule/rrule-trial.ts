import { RRule, datetime } from "rrule";

export const rule = new RRule({
  dtstart: datetime(2024, 6, 1),
  freq: RRule.DAILY,
  interval: 1,
  bymonthday: [31],
  until: datetime(2024, 12, 1),
});

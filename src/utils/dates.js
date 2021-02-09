import moment from "moment";

export const parseTime = (time) => moment.utc(time).format("HH:mm");

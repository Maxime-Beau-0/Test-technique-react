import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
TimeAgo.addLocale(en)

export const dateFormatter = new TimeAgo("en-US")

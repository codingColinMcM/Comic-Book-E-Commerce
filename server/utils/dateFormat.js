const addSuffix = (date) => {
    let dateString = date.toString();
  
    // get last char of date string
    const finalChar = dateString.charAt(dateString.length - 1);
  
    if (finalChar === '1' && dateString !== '11') {
      dateString = `${dateString}st`;
    } else if (finalChar === '2' && dateString !== '12') {
      dateString = `${dateString}nd`;
    } else if (finalChar === '3' && dateString !== '13') {
      dateString = `${dateString}rd`;
    } else {
      dateString = `${dateString}th`;
    }
  
    return dateString;
};
  
// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (
timestamp,
{ monthLen = 'short', suffix = true } = {}
) => {
// create month object
const months = {
    0: monthLen === 'short' ? 'Jan' : 'January',
    1: monthLen === 'short' ? 'Feb' : 'February',
    2: monthLen === 'short' ? 'Mar' : 'March',
    3: monthLen === 'short' ? 'Apr' : 'April',
    4: monthLen === 'short' ? 'May' : 'May',
    5: monthLen === 'short' ? 'Jun' : 'June',
    6: monthLen === 'short' ? 'Jul' : 'July',
    7: monthLen === 'short' ? 'Aug' : 'August',
    8: monthLen === 'short' ? 'Sep' : 'September',
    9: monthLen === 'short' ? 'Oct' : 'October',
    10: monthLen === 'short' ? 'Nov' : 'November',
    11: monthLen === 'short' ? 'Dec' : 'December',
};

const dateObj = new Date(timestamp);
const monthFormat = months[dateObj.getMonth()];

const day = suffix
    ? addSuffix(dateObj.getDate())
    : dateObj.getDate();

const year = dateObj.getFullYear();
let hour =
    dateObj.getHours() > 12
    ? Math.floor(dateObj.getHours() - 12)
    : dateObj.getHours();

// if hour is 0 (12:00am), change it to 12
if (hour === 0) {
    hour = 12;
}

const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

// set `am` or `pm`
const aMpM = dateObj.getHours() >= 12 ? 'pm' : 'am';

const formattedTimeStamp = `${monthFormat} ${day}, ${year} at ${hour}:${minutes} ${aMpM}`;

return formattedTimeStamp;
};
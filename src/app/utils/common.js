export const convertTo24HourFormat = (time) => {
    const [hours, minutes] = time.split(':');
    const ampm = minutes.slice(-2);  // Extract AM/PM part
    const minutesOnly = minutes.slice(0, 2);  // Extract the minutes

    let hour = parseInt(hours, 10);  // Convert hours to number

    if (ampm === 'AM' && hour === 12) {
        hour = 0;  // 12 AM is midnight
    } else if (ampm === 'PM' && hour !== 12) {
        hour += 12;  // Convert PM hour to 24-hour format
    }

    return `${hour.toString().padStart(2, '0')}:${minutesOnly}`;
};
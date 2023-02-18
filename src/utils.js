
export const showDate = (date) => {
  const monthNames = ["January", "February", "March", "April", 
    "May","June","July", "August", "September", 
    "October", "November","December"]

  const dateObj = new Date(date)

  const month = monthNames[dateObj.getUTCMonth()]
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  return `${month} ${day}, ${year}`
}
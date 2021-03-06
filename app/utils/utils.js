export function formatAMPM(timestamp) {
  const date = new Date(timestamp *1000)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;


  const strTime = date.getDate() +
  "/"+(date.getMonth()+1) +
  "/"+date.getFullYear() +
  " " + hours +
  ':' + minutes +
  ' ' + ampm;
  return strTime;
}
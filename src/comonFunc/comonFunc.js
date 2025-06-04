export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  export function year(givenDate= new Date()){
  
    const d = new Date(givenDate);
    return d.getFullYear();
  }

export function month(givenDate){
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const d = new Date(givenDate);
  return month[d.getMonth()];
}

export function day(givenDate){
  const d = new Date(givenDate);
  return d.getDate();
}

export function timeConvert(time) {
  const match = time.toString().match(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/);

  if (match) {
    const [_, hours, minutes] = match;
    const period = +hours < 12 ? 'AM' : 'PM';
    const adjustedHours = (+hours % 12) || 12;
    
    return `${adjustedHours}:${minutes} ${period}`;
  }

  return time;
}

export function dateConvert(date) {
  // date day year
  const d = new Date(date);
  return `${d.getDate()} ${month(d.getMonth() + 1)} ${d.getFullYear()}`
}

export function freshContent(content, limit) {
  // Remove HTML tags from the content using a regular expression
  const strWithoutHTMLTags = content.replace(/(<([^>]+)>)/gi, "");

  // Check if the length of the string without HTML tags exceeds the limit
  if (strWithoutHTMLTags.length > limit) {
    // If it does, return a substring of the string up to the limit followed by an ellipsis
    return strWithoutHTMLTags.substring(0, limit) + "...";
  } else {
    // Otherwise, return the entire string without HTML tags
    return strWithoutHTMLTags;
  }
}

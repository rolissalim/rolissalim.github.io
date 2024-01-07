export function UpperCaseEachWord(words: string) {
    let splitStr = words.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

export function truncate(str: string, max: number) {
    return str && str?.length > max ? str.substr(0, max - 1) + '…' : str;
  }
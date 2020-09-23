export const hex2ascii = (hex: string): string => {
  let str = "";
  for (var i = 0; i < hex.length && hex.substr(i, 2) !== "00"; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

export const timestampToString = (timestamp: number): string =>
 new Date(timestamp * 1000).toLocaleString()

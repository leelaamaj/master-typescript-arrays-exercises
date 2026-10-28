function isRotated(str1: string, str2: string): boolean {
  return str1.length===str2.length && (str1+str1).includes(str2);
}

export {};

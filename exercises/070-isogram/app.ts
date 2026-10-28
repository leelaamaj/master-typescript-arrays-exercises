function isIsogram(text: string): boolean {
  const lower=text.toLowerCase(); return new Set(lower).size===lower.length;
}

export {};

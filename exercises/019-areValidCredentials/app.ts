function areValidCredentials(name: string, pass: string): boolean {
  return name.length > 3 && pass.length >= 8;
}

export {};

/** Luhn checksum validate/generate. Pure, dependency-free. */
export function isValid(number: string): boolean {
  if (!/^[0-9]+$/.test(number)) return false;
  let sum = 0, alt = false;
  for (let i = number.length - 1; i >= 0; i--) {
    const c = number.charCodeAt(i) - 48;
    let d = c;
    if (alt) { d *= 2; if (d > 9) d -= 9; }
    sum += d; alt = !alt;
  }
  return sum % 10 === 0;
}
export function checkDigit(partial: string): number {
  if (!/^[0-9]+$/.test(partial)) {
    throw new Error("partial must contain at least one digit");
  }
  for (let d = 0; d < 10; d++) if (isValid(partial + d)) return d;
  throw new Error("unreachable");
}

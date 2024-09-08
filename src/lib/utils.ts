export function getInitials(text: string): string {
  const [firstWord, secondWord] = text.split(' ').slice(0, 2) as (string | undefined)[];

  if (!firstWord) return '--';
  if (!secondWord) return firstWord.slice(0, 2).toUpperCase();

  return (firstWord.charAt(0) + secondWord.charAt(0)).toUpperCase();
}

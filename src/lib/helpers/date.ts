/**
 * Formats a date to display as "Month Year" (e.g., "November 2023")
 */
export function formatDateToMonthYear(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
}
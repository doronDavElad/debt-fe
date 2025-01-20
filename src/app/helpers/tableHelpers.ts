export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  console.log(1,date);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`; 
}
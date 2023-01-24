export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error: " + response.status);
    return await response.json();
  } catch (error) {
    if (error instanceof ErrorEvent) console.error("Error: " + error.message);
  }
}

export async function GithubLoader() {
  const response = await fetch("https://api.github.com/users/user-azizul");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

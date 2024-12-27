// api.js
export const fetchUserData = async () => {
    try {
      const response = await fetch('/sample.json');  // Path to the JSON file in the public folder
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  
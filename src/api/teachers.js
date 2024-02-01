


const getTeachers = async () => {
    try {
      const response = await fetch('http://localhost:8012/api/teachers/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Handle or throw the error as needed
    }
  }
  
  export default getTeachers;
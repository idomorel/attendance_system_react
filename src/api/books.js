
import axios from 'axios';

const getBooks = async () => {
    try {
      console.time('fetching books internal');
      const response = await axios.get('http://localhost:8012/api/textbooks')
      // .then(response => {
      //   console.log(response.data);
      // }).catch(error => {
      //   console.log(error);
      // });
      console.timeEnd('fetching books internal');
      console.log(response.data);
      if (!response.status === 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.data;
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Handle or throw the error as needed
    }
  }
  
  export default getBooks;



const login = async (formData) => {
    try{
        const response = await fetch('http://localhost:8012/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                // 'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;  // You might want to return some data here, e.g., a success message or user data
    }
    catch (error) {
        console.error('Error during login:', error);
        // Handle or throw the error as needed
    }
} 
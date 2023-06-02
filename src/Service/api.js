import axios from 'axios';

// const usersUrl = 'http://localhost:3000';
 const usersUrl = 'http://localhost:8000';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

const API_BASE = 'https://randomuser.me/api/';

export const getUsers = async (page = 1, results = 50) => 
await fetch(`${API_BASE}?results=${results}&seed=fm2023&page=${page}`).then(res => res.json());

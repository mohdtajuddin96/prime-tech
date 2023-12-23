const getUsers = 'SELECT * FROM users';

const getUserById = 'SELECT * FROM users where id=$1';

const getUserByEmail = 'SELECT * FROM users where email=$1';

const addUser = 'INSERT INTO users (name,email,mobile,password) VALUES ($1, $2, $3, $4) RETURNING *';

const updateUser = 'UPDATE users SET name=$1, email=$2, mobile=$3 WHERE id=$4';

const deleteUser = 'DELETE FROM users WHERE id=$1';

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getUserByEmail
};

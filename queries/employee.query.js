const getEmployees = 'SELECT * FROM employees';

const getEmpById = 'SELECT * FROM employees where id=$1';

const addEmp = 'INSERT INTO employees (name,email,phone,image) VALUES ($1, $2, $3, $4) RETURNING *';

const updateEmp = 'UPDATE employees SET name=$1, email=$2, phone=$3 WHERE id=$4';

const deleteEmp = 'DELETE FROM employees WHERE id=$1';

module.exports = {
  getEmployees,
  getEmpById,
  addEmp,
  updateEmp,
  deleteEmp
};
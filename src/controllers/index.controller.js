const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('usuarios.sqlite');

const getUsers = async (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log('A');
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
};

const createUser = async (req, res) => {
    const { id, name, email } = req.body;
    db.run('INSERT INTO users (id, name, email) VALUES (?, ?, ?)', [id, name, email], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: 'User added Succesfully',
            body: {
                user: { id: this.lastID, name, email }
            }
        });
    });
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(row);
    });
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(`User ${id} deleted succesfully`);
    });
};

const putUserById = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], function (err) {
        if (err) {
            console.log('B');
            return res.status(500).json({ error: err.message });
        }
        res.json('User updated succesfully');
    });
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    putUserById
};

import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jeyakrishnag1709$",
    database: "tasktoursite"
});

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    
    if (!username || !email || !password) {
        return res.json({ Error: "All fields are required" });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.json({ Error: "Invalid email format" });
    }

    const checkSql = "SELECT * FROM users WHERE `email` = ?";
    const insertSql = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    
    try {
        const [existingUser] = await db.query(checkSql, [email]);
        if (existingUser.length > 0) {
            res.json({ Error: "Email already exists" });
        } else {
            const values = [username, email, password];
            await db.query(insertSql, [values]);
            res.json({ Status: "Success" });
        }
    } catch (err) {
        console.error(err);
        res.json({ Error: "Database error", details: err.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
   
    if (!email || !password) {
        return res.json({ Error: "Email and password are required" });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.json({ Error: "Invalid email format" });
    }

    const sql = "SELECT * FROM users WHERE `email` = ?";
    
    try {
        const [result] = await db.query(sql, [email]);
        
        if (result.length > 0) {
            if (password === result[0].password) {
                res.json({ Status: "Success" });
            } else {
                res.json({ Error: "Wrong password" });
            }
        } else {
            res.json({ Error: "Email does not exist" });
        }
    } catch (err) {
        console.error(err);
        res.json({ Error: "Database error", details: err.message });
    }
});

app.post("/footer", async (req, res) => {
    const { email } = req.body;
    
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.json({ Error: "Invalid email format" });
    }

    const checkSql = "SELECT * FROM subscription WHERE `email` = ?";
    const insertSql = "INSERT INTO subscription (`email`) VALUES (?)";

    try {
        
        const [existingEmail] = await db.query(checkSql, [email]);
        if (existingEmail.length > 0) {
            return res.json({ Error: "Email already subscribed" });
        }

        
        await db.query(insertSql, [email]);
        res.json({ Status: "Success" });
    } catch (err) {
        console.error('Database error:', err);
        res.json({ Error: "Database error", details: err.message });
    }
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});

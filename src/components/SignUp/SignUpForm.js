import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import './SignUpForm.module.css';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "" || confirmPassword === "") {
            setError("All fields are mandatory");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setError(null);
            // Perform user registration logic here (you may use Firebase or your own backend)
            // If successful, setSuccess(true);
            console.log("User has successfully signed up");
        } 
        catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">User has successfully signed up</Alert>}
        </div>
    );
};

export default SignUpForm;
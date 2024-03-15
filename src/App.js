import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {

  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormValues({ ...formValues, email: newEmail });
    if (newEmail.includes('@')) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 9) {
      setPasswordError('La contraseña debe tener al menos 9 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSelectChange = ((e) => {
    setFormValues({ ...formValues, favClass: e.target.value })
  });



  const clickSubmit = () => {
    if (!formValues.email.includes('@')) {
      setEmailError('Your email should follow an established format.');
      return;
    }

  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <h2>Alejandro Gómez Colorado</h2>


      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            isInvalid={!!emailError}
          />
          <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
          <Form.Text className="text-muted">Your password should have numbers and letters and should be at least 9 characters long</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select value={formValues.favClass} onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button type="button" onClick={clickSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
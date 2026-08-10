import "./Register.css";
import { Button } from "@/components/Button/Button";
import { TextField } from "@/components/TextField/TextField";
import Logo from "/images/logo.svg";
import UserIcon from "/images/user.svg";
import EmailIcon from "/images/email.svg";
import PasswordIcon from "/images/password.svg";

export function Register() {
  return (
    <main className="register">
      <main className="register__content">
        <div className="register__info">
          <img src={Logo} className="home__logo" alt="Logo" />
          <h2>A Simple Kanban Task Manager</h2>
        </div>

        <form type="POST" className="register__form">
          <TextField label="Username" icon={UserIcon} type="text" name="username" />
          <TextField label="Name" icon={UserIcon} type="text" name="name" />
          <TextField label="Email" icon={EmailIcon} type="text" name="email" />
          <TextField
            label="Password"
            icon={PasswordIcon}
            type="password"
            name="password"
          />

          <Button>Sign Up</Button>

          <div className="links">
            <p>
              Already have an account? <a href="/">Sign In</a> to
              continue.
            </p>
          </div>
        </form>
      </main>
    </main>
  );
}

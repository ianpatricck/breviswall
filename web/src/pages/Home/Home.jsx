import "./Home.css";

import { Button } from "@/components/Button/Button";
import { TextField } from "@/components/TextField/TextField";
import Logo from "/images/logo.svg";
import EmailIcon from "/images/email.svg";
import PasswordIcon from "/images/password.svg";

export function Home() {
  return (
    <main className="home">
      <main className="home__content">
        <div className="home__info">
          <img src={Logo} className="home__logo" alt="Logo" />
          <h2>A Simple Kanban Task Manager</h2>
        </div>

        <form method="POST" className="home__form">
          <TextField label="Email" icon={EmailIcon} type="text" name="email" />

          <TextField
            label="Password"
            icon={PasswordIcon}
            type="password"
            name="password"
          />

          <Button>Log In</Button>

          <div className="links">
            <p>
              Don't have an account yet? <a href="/signup">Sign Up</a> to register.
            </p>
          </div>
        </form>
      </main>
    </main>
  );
}

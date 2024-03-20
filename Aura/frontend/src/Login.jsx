export default function Login() {
  return (
    <div>
      <img src="/image/logo.png" alt="Logo" width="200" />
      <h2>Login</h2>
      <form>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your Username"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="login-button">
          <a href="/mainpage">
            <button
              type="submit"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Login
            </button>
          </a>
        </div>
        <div className="create-account">
          <p>
            Not a user? <a href="#">Create account</a>
          </p>
        </div>
      </form>
    </div>
  );
}

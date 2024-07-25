import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import close_modal from "../../assets/img/close-modal.svg"

function LoginModal({ modalOpen, handleClose }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  // const username = "emilys";
  // const password = "emilyspass";
  const fetchPosts = async () => {
    try {
      const reqData = {
        username: usernameInput,
        password: passwordInput,
      };
      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      };
      const response = await fetch("https://dummyjson.com/auth/login", payload);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userData", JSON.stringify(data));
        handleClose(); // Close modal after successful login
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      // console.error("Error fetching data:", error);
      setError("Failed to login. Please check your credentials.");
    }
  };

  const handleLogin = () => {
    fetchPosts();
  };

  return (
    <div className="login_form_section">
      <div
        className={`modal_popup ${modalOpen ? "opacity-100" : "opacity-0"}`}
        style={{ display: modalOpen ? "flex" : "none" }}
      >
        <div className="mx-auto p-14 mt-2 overflow-y-auto md:!min-w-[750px]  min-w-[80vw] ">
          <div className="bg-white rounded p-5">
            <div className="mb-4 text-end">
              <button className="px-4 py-3" onClick={handleClose}>
                <img src={close_modal} alt="Close" />
              </button>
            </div>
            <h2 className="text-[20px] text-black text-center font-black mb-5">
              Login
            </h2>
            <div className="login_form">
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email id"
                  className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              {error && <p className="text-red text-sm mb-2">{error}</p>}
              <div>
                <a href="#" className="hover:text-red">
                  Forgot Password?
                </a>
              </div>
              <button
                onClick={handleLogin}
                type="button"
                className="text-14 mt-5 px-20 lg:py-3 py-2 bg-red block text-white rounded-[10px] text-xs text-center mx-auto"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

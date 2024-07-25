import React, { useState } from "react";
import close_modal from "../../assets/img/close-modal.svg"

const SignUpModal = ({ modalOpen2, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const reqData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      };

      const response = await fetch(
        "https://dummyjson.com/auth/signup",
        payload
      );
      if (response.ok) {
        const data = await response.json();
        // Handle successful registration (e.g., close modal, show success message)
        // console.log("Registration successful:", data);
        handleClose(); // Close modal after successful registration
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      // console.error("Error signing up:", error);
      setError("Failed to sign up. Please try again later.");
    }
  };

  return (
    <div className="login_form_section">
      <div
        className={`modal_popup opacity-${modalOpen2 ? "100" : "0"}`}
        style={{ display: modalOpen2 ? "flex" : "none" }}
      >
        <div className="mx-auto p-14 mt-2 overflow-y-auto !md:min-w-[750px] min-w-[80vw]">
          <div className="bg-white rounded p-5">
            <div className="mb-4 text-end">
              <button
                className="px-4 py-3"
                onClick={() => handleClose()}
                // ref={modalCloseButtonRef}
              >
                <img src={close_modal} alt="Close" />
              </button>
            </div>
            <h2 className="text-[20px] text-black text-center font-black mb-5">
              Sign Up
            </h2>
            <div className="login_form">
              <div className="flex justify-between space-x-2">
                <div className="mb-2 w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="py-3 px-4 bg-white rounded-10 w-full border border-gray focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <button
                onClick={handleSignUp}
                type="button"
                className="text-14 mt-5 px-20 lg:py-3 py-2 bg-red block text-white rounded-[10px] text-xs text-center mx-auto"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

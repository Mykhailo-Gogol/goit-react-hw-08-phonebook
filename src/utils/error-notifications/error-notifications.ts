import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registrationError = () =>
  toast.error("Registration Error", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const loginError = () =>
  toast.error("Login Error", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const logoutError = () =>
  toast.error("Logout Error", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

// Validation
export const nameInputValidation = () =>
  toast.error(
    "The name can only consist of letters, apostrophes, dashes and spaces.",
    {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

export const numberInputValidation = () =>
  toast.error(
    "The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

export const contactDuplicateValidation = (name: string) =>
  toast.warn(`${name} is already in contacts!`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const connectionErrorValidation = (message: string) =>
  toast.error(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const passwordInputValidation = () =>
  toast.error("Minimum eight characters, at least one letter and one number", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const emailInputValidation = () =>
  toast.error("@", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

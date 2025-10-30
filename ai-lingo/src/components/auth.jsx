// Simple in-memory user storage (replace with proper backend in production)
const users = new Map();

// Simulated API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function handleLogin(email, password) {
  await delay(500); // Simulate API call
  
  const user = users.get(email);
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }
  
  localStorage.setItem("currentUser", JSON.stringify({ email: user.email }));
  return user;
}

export async function handleSignUp(email, password) {
  await delay(500); // Simulate API call
  
  if (users.has(email)) {
    throw new Error("Email already registered");
  }
  
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  
  const user = { email, password };
  users.set(email, user);
  localStorage.setItem("currentUser", JSON.stringify({ email }));
  return user;
}

export function logout() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  const userStr = localStorage.getItem("currentUser");
  return userStr ? JSON.parse(userStr) : null;
}

export function requireAuth(navigate) {
  if (!getCurrentUser()) {
    navigate("/login");
    return false;
  }
  return true;
}
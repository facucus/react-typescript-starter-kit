const login = (userData: {
  username: string;
  password: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { username, password } = userData;
    if (username === "test" && password === "test") {
      const token = "new-token";
      localStorage.setItem("API_TOKEN", token);
      resolve({ token });
    }
    reject(new Error("Invalid credential"));
  });
};

const logout = (): Promise<any> => {
  return new Promise(resolve => {
    localStorage.removeItem("API_TOKEN");
    resolve();
  });
};

export default {
  login,
  logout
};

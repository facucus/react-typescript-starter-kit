export interface IApiLogin {
  login: (userData: { username: string; password: string }) => Promise<any>;
  logout: () => Promise<any>;
}

const login = (userData: {
  username: string;
  password: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { username, password } = userData;
    if (username === "test" && password === "test") {
      resolve({ token: "new-token" });
    }
    reject(new Error("Invalid credential"));
  });
};

const logout = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

export default {
  login,
  logout
};

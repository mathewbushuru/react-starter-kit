const storage_prefix: string = "myApp";

const localStorageHelpers = {
  getToken: (token_name_prefix: string) => {
    return JSON.parse(
      window.localStorage.getItem(
        `${storage_prefix}_${token_name_prefix}_token`
      ) as string
    );
  },
  setToken: (token: string, token_name_prefix: string) => {
    window.localStorage.setItem(
      `${storage_prefix}_${token_name_prefix}_token`,
      JSON.stringify(token)
    );
  },
  removeToken: (token_name_prefix: string) => {
    window.localStorage.removeItem(
      `${storage_prefix}_${token_name_prefix}_token`
    );
  },
};

export default localStorageHelpers;

const storage_prefix = "googly";

const localStorageHelpers = {
  getToken: (token_name_prefix) => {
    return JSON.parse(
      window.localStorage.getItem(
        `${storage_prefix}_${token_name_prefix}_token`
      )
    );
  },
  setToken: (token, token_name_prefix) => {
    window.localStorage.setItem(
      `${storage_prefix}_${token_name_prefix}_token`,
      JSON.stringify(token)
    );
  },
  removeToken: (token_name_prefix) => {
    window.localStorage.removeItem(
      `${storage_prefix}_${token_name_prefix}_token`
    );
  },
};

export default localStorageHelpers;

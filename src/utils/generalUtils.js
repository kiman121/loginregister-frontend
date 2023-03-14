export const actionError = (type, error) => {
  return {
    type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

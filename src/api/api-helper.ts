export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  if (!message) return error.message;

  return typeof message === 'object' ? message[0] : message;
};

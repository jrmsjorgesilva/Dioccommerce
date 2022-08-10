const generateRandomId = (): string => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
};

export default generateRandomId;

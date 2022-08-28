export const hasToken = async (req, res, next) => {
  const token = req?.cookies?.token;

  if (token) {
    req.token = token;
  }
  next();
};

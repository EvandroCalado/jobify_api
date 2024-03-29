import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { verifyJwt } from "../utils/token.js";

const authenticateUser = (req, res, next) => {
  const { jobifyToken } = req.cookies;

  if (!jobifyToken) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, role } = verifyJwt(jobifyToken);

    req.user = { userId, role };

    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export default authenticateUser;

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("unauthorized to access this route");
    }

    next();
  };
};

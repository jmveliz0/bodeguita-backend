import * as Messages from '../../utils/message-constants';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

export const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    throw Error(Messages.FAILED_AUTHENTICATION_TOKEN);
  }
  jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: false }, (err, decoded) => {
    if (err) {
      throw Error(Messages.FAILED_AUTHENTICATION_TOKEN);
    }
    req.userId = decoded.id;
    next();
  });
};

export const handleError = (error, req, res, next) => {
  if (error instanceof Sequelize.ValidationError) {
    const message = (error.errors || [])
      .map(err => {
        return err ? err.message || 'empty' : 'empty';
      })
      .join(',');
    return res.status(500).json({
      type: 'DatabaseError',
      messageCode: error.name,
      message: message
    });
  }
  if (error instanceof Error) {
    return res.status(500).json({
      type: 'TrackplusError',
      messageCode: error.message,
      message: res.__(error.message)
    });
  }
  next(error);
};

export const hashPassword = (req, res, next) => {
  const password = req.body.password;
  if (!password) {
    throw Error(Messages.NO_PASSWORD_PROVIDED);
  }
  req.body.password = bcrypt.hashSync(password, 8);
  next();
};

export const jsonAsyncBody = (body, req, res) => {
  return {
    success: body.success || true,
    data: body.data || null,
    messageCode: body.message || Messages.SUCCESS,
    message: res.__(body.message || Messages.SUCCESS)
  };
};

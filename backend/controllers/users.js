const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const BadRequestError = require('../errors/bad-request-err'); // 400
const NotFoundError = require('../errors/not-found-err'); // 404
const NotExistError = require('../errors/not-exist-err'); // 401
const AlreadyExistError = require('../errors/already-exist-err'); // 409

const OK_CODE_200 = 200;

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredantials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      });
      return (
        res.cookie('jwt', token, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
          .status(200).send({ token })
      );
    })
    .catch(() => {
      next(new NotExistError('Проверьте логин и пароль'));
    });
};

const logOut = (req, res) => {
  res.clearCookie('jwt', {
    secure: true,
    sameSite: 'none',
  }).send({ message: 'Выход осуществлен' });
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  User.findOne({ email })
    .then((data) => {
      if (data) {
        throw new AlreadyExistError('Данный e-mail уже зарегистрирован');
      }

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          throw new Error('Ошибка сервера');
        }

        User.create({
          name, about, avatar, email, password: hash,
        })
          .then((user) => {
            res.send({
              id: user._id,
              email: user.email,
            });
          })
          .catch(next);
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании профиля'));
      } else {
        next(err);
      }
    });
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      next(err);
    });
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (user) {
        return res.send(user);
      }
      throw new NotFoundError('Пользователь по указанному _id не найден');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные _id'));
      } else {
        next(err);
      }
    });
};

const getCurrentUser = (req, res, next) => {
  const userId = req.user._id;

  return User.findById(userId)
    .then((user) => {
      if (user) {
        res.send(user);
      }
      throw new NotFoundError('Пользователь по указанному _id не найден');
    })
    .catch((err) => {
      if (err.name === 'Cast Error') {
        next(new BadRequestError('Переданы некорректные данные _id'));
      }
      next(err);
    });
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (user) {
        return res.status(OK_CODE_200).send(user);
      }
      throw new NotFoundError('Пользователь с указанным _id не найден');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(BadRequestError('Переданы некорректные данные при обновлении профиля'));
      } else {
        next(err);
      }
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (user) {
        return res.status(OK_CODE_200).send(user);
      }
      throw new NotFoundError('Пользователь с указанным _id не найден');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(BadRequestError('Переданы некорректные данные при обновлении аватара'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateProfile,
  updateAvatar,
  login,
  getCurrentUser,
  logOut,
};

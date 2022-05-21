const bcryptjs = require("bcryptjs");
const { request, response } = require("express");
const { UserModel } = require("../models");
const { generarJWT } = require("../helpers");

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });

    // comparamos los passwords
    const validPass = bcryptjs.compareSync(password, user.password);
    if (!validPass) {
      res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    const token = await generarJWT(user.id);

    res.status(200).json({
      ok: true,
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const renew = async (req = request, res = response) => {
  const { user } = req;
  try {
    const token = await generarJWT(user.id);

    res.status(200).json({
      ok: true,
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  login,
  renew,
};

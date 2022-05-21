const { response, request } = require("express");
const bcryptjs = require('bcryptjs');
const { UserModel } = require("../models");

const addUser = async(req = request, res = response) => {

    const {email, password, name, rol} = req.body;
    
    try {
        // encriptamos el password
        const hash = bcryptjs.hashSync(password, 10);

        // insertamos en la base de datos el user
        const user = await UserModel.create({email, password: hash, name, rol});

        res.json({
          ok: true,
          name: user.name,
          id: user.id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
};

const getUsers = async(req = request, res = response) => {
  try {
    const users = await UserModel.findAll({
      attributes: ['id', 'name', 'email']
    });

    res.status(200).json({
      ok: true,
      users
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getUser = async(req = request, res = response) => {
  const {id} = req.params;
  try {
    const user = await UserModel.findByPk(id, {
      attributes: ['id', 'email', 'name']
    });

    res.status(200).json({
      ok: true,
      user
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const putUser = async(req = request, res = response) => {
  const {id} = req.params;
  const {password, ...resto} = req.body;
  try {
    if(password){
      resto.password = bcryptjs.hashSync(password, 10)
    }

    const user = await UserModel.update(resto, {
      where: {
        id
      }
    });
    
    res.status(201).json({
      ok: true,
      msg: 'Cambios realizados correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const deleteUser = async(req = request, res = response) => {
  const {id} = req.params;
  try {
    const user = await UserModel.update({state: false}, {
      where: {
        id
      }
    })

    res.status(201).json({
      ok: true,
      msg: 'Usuario desactivado'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  putUser,
  deleteUser,
};

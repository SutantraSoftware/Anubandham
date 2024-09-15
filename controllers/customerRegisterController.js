const customerRegister = require('../models/customerRegister');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_key = 'jdjhalirioaiodn$#@isdnaai289402i402asdw';
//const verifyToken = require('./verifyToken')
const loginUser = async (req, res) => {
  try {
    const userid = req.body.userid;
    const password = req.body.password;
    console.log(password);
    await customerRegister.findOne({ email: userid }).then((existUser) => {
      console.log(existUser);
      if (existUser && existUser._id) {
        console.log(password, existUser.password);
        bcrypt.compare(password, existUser.password, function (err, response) {
          console.log(response);
          console.log(err);
          if (!err) {
            if (response) {
              const authToken = jwt.sign(
                { _id: existUser._id, email: existUser.email },
                secret_key,
                {
                  expiresIn: '1h',
                }
              );
              res
                .status(201)
                .json({ data: { authToken, response, existUser } });
            } else if (!response) {
              res.status(201).json({ data: { response, existUser } });
            }
          }
        });
      } else {
        console.log(error);
        res.status(500).json(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const createCustomer = async (req, res) => {
  try {
    const { lookingFor, email, phone, password, userName } = req.body;
    const customer = new customerRegister({
      lookingFor,
      email,
      phone,
      password,
      userName,
    });
    const salt = await bcrypt.genSalt(10);

    await bcrypt.hash(password, salt).then((hashedPassword) => {
      if (hashedPassword) {
        console.log('hashed Password', hashedPassword);
        customer.password = hashedPassword;
      }
    });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getCustomer = async (req, res) => {
  try {
    const getCustomers = await customerRegister.find();
    res.status(200).json(getCustomers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getSingleCustomer = async (req, res) => {
  try {
    const singleCustomer = await customerRegister.findById(req.params.id);
    if (!singleCustomer) {
      res.status(404).json({ message: 'Employee Not Found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { lookingFor, email, phone, password, userName } = req.body;
    const myCustomer = await customerRegister.findByIdAndUpdate(req.params.id, {
      lookingFor,
      email,
      phone,
      password,
      userName,
    });
    if (!myCustomer) {
      res.status(404).json({ message: 'Customer Not Found' });
    }
    res.status(200).json(myCustomer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deleteEmployeeId = await customerRegister.findByIdAndDelete(
      req.params.id
    );

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  loginUser,
  createCustomer,
  getCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};

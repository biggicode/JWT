const login = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, Lari`,
    secret: `Here is your authorized data, lucky number ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
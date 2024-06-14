 const registerUser = (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
  
    res.json({
      success: true,
      name: userName,
      email: userEmail,
    });
  }

  module.exports = registerUser
const UserBookService = require('../services/userBook.service');

const getUsersBooksById = async (req,res) => {
  try {
    const { id } = req.params;
    const user = await UserBookService.getUsersBooksById(id);

    if(!user) return res.status(404).json({ message: 'User not found.' });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getUsersBooksById,
}
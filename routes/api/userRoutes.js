const router = require('express').Router();
const {
    getUsers,
    getUser,
    newUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(newUser);

router.route('/:userId').get(getUser).delete(removeUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// router.route('/:userId/assignments').post(addAssignment);

// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;




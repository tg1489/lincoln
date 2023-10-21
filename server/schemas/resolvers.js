const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      } else {
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const newUser = await User.create({ username, email, password });
        const token = signToken(newUser);
        return { token, newUser };
      } catch (err) {
        console.error(err);
        throw new AuthenticationError('Failed to create user');
      }
    },

    loginUser: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        // Check if the user exists and if the provided password is correct
        if (!user || !(await user.isCorrectPassword(password))) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user }; // Return back to the Client side
      } catch (err) {
        console.error(err);
        throw new AuthenticationError('An error occurred during login');
      }
    },
    saveBook: async (parent, { userId, book }) => {
      try {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );
      } catch (err) {
        console.error(err);
        throw new AuthenticationError('User not found');
      }
    },
    removeBook: async (parent, { bookId }, context) => {
      try {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
      } catch (err) {
        console.error(err);
        throw new AuthenticationError('Book not found');
      }
    },
  },
};

module.exports = resolvers;

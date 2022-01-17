const connection = require('../config/connection');
const { User } = require('../models');
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  // await Student.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  User.insertMany(
    {
      name: 'Geoff',
      email: 'geoff@hotmail.com'
    },
    {
      name: 'Teddy',
      email: 'teddy@hotmail.com'
    },
    {
      name: 'Freddy',
      email: 'freddy@hotmail.com'
    },
    {
      name: 'Betty',
      email: 'Betty@hotmail.com'
    },
    {
      name: 'Willy',
      email: 'Willy@hotmail.com'
    },
    {
      name: 'Paul',
      email: 'Paul@hotmail.com'
    },
  )

  // Get some random assignment objects using a helper function that we imported from ./data
  // const assignments = getRandomAssignments(20);

  // Loop 20 times -- add students to the students array
  // for (let i = 0; i < 20; i++) {
  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   students.push({
  //     first,
  //     last,
  //     github,
  //     assignments,
  //   });
  // }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.table(assignments);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

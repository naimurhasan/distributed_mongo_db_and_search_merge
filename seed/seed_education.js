const { MongoClient } = require('mongodb');
const {EDUCATION_URI} = require('../constant')

const uri = EDUCATION_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const educationCollection = client.db('education').collection('education');

async function seedEducationData() {
  try {
    await client.connect();

    const educationData = [
      // Replace with your actual student data here
      {
        studentID: 1001,
        name: 'Alice Smith',
        passingYear: 2023,
        CGPA: 3.8,
        skills: ['Java', 'Python', 'Machine Learning'],
        education: {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
        },
        HSC: {
          school: 'Central High School',
          passYear: 2020,
        },
        SSC: {
          school: 'Greenville Middle School',
          passYear: 2018,
        },
        additionalFields: {
          coursesTaken: ['Data Structures', 'Algorithms', 'Database Systems'],
          gpaPerSemester: [3.9, 3.7, 3.8, 4.0],
          awardsHonors: ['Dean\'s List (2021-2022)'],
        },
      },
      // Add more student data objects
    ];

    await educationCollection.insertMany(educationData);

    console.log('Education data seeded successfully!');
  } catch (error) {
    console.error('Error seeding education data:', error);
  } finally {
    await client.close();
  }
}

seedEducationData();

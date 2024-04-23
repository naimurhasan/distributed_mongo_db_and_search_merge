const { MongoClient } = require('mongodb');
const {WORK_URI} = require('../constant')

const uri = WORK_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const workCollection = client.db('work').collection('work');

async function seedWorkData() {
  try {
    await client.connect();

    const workData = [
      // Replace with your actual work experience data here
      {
        studentID: 1001,
        name: 'Alice Smith',
        workExperience: 1, // Years of experience (optional)
        skills: ['Software Development', 'Problem-Solving'],
        jobTitle: 'Software Engineer Intern',
        companyName: 'Tech Solutions Inc.',
        startDate: new Date('2022-06-01'),
        endDate: new Date('2022-12-31'),
        projectsInvolved: ['E-commerce Platform', 'Customer Relationship Management System'],
        additionalFields: {
          achievementsInWork: ['Successfully implemented a new feature that increased user engagement by 15%'],
          recommendations: [
            'John Doe, Senior Engineer, Tech Solutions Inc. (john.doe@techsolutions.com)',
          ],
        },
      },
      // Add more work experience data objects
    ];

    await workCollection.insertMany(workData);

    console.log('Work data seeded successfully!');
  } catch (error) {
    console.error('Error seeding work data:', error);
  } finally {
    await client.close();
  }
}

seedWorkData();

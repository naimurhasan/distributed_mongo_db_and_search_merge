const { MongoClient } = require('mongodb');
const {RESEARCH_URI} = require('../constant')

const uri = RESEARCH_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const researchCollection = client.db('research').collection('research');


async function seedResearchData() {
    try {
      await client.connect();
  
      const researchData = [
        // Replace with your actual research data here
        {
          studentID: 1001,
          name: 'Alice Smith',
          researchAreas: ['Artificial Intelligence', 'Natural Language Processing'],
          totalResearches: 2,
          publications: [
            { title: 'A Survey of Machine Learning Techniques for Text Classification', venue: 'ACM Transactions on Information Systems' },
            { title: 'Building a Chatbot for Customer Service Applications', venue: 'International Conference on Intelligent Systems' },
          ],
          additionalFields: {
            conferencesAttended: ['AAAI 2023', 'NAACL 2022'],
            researchCollaborations: ['Dr. Jane Doe, Professor at University X'],
            grantsReceived: ['National Science Foundation Grant (2022-2024)'],
          },
        },
        // Add more research data objects
      ];
  
      await researchCollection.insertMany(researchData);
  
      console.log('Research data seeded successfully!');
    } catch (error) {
      console.error('Error seeding research data:', error);
    } finally {
      await client.close();
    }
  }
  
  seedResearchData();
  
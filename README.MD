### Project Goals

✅ Seed DB 

[x] Backend General Search Endpoint

[x] Front End Connecting Backend



### How to Get Started With This Project

Edit the constant js with appropriate DB LINKS

Then Run all thee seeds one by one with command

```
node seed/seed_education.js
node seed/seed_research.js
node seed/seed_work.js
```


Sample Education DB Docs:
```
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
      }
```


Sample Work DB Docs:
```
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
      }
```

Sample Research DB Docs:
```
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
        }
```
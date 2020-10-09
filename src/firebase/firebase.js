import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:660973445480:web:39e3a997fff887c5ea76dd",
    measurementId: "G-HZ39R008VD"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };







////child_removed
// database.ref('Expenses').on('child_removed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('Expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('Expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('Expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('Expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
    

// database.ref('Expenses').push({
//     description: 'Hoverboard',
//     note: 'Fully functional electric hoverboard',
//     amount: 12100,
//     createdAt: 1500
// });

// database.ref().on('value', (snapshot)=> {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(()=> {
//     database.ref('age').set(27);
// },3500);

// setTimeout(()=> {
//     database.ref().off();
// },7000);

// setTimeout(()=> {
//     database.ref('age').set(28);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot)=> {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fectching data', e);
//     });

// database.ref().set({
//     name: 'Ferdinand Gege',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Abuja',
//         country: 'Nigeria'
//     },
//     attributes: {
//         height: 73,
//         weight: 150
//     }
// }).then(()=> {
//     console.log('Data is saved');
// }).catch((e)=> {
//     console.log('This failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Lagos'
// });

// database.ref().update({
//     name: 'Thomas Partey',
//     age: 29,
//     job: 'Software Developer',
//     isSingle: null
// });

//this deletes a referenced data
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was successfully deleted!')
//     }).catch((e)=> {
//         console.log('Unable to delete data', e)
//     });

//this also removes data
//database.ref('isSingle').set(null)

//firebase.analytics();
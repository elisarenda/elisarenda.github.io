/* eslint-disable no-undef */

import firebase from 'firebase'

//config your firebase push
const config = {
    apiKey: 'AIzaSyBBkK4ijCPvyd8JYl7oxJNB7NLXyfNvwRA',
    authDomain: 'portfolio-3ee54.firebaseapp.com',
    databaseURL: 'https://portfolio-3ee54.firebaseio.com',
    projectId: 'portfolio-3ee54',
    storageBucket: 'portfolio-3ee54.appspot.com',
    messagingSenderId: '202643876386',
    appId: '1:202643876386:web:d95d698d7c79be2a'
}
const firebaseConf = firebase.initializeApp(config)

export default firebaseConf
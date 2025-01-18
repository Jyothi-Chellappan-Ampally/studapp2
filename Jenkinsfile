pipeline {
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
        git url: 'https://github.com/Jyothi-Chellappan-Ampally/studapp2.git',
           // credentialsId: 'your-credentials-id'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}

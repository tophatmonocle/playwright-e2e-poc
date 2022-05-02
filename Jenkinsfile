// pipeline {
//    agent { docker { image 'mcr.microsoft.com/playwright:v1.21.0-focal' } }
//    stages {
//       stage('e2e-tests') {
//          steps {
//             sh 'echo "Running e2e tests"'
//             sh 'npm install'
//             sh 'npm run test'
//          }
//       }
//    }
// }
node {
    checkout scm
        docker.image('mcr.microsoft.com/playwright:v1.21.0-focal').inside {
            sh 'echo "Running e2e tests"'
            sh 'npm install'
            sh 'npm run test'
        }
}

pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.22.0-focal' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'echo "Running e2e tests"'
            sh 'npm install'
            sh 'npm run test'
         }
      }
   }
}

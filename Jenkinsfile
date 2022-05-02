node("worker") {
    checkout scm
        docker.image('mcr.microsoft.com/playwright:v1.21.0-focal').inside {
            sh 'echo "Running e2e tests"'
            sh 'npm install'
            sh 'npx playwright test'
        }
}

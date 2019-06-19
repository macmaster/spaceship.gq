node {
  docker.image('node').inside {
    sh('node --version')

    stage('build') {
      sh('npm ci --only production')
      sh('npm run build')
    }
  }
}

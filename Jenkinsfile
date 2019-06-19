node {
  docker.image('node').inside {
    sh('node --version')

    stage('install') {
      sh('npm install')
    }

    stage('build') {
      sh('npm run build')
    }
  }
}

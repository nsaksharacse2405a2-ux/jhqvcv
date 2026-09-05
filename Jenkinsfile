pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Product Catalogue'
                
                bat '''
                    if exist index.html (
                        echo index.html found
                    ) else (
                        echo index.html missing
                        exit /b 1
                    )

                    if exist style.css (
                        echo style.css found
                    ) else (
                        echo style.css missing
                        exit /b 1
                    )

                    if exist script.js (
                        echo script.js found
                    ) else (
                        echo script.js missing
                        exit /b 1
                    )
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Product Catalogue'

                bat '''
                    findstr /C:"Product Catalogue" index.html
                    findstr /C:"searchProducts" script.js
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Product Catalogue deployment completed'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}
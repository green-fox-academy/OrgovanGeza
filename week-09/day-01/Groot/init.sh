mkdir iamgroot && cd iamgroot
mkdir test && touch test/test-routes.js
npm init -f
npm install tape supertest mocha chai --save-dev
npm install express --save
touch server.js routes.js
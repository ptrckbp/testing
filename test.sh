npm i -D @playwright/test ;
npm install -g nodemon ;
npx playwright install ; 
nodemon --exec 'npx playwright test tests/first.spec.ts' ./tests -e ts
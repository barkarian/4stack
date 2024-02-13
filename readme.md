## Deploy with railway
### One click deployment and ci/cd on Railway ✨
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Yvibxa?referralCode=Uc3pOA)
- You will get 3 microservices:postgres,and 2 services
- You will get the initial code directly to your github
- You will get ci/cd for production for your project (on main branch)
- Both services are now up 🚀
- Setup authentication with auth0 (similarly with local deployment authentication setup)

**After that create an auth0 application for production (Same process with the dev auth0 application that you will create for local development later)**

### Deploy locally
##### Setup
###### 1.Setup Auth0 Application for strapi connectivity (ONLY ONCE - SETUP)
1. Create a New Auth0 API (Applications→APIs→Create API)
2. Create an application (applications→create application)
-Create a name and select "machine to machine application then click on create
3. Configure the Auth0 application settings: 
- choose settings tab
- Allowed Logout URLs: http://localhost:5173
- Allowed Web Origins: http://localhost:5173

*Scroll down to Advanced Settings*
- select Grand Types(tab)
- Implicit
- Authorization Code
- Refresh Token
- Client Credentials
- click save changes
- 1) Copy the auth0 url you are currently in 
Add Auth0 Settings url inside dev-utils/.env:
- 2) Set the env variable to the url of this page **/dev-utils/.env->AUTH0_SETTINGS_URL**= *https://manage.auth0.com/dashboard/us/'some-id'/applications/'some-other-id'/settings*

###### 2.Setup dev-utils (ONLY ONCE - SETUP)
```
cd dev-utils
npm install
npm run generate-env-variables # will generate initial env variables for strapi
```
- copy .env.example to .env and fill the values
- remember to add **/dev-utils/.env->AUTH0_SETTINGS_URL** from *Setup Auth0 Application*

###### 3.Set-up Strapi Authentication with Auth0 (ONLY ONCE- SETUP)
- cd strapi
- npm run develop
- Start strapi
    - cd strapi && npm run dev
    Find Auth0 Provider
    - Go to http://localhost:1337/admin/settings/users-permissions/providers
    - Click on the "Connect a provider" button
    - Select Auth0
    - Fill in the form with the Auth0 settings
    - Click on save
    - Configure Provider
        - Enable: TRUE
        - Client ID: 'Your Auth0 Client ID'
        - Client Secret: 'Your Auth0 Client Secret'
        - Host URI (Subdomain): 'Your Auth0 tenant url',(looks like this:dev-0e2aajac.us and it derives from DOMAIN: dev-0e2aajac.us.auth0.com)
        - The redirect URL to your front-end app: http://localhost:5173/auth/connect/auth0/redirect

##### Spin up
###### Spin up dev-utils
Run:
```
cd dev-utils
npm run start
```
- Each time dev utils is starting:
    - a new "NGROK_TUNNEL" will be spinned up and connected to localhost:1337
    - PUBLIC_STRAPI_URL enviroment variables will be set to this "NGROK_TUNNEL"(both on sveltekit/.env and strapi/.env)
    - *You will be reminded to update the auth0 configuration each time you spin up a new tunnel*

###### Spin up strapi
(To develop and get access to powerful ai tools you first need to spin up dev-utils)
Run:
```
cd strapi
npm run dev
```


###### Spin up sveltekit
(To develop and get access to powerful ai tools you first need to spin up dev-utils)
Run:
```
cd sveltekit
npm run dev
```

##### Development scripts to know
Run this to generate types for your development enviroment(run it from /sveltekit or from /strapi)
```
npm run types-gen #for sveltekit and strapi
```

#### How the authentication is working?
Login Button
1) Calls strapi auth
2) Strapi Calls auth0 
3) auth0 send a response to frontend with a callback url for strapi
4) frontend calls strapi 
5) strapi verifies that the callback url is correct
6) Strapi sends the jwt of the user to the client
7) Sveltekit calls strapi again with his jwt token to users/me
8) Strapi returns the custom user jwt and the custom user for local Storaging(YOU CAN MODIFY THE JWT AND USER DATA)
How sveltekit authorization works?
9) Sveltekit can now authorize the user on each request without talking to strapi
10) hooks.server.ts will now verify the jwt on each request
11) The authenticated user data will be inside **event.locals.authenticatedUserInfo**

#### Tips for fast development
You can use jwt for verification on sveltekit and on strapi as well.
- Add data to strapi jwt manually from /strapi/src/extensions/users-permissions/strapi-server.ts
- Similarly look for this "4S_CODE_BLOCK" comment inside the code,in order to modify the core behavior of the initial system
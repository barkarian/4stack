## Deploy with railway
#### One click deployment and ci/cd on Railway ✨
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Yvibxa?referralCode=Uc3pOA)
- You will get 3 microservices:postgres,and 2 services
- You will get the initial code directly to your github
- You will get ci/cd for production for your project (on main branch)
- Similarry with local deployment steps setup authentication

#### Deploy locally
##### Setup
###### 1.Setup Auth0 Application for strapi connectivity (ONLY ONCE - SETUP)
1. Create a New Auth0 API (Applications→APIs→Create API)
2. Create an application (applications→create application)
-Create a name and select "machine to machine application then click on create
3. Configure the Auth0 application settings in the settings tab SET:
- Allowed Logout URLs: http://localhost:5173
- Allowed Web Origins: http://localhost:5173

*Scroll down to Advanced Settings->Grand Types(tab):*
- Implicit
- Authorization Code
- Refresh Token
- Client Credentials
Add Auth0 Settings url inside dev-utils/.env:
- Copy the auth0 settings page url and set it to the environment variable
- Set the env variable to the url of this page **/dev-utils/.env->AUTH0_SETTINGS_URL**= *https://manage.auth0.com/dashboard/us/'some-id'/applications/'some-other-id'/settings*

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
- npm run develp
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
        - Host URI (Subdomain): 'Your Auth0 tenant url',(looks like this:dev-0e2aajac.us and it derives from - dev-0e2aajac.us.auth0.com)
        - The redirect URL to your front-end app: http://localhost:5173/auth/connect/auth0/callback

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
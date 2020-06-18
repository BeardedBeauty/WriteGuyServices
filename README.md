# WriteGuyServices
For Write Guy Services, a website for a professional English teacher catering to clients in latin America. This site is set up with authentication/login services, basic navigation, admin properties, and a billing service for lessons (not yet implemented). The Write Guy Services website was based on the premise that this english teacher would be able to write and publish articles on it, as well as manage users that will be given the ability to book and be billed for lessons.

## Blog
This teacher was given a special user profile that has the ability to create and modify blog content and articles. Each article written is displayed with a content snippet on the main blog page, and clicking "Read more…" will load the entire document. Creating and editing blog content is done with CKEditor, a robust content editing tool that saves information in the form of basic, pre-rendered HTML, which then can be easily displayed as regular HTML content.

## Users & Authentication
This site is no different from other sites in that it uses hidden authentication tokens that are stored in a cookie in the user's browser. Most pages currently do not require any authentication, as there is no need for any right now. When given the green light, this site will be updated with the ability for users to book and pay for sessions - only upon logging in.
### Cookies
Cookies store tokens. They are checked each time a user does anything that requires authentication. This includes updating passwords, visiting a protected page, etc. Logging out will delete the current session, a.k.a. the cookie.
### Protected Pages
Protected pages are designed to keep non-users from accessing vulnerable content. This is done by wrapping the entire webpage component in another component that redirects you to the login page if there is no cookie present. Only a few pages have this feature, and a few pages go even a step further by only giving access to admins.

## Future Updates
* Web domain still needs to be acquired, waiting for green light from client
* "Book a Session" page is currently inaccessable, with the intention of implementing a payment system for booking english lessons. Green light needed.

### Built with these tools:
* bcryptjs
* cookie-parser
* cors
* dotenv
* Express
* js-cookie
* jwt-simple
* Materialize-css
* Mongoose
* MongoDB Atlas
* React-Router-DOM
* React.JS
* Axios
* CKEditor4-react
* Moment-Timezone

### Author
[John Ochs](https://www.linkedin.com/in/john-w-ochs/)

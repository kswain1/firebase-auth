# firebase-auth
All course files for the Firebase authentication tutorial series on The Net Ninja YouTube channel.

# Firebase-auth sdk seutp
- website sends credentials over to firebase authentication server
- server sends back token for website for future authentications and routes
- firebase sdk is loaded on the website that stores with persist token for future authorization of routes

# User and groups 
- automatically create users upon authentication
- have sign up form post sign up (for b2b) to assign teams user's are apart or joined (shoud be array)/ Initially manually create this page
- user parameters: 
    + acces-level: users
    + teams : [game1, game2]
    + games: [challenge1, challenge2, level3] 

# Python Run Server setup
-  /usr/local/bin/python3.7 -m http.server 1337 ("kehlin personal command")
- Not Kehlin User python -m http.server 1337
-

# Debugging Tips
- If Chrome Browser isn't updating javascript after changes have been. May need to complete a server refresh
- Command: `(command button) shift r` Macbook instructions

## Authentication Lessons
# Lesson 7:
  - How do you know if someone is logged in?
  - What do you if there are different types of Users Admin or user?
  - How do you update your app to moderate based on admin status.
    - Kehlin's Initial Assumption 7/25/2019 11:21 AM:
      `userType = auth.TypeOfUser
      if userType != Admin {
        show user website
      }
      else{
        show Admin wesbite
      }`
    - Results from the Net Ninja Tutorials

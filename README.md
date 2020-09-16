## ROUTES

|Method|URL|Description|
|---|---|---|
GET | /login | redirects to / if user logged in. Renders auth/login
POST | /login | redirects to /user-profile if user logged in

```
body:
    - username
    - password
```
|Method|URL|Description|
|---|---|---|
GET | /signup | Renders auth/signup
POST | /signup | Redirects to /user-profile

```
body:
    - name
    - last name
    - username
    - email
    - password
```
|Method|URL|Description|
|---|---|---|
GET | /user-profile | renders user profile. If the user is not logged in, render homepage. 
GET | /edit/user-profile/Id | renders user profile edit page. If the user is not logged in, render homepage. 
POST | /edit/user-profile/Id | update user profile. Redirect /user-profile
POST | /logout | redirects to /
```
body:
    - pic
    - name
    - last name
    - username
    - email
    - password
    - pets
```
|Method|URL|Description|
|---|---|---|
GET | /pets | renders user's pets
GET | /pet-profile/Id | renders pet profile page
GET | /edit/pet-profile/Id | renders pet profile edit page
POST | /edit/pet-profile/Id | update pet profile. Redirect /pet-profile:Id
POST | /petDelete/Id | delete a pet profile. Redirect to /user-profile
POST | /logout | redirects to /
```
body:
    - pic
    - name
    - type
    - breed
    - birth date
    - age
    - comments
```
|Method|URL|Description|
|---|---|---|
GET | /appointment | renders user's appointments 
GET | /appointment/Id | renders appointment page
GET | /edit/appointment/Id | renders pet profile edit page
POST | /edit/appointment/Id | update appointment. Redirect /user-profile
GET | /create/appointment | renders appointment create page
POST | /create/appointment | saves appointment. Redirect /user-profile
POST | /logout | redirects to /
```
body:
    - title
    - pet
    - vet's name
    - date
    - time
    - comments
```

## Models
1. This is the 1st element of the list
2. This is the 2nd element of the list
    ```
    User model
    - username: String, required
    - first name: String, required
    - last name: String, required
    - password: String, required
    - image: String
    - pets: Array ObjectID
    ```
3. This is the 3rd element of the list
4. This is the 4th element of the list
    ```
    Pet model
    - name: String, required
    - owner: ObjectID
    - type: String, required
    - breed: String, required
    - comments: String
    - birth date: Date, required
    - appointments: Array ObjectID
    ```
5. This is the 5th element of the list
    ```
    Appointment model
    - title: String, required
    - vet: String, required
    - pet: ObjectID, required
    - date: Date, required
    - time: Date, required
    - comments: String
    ```

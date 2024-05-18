# Phonebook API

The Phonebook app provides basic functionality for a web application that allows to manage your both personal and professional
contacts.

## Table of Contents

- [Basic capabilities](#basic-capabilities)
- [Frontend](#frontend)
- [Features](#features)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributors](#contributors)

## Basic capabilities

- Creating user accounts.
- Getting current user's info and managing it's subscription value.
- Adding a new contacts by entering their details.
- Filtering contacts by amount and favorite value.
- Get information about existing contact by id and contacts list.
- Managing info about every contact item.

# Frontend

- [LivePage](https://alinatantsura.github.io/phonebook/)(The first openning might takes some time. Please wait. Thanks for you patience)
- [GitHub](https://github.com/AlinaTantsura/phonebook)

# Usage

Base url:

```
https://contactslistbackend-huoj.onrender.com
```

Here are use cases of the Phonebook API:

- To create a new user account, send a POST request to `/api/users/register`.
- To verify a user's email, send a GET request to `/api/users/verify/:verificationCode`.
- To request a user's email verification, send a POST request to `/api/users/verify`.
- To authenticate a user, send a POST request to `/api/users/login`.
- To logout a user, send a POST request to `/api/users/logout`.
- To get a user's current profile, send a GET request to `/api/users/current`.
- To update a user's subscription, send a PATCH request to `/api/users/current`.
- To get a list of current user's contacts, send a GET request to `/api/contacts`.
- To create a new contact, send a POST request to `/api/contacts`.
- To get info about one contact by id, send a GET request to `/api/contacts/:id`.
- To edit info about contact by id, send a PUT request to `/api/contacts/:id`.
- To delete a contact by id, send a DELETE request to `/api/contacts/:id`.
- To change favorite value of contact by id, send a GET request to `/api/contacts/:id/favorite`.

# API Documentation

For detailed API documentation or tests, please refer to the [Swagger API Documentation](https://contactslistbackend-huoj.onrender.com/api-docs/#/).The first openning might takes some time. Please wait. Thanks for you patience

# Contributors

AlinaTantsura - developer

- [GitHub](https://github.com/AlinaTantsura)
- [LinkedIn](https://www.linkedin.com/in/alina-tantsura/)

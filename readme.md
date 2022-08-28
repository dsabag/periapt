how to run:

1. `npm i`
2. `node .`
3. `chrome localhost:3000`

- x-auth headers were neglected in favor of cookies, we like cookies.
- since cookies were used, the token was set in the cookie, and not as a response payload, nor a field in the form.

# **Week 06 - 6.1 | HTTP Deep Dive**


- [**Assignment Link**](https://petal-estimate-4e9.notion.site/Assignment-Creating-an-auth-middleware-bb126573a45742469fb9db0f02940186)

or, 

## Assignment #1 - Creating an auth middleware

Can you try creating a `middleware` called `auth` that verifies if a user is logged in and ends the request early if the user isn’t logged in?

<details>
<summary>Solution</summary>

```js
function auth(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username
    })
});
```
</details>
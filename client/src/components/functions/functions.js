export const register = (mail, password) => {
    return fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username: mail, password: password}),
    });
}


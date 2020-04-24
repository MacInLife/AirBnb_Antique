export const login = (email, password) => {
    return fetch('https://bbnb-booking.now.sh/api/users/signIn', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((response) => {
            // Si un code erreur a été détecté on déclenche une erreur
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
}
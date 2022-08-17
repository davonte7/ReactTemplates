  /* Authentication Handling
    Replace with the Authentication handling and returned information
    for your application
  */ 
export default function handleAuth() {
    console.log("Authentication Handled")
    return ({
        name: 'Username',
        email: 'example@example.com',
        auth: true
    })
}
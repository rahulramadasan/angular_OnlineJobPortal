// export function log(userdata){
//     User.findOne({ email: userdata.email }, (err, user) => {
//         if (err) {
//             console.group(err)
//         } else if (!user) {
//             res.status(401).send('invalid Email')
//         } else if (user.password != userdata.password) {
//             res.status(401).send('invalid Password')
//         }
//         else {
//             return
//             // res.status(200).send(user)
//         }
//     })

// }
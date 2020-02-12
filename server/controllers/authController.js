const bcrypt = require('bcryptjs');

const mailOptions ={
    from: 'korigandolph@gmail.com',
    to: '',
    subject: 'Thanks for Registering',
    text: 'Thank you for registering'
}

module.exports ={
    register: async(req, res)=>{
        const {email, password} = req.body,
               db = req.app.get('db'),
               {session}= req;

        const transporter= req.app.get('transporter')

        let user = await db.user.check_customer(email);
        if(user[0]){
            return res.status(400).send('Email already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register_customer(email, hash)

        let sendMailOptions = {...mailOptions, to: email}
        transporter.sendMail(sendMailOptions, (err, data)=>{
            if(err){
                console.log('error occurs')
            } else {
                console.log('email sent')
            }
        })

        let userCart = await db.cart.create_order(newUser[0].customer_id);
        let sessionUser = {...newUser[0], ...userCart[0]};
        session.user = sessionUser;
        res.status(201).send(session.user);
    },
    login: async(req, res)=>{
        const {email, password} = req.body,
               db= req.app.get('db'),
               {session} = req;

        let user = await db.user.check_customer(email);
        if(!user[0]){
            return res.status(400).send('User not found')
        }
        const authorized = bcrypt.compareSync(password, user[0].password);
        if(!authorized){
            return res.status(401).send('Incorrect Password')
        }
        delete user[0].password;
        session.user = user[0];
        res.status(202).send(session.user);
    },
    logout: (req, res)=>{
        req.session.destroy();
        res.sendStatus(200);
    }
}
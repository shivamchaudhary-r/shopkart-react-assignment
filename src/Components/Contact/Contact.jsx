import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        alert(name + ' Your message has been sent successfully: ' + message)
    }

    return (
        <>
            <div id="contact">
                <div className="contact_parent">
                    <div className="contact_top">
                        <div className="contact_top_left">
                            <h3>Newslleter</h3>
                            <p>
                                Get news about articles and updates in your inbox.
                            </p>
                        </div>

                        <div className="contact_top_right">
                            <form onSubmit={submitHandler}>
                                <input type="text" value={name} placeholder='NAME' onChange={(e) => setName(e.target.value)} />
                                <input type="email" value={email} placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" value={message} placeholder='MESSAGE' onChange={(e) => setMessage(e.target.value)} />

                                <input type="submit" value="SEND" />
                            </form>
                        </div>
                    </div>

                    <div className="contact_bottom">
                        <div className="contact_bottom_left">
                            <h3>GET</h3>
                        </div>
                        <div className="contact_bottom_right">
                            <h3>IN</h3>
                            <h3>TOUCH</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
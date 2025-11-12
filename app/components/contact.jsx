'use client';
import styles from './contact.module.css'

export default function Contact() {

    return(
        <form className={styles.form}>
            <h3>Send us a Message</h3>

            <label>
                Full Name
                <input type="text" placeholder='Your full name'/>
            </label>
            <label>
                Email Address
                <input type="email" placeholder='your@email.com'/>
            </label>
            <label>
                Message
                <textarea placeholder='Tell us about your travel requrements...'></textarea>
            </label>
            <a href='#footer' className={`${styles.button1} ${styles.forPC}`}>Book now</a>
        </form>
    )
}
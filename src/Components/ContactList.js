import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style.css'

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts')
            .then(response => setContacts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="table-container">
            <h1>Contact List</h1>
            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>
                                <img
                                    src={contact.avatar}
                                    alt={`${contact.first_name} ${contact.last_name}`}
                                    className="table-avatar"
                                />
                            </td>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.company}</td>
                            <td>{contact.job_title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;

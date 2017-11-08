import React from 'react';
import Avatar from './Avatar';

export default ({ contacts, onAddToChatClick }) => (
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chat</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map(contact =>
                <tr key={contact.id}>
                    <td><Avatar src={contact.avatar_url} /></td>
                    <td>{contact.full_name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone_mobile}</td>
                    <td>{contact.is_sms_enabled && <a href="#add" onClick={onAddToChatClick.bind(null, contact)}>Add to chat</a>}</td>
                </tr>
            )}
        </tbody>
    </table>
);

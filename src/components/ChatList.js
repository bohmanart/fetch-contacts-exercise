import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    padding: 0;
`;

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--c-m-blue);
    border-radius: 20px;
    padding: .5rem 1rem;
    margin: .5rem 0;
`;

export default ({ selectedContacts }) => (
    <Ul>
        {selectedContacts.map(contact => <Li key={contact.id}>{ contact.full_name } <a href="#remove">X</a></Li>)}
    </Ul>
);

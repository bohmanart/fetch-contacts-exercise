import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Nav = styled.nav`
    margin: 1.5rem 0;
    padding: 1rem .5rem;
	border-top: 1px solid var(--c-l-blue);
`;

export default ({ pagination, onPaginationClick }) => (
    <Nav>
        {pagination.prev_page && <Button className="mr-xs" onClick={onPaginationClick.bind(null, pagination.prev_page)}>Prev</Button>}
        <span>Page {pagination.current_page} of {pagination.total_pages}</span>
        {pagination.next_page && <Button className="ml-xs" onClick={onPaginationClick.bind(null, pagination.next_page)}>Next</Button>}
    </Nav>
);
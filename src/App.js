import React, { Component } from 'react';
import ContactsService from './services/ContactsService';
import Contacts from './components/Contacts';
import Pagination from './components/Pagination';
import Button from './components/Button';
import ChatList from './components/ChatList';
import Modal from './components/Modal';

import 'normalize.css';
import './App.css';

export default class App extends Component {
    state = {
        contactsMeta: {},
        contactsData: [],
        selectedContacts: [],
        showModal: false
    }

    componentDidMount() {
        this.getContacts(1);
    }

    render() {
        const { contactsMeta, contactsData, selectedContacts } = this.state;

        const modal = this.state.showModal ? (
            <Modal>
                <ChatList selectedContacts={selectedContacts} />
                <textarea></textarea>
                <footer>
                    <Button onClick={this.handleHideModal}>Cancel</Button>
                    <Button className="ml-xs">Send Message</Button>
                </footer>
            </Modal>
        ) : null;

        return (
            <div className="App">
                <header className="App-header">
                    <h1>You have {contactsMeta.total_count} Skipio contacts</h1>
                </header>
                <main className="App-content">
                    <Contacts contacts={contactsData} onAddToChatClick={this.onAddToChatClick} />
                    <footer>
                        <Pagination pagination={contactsMeta} onPaginationClick={this.onPaginationClick} />
                    </footer>
                </main>
                <aside className="App-actions">
                    <h3>Start chatting!</h3>
                    <ChatList selectedContacts={selectedContacts} />
                    <Button onClick={this.handleShowModal}>Chat now</Button>
                </aside>
                {modal} {/* modal is rendered in <div id="modal"></div> which is outside of the DOM node this component is rendered in */}
            </div>
        );
    }

    getContacts = pageNum => {
        ContactsService.getContacts(pageNum, 10)
            .then(response => {
                const contactsMeta = response.meta;
                const contactsData = response.data;
                this.setState({ contactsMeta, contactsData });
            })
            .catch(error => console.log(error));
    }

    onPaginationClick = pageNum => {
        this.getContacts(pageNum);
    }

    onAddToChatClick = ({ id, full_name, phone_mobile }) => {
        const newChatObj = {
            id,
            full_name,
            phone_mobile
        }

        const newSelectedContactsArr = this.state.selectedContacts.concat(newChatObj);

        this.setState({ selectedContacts: newSelectedContactsArr });
    }
    
    handleShowModal = () => {
        this.setState({ showModal: true });
    }
    
    handleHideModal = () => {
        this.setState({ showModal: false });
    }
}

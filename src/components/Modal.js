import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background-color: white;
    height: 50%;
    width: 50%;
`;

const modal = document.getElementById('modal');

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modal.appendChild(this.el);
    }

    componentWillUnmount() {
        modal.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <ModalBackdrop>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </ModalBackdrop>,
            this.el,
        );
    }
}

import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';
import { OptFormContainer } from './optForm';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body><span>{item.body}</span></Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            
            <OptFormContainer />
        </Accordion>
    );
};


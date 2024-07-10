import React from 'react';

export default function Footer({ nacimiento, muerte }) {
    return (
        <>
            <p>{nacimiento}</p>
            <p>{muerte}</p>
        </>
    );
}
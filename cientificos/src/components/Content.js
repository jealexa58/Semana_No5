import React from 'react';

export default function Content({ descripcion, frase }) {
    return (
        <>
            <p>{descripcion}</p>
            <p>{frase}</p>
        </>
    );
}

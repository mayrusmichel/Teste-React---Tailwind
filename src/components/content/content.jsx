import React from 'react';

export function Content({ item }) {
    if (!item) return <div className='m-5'>Nenhum item selecionado</div>;

    return (
        <div>
            <h1>{item.label}</h1> 
            <p>{item.description}</p>
        </div>
    );
}

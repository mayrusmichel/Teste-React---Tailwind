import React from 'react';

export function Content({ item }) {
    if (!item) return <div className='m-5'>Nenhum item selecionado</div>;

    return (
        <div>
            <h2>{item.label}</h2> 
            <p>{item.description}</p>
        </div>
    );
}

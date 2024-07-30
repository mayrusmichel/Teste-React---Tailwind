import React, { useState } from 'react';
import { Tree } from 'primereact/tree';
import { dadosMenu } from '../../api/dados-menu';
import { organizeMenuData } from './utils/organizeMenuData'; 
import { Content } from '../content/content'; 
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';                        

export function SideMenu() {
    const [data, setData] = useState(organizeMenuData(dadosMenu.locations));
    const [selectedItem, setSelectedItem] = useState(null);

    // nó selecionado
    const handleNodeSelect = (event) => {
        setSelectedItem(event.node);
    };

    // abrir e fechar nó
    const handleNodeToggle = (node, e) => {
        e.stopPropagation(); // Impede a propagação do clique para o nó
        node.expanded = !node.expanded; // Alterna o estado expandido
        // Atualiza o estado para forçar a re-renderização
        setData([...data]);
    };

    // renderiza os nós pais
    const nodeTemplate = (node) => (
        <div className="d-flex align-items-center p-2 rounded bg-dark text-light">
            <button
                className="w-100 text-start border-0 bg-dark text-light"
                style={{ textAlign: 'left' }}
                onClick={() => handleNodeSelect({ node })}
            >
                <span className="me-2">{node.label}</span>
            </button>
            {node.children && node.children.length > 0 && (
                <button
                    className={`btn btn-sm ms-2 ${node.expanded ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={(e) => handleNodeToggle(node, e)}
                >
                    <i className={`pi ${node.expanded ? 'pi-chevron-down' : 'pi-chevron-right'}`}></i>
                </button>
            )}
        </div>
    );

    // renderiza os filhos
    const renderTreeNodes = (nodes) =>
        nodes.map((node) => (
            <div key={node.id}>
                {nodeTemplate(node)}
                {node.expanded && node.children && (
                    <div className="ms-3">
                        {renderTreeNodes(node.children)}
                    </div>
                )}
            </div>
        ));

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-3 col-lg-2 bg-dark text-light p-3 navbar navbar-dark navbar-expand-md">
                    <div className="navbar-collapse">
                        <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
                            {renderTreeNodes(data)}
                        </div>
                    </div>
                </nav>
                <main className="col-md-9 col-lg-10 p-3">
                    <Content item={selectedItem} />
                </main>
            </div>
        </div>
    );
}

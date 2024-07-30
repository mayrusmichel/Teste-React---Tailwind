import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { dadosMenu } from '../../api/dados-menu';
import { organizeMenuData } from './utils/organizeMenuData';
import { Content } from '../content/content';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function SideMenu() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    // Fetch data and set initial state
    useEffect(() => {
        const fetchData = async () => {
            const menuData = organizeMenuData(dadosMenu.locations);
            setData(menuData);
        };

        fetchData();
    }, []);

    // Handle node selection
    const handleNodeSelect = (event) => {
        const node = event.node;
        setSelectedItem(node);
        setSelectedNodeKey(node.key);
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <nav className="col-md-3 col-lg-3 ">
                    <div className=''>
                        <Tree
                            value={data}
                            expandedKeys={expandedKeys}
                            onToggle={(e) => setExpandedKeys(e.value)}
                            selectionMode="single"
                            selectionKeys={selectedNodeKey ? { [selectedNodeKey]: true } : {}}
                            onSelectionChange={(e) => setSelectedNodeKey(e.value)}
                            onSelect={handleNodeSelect}
                            className=" text-white "
                        />
                    </div>
                </nav>
                <main className="col-md-9 col-lg-8 p-3 d-flex text-white flex-column">
                    <Content item={selectedItem} />
                </main>
            </div>
        </div>
    );
}

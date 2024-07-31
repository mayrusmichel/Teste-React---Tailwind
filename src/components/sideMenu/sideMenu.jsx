import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { dadosMenu } from "../../api/dados-menu";
import { organizeMenuData } from "./utils/organizeMenuData";
import { Content } from "../content/content";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   

import "bootstrap/dist/css/bootstrap.min.css";

export function SideMenu() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedKeys, setExpandedKeys] = useState({});
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
  const [filterValue, setFilterValue] = useState(""); // Filtro inicializado como string vazia

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

    // Expand only the direct parent of the selected node
    const parentKey = node.parent ? node.parent.key : null;
    setExpandedKeys({ [parentKey]: true });
  };
  return (
    <div className="container-fluid mt-5 ">
<img 
  className="icon mb-3" 
  src="/src/assets/images/favicon.svg" 
  alt="" 
  style={{ width: '40px', height: '40px' }} 
/>

      <div className="row ">
        <nav className="col-md-3 col-lg-3 ">
          <div className="">
            <Tree
              value={data}
              expandedKeys={expandedKeys}
              onToggle={(e) => setExpandedKeys(e.value)}
              selectionMode="single"
              selectionKeys={selectedNodeKey ? { [selectedNodeKey]: true } : {}}
              onSelectionChange={(e) => setSelectedNodeKey(e.value)}
              onSelect={handleNodeSelect}
              filter
              filterMode="lenient"
              filterPlaceholder="Buscar no menu"
              className="w-full md:w-30rem text-white"
              filterValue={filterValue}
              onFilterValueChange={(e) => setFilterValue(e.value)} 
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

export function organizeMenuData(items) {
    const itemsById = {};
    const rootItems = [];

    items.forEach(item => {
        itemsById[item.id] = { ...item, label: item.name, children: [] };
    });

    items.forEach(item => {
        if (item.parent === null) {
            rootItems.push(itemsById[item.id]);
        } else if (itemsById[item.parent]) {
            itemsById[item.parent].children.push(itemsById[item.id]);
        }
    });

    function sortItems(item) {
        item.children.sort((a, b) => a.id - b.id);
        item.children.forEach(sortItems);
    }

    rootItems.sort((a, b) => a.id - b.id);
    rootItems.forEach(sortItems);

    return rootItems;
}

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };

export const Table = (value) => {
    const {table} = value;
    const { items, requestSort, sortConfig } = useSortableData(table.data);
    let sortedProducts = [...table.data];
    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    let count = 1;
    return (

        
        <div>
            <table className="table table-hover table-light">
            <thead>
                <tr>
                    {table.name.map(value => {
                        return (
                            <th key={value.id} scope="col">
                                <button
                                    type="button"
                                    onClick={() => requestSort(value.id)}
                                >
                                {value.name}
                                </button>
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>

                {items.map(item => {
                    return (
                        
                         <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/cartridge/${item.id}`}>{item.name}</Link></td>
                            <td>{item.color}</td>
                            <td>{item.producer}</td>
                            <td>{item.nameExcel}</td>
                            <td>{item.minimum}</td>
                            <td>{item.all}</td>                            
                        </tr>
                    )
                })}
            </tbody>
            </table>
        
        </div>         
    )
}
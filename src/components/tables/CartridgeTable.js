import React from "react";
import { Link } from "react-router-dom";
import { useSortableData } from "../../userFuncton/useSortableData";


export const Table = (values) => {
    const table = values.table_data;
    const names = values.column_names;
    const { items, requestSort} = useSortableData(table);
    let sortedProducts = [...table];
    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return (

        
        <div>
            <table className="table table-hover table-light">
            <thead>
                <tr>
                    {names.map(value => {
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
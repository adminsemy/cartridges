import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSortableData } from "../../userFuncton/useSortableData";


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
                            <td><Link to={`/printer/${item.id}`}>{item.name}</Link></td>
                            <td>{item.uin}</td>
                            <td>{item.serial}</td>
                            <td>{item.inventory}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        
        </div>         
    )
}
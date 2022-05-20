import React from "react";
import { Link } from "react-router-dom";
import { useSortableData } from "../../userFuncton/useSortableData";
import { ModalPrinterCartridges } from "../modal/ModalPrinterCartridges";


export const Table = (value) => {
    const {table} = value;
    const { items, requestSort} = useSortableData(table.data);
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
                                    onClick={() => {requestSort(value.id)}}
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
                            <td>{item.cartridge.map(cart => {
                                return <p key={cart.id}>{cart.name}</p>
                            })}</td>
                            <td>{item.uin}</td>
                            <td>{item.serial}</td>
                            <td>{item.inventory}</td>
                            <td>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderModal" onClick={() => {}}>
                                Заказать картридж
                            </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>                                        
            <ModalPrinterCartridges id={''}></ModalPrinterCartridges>            
        </div>         
    )
}
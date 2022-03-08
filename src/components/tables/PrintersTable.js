import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSortableData } from "../../userFuncton/useSortableData";
import { CurrentPrinterCartridges } from "../modal/CurrentPrinterCartridges";


export const Table = (value) => {
    const {table} = value;
    const [cartridges, setCartridges] = useState(null);
    const { items, requestSort} = useSortableData(table.data);
    console.log(cartridges);
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
                                    onClick={() => {requestSort(value.id); setCartridges(null)}}
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
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderModal" onClick={() => setCartridges(item.id)}>
                                Заказать картридж
                            </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Заказать картридж</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            { cartridges === null
                                ? <div></div>                              
                                : <CurrentPrinterCartridges id={cartridges}></CurrentPrinterCartridges>
                            }                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>         
    )
}
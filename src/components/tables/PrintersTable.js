import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSortableData } from "../../userFuncton/useSortableData";
import ModalPrinterCartridges from "../modal/ModalPrinterCartridges";


const PrintersTable = (props) => {
    const {table, nameColumn } = props;
    const [printerId, setPrinterId] = useState(null);
    const { items, requestSort} = useSortableData(table);

    const cartridgesPrinter = (printerId) => {
        setPrinterId(printerId);
    }

    return (
        <div>
            <table className="table table-hover table-light">
            <thead>
                <tr>
                    {nameColumn.map(value => {
                        return (
                            <th key={value.id} scope="col">
                                <button
                                    type="button"
                                    onClick={() => {requestSort(value.id); setPrinterId(null)}}
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
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderModal" onClick={() => cartridgesPrinter(item.id)}>
                                Заказать картридж
                            </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>                                        
            <ModalPrinterCartridges id={printerId}></ModalPrinterCartridges>            
        </div>         
    )
}

const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrintersTable)
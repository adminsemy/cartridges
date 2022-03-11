import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";

export const ModalPrinterCartridges = (props) => {
    const { id } = props;
    const [cartridges, setCartridges] = useState({
        loading: true, 
        data: ''
    });
    useEffect(() => {  
        setCartridges({
            loading: true, 
            data: ''
        });      
        async function getData() {            
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.get(host + `/api/printer/${id}/cartridges`);
            setCartridges({
                loading: false, 
                data: response.data
            });
        };
        if (id) {
            getData();
        }
    },[id, setCartridges]);

    const [orderCartridgeData, setOrderCarrtridgeId] = useState({'printer_id': null, 'cartridge_id': null});
    useEffect(() => {
        async function orderCartridge() {
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.post(host + `/api/cartridge/order`, orderCartridgeData);
            console.log(response.data);
        }
        if ( orderCartridgeData.printer_id ) {
            orderCartridge();            
        }
    },[orderCartridgeData]);
    
    return (
        <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="orderModalLabel">Заказать картридж</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                        {cartridges.loading === true 
                            ?   <Loading />
                            :   cartridges.data.map(cartridge => {
                                    return (
                                        <div className="row mt-2 mb-2" key={cartridge.id}>
                                            <div className="col col-lg-8">{cartridge.name}</div>
                                            <div className="col col-lg-4">
                                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => setOrderCarrtridgeId({'printer_id': id, 'cartridge_id': cartridge.id})}>
                                                Заказать
                                            </button>
                                            </div>
                                        </div>
                                    );
                                })
                        }
                        </div>                          
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
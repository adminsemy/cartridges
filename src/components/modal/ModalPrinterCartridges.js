import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { connect } from "react-redux";
import { AlertContext } from "../../context/alert/AlertContext";
import { Loading } from "../Loading";
import { modalStartLoad } from "../../redux/actions/general/actions";
import { cartridgesPrinter } from "../../redux/actions/cartridges/actions";

const ModalPrinterCartridges = (props) => {
    const {show} = useContext(AlertContext);
    const { id, loading, cartridges, cartridgesPrinterLoad } = props;
    useEffect(() => {
        if (id) {
            cartridgesPrinterLoad(id);
        }
    },[id, cartridgesPrinterLoad]);

    const request = (id, cartridge_id, cartridge_name) => {
        const orderCartridge = async () => {
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.post(host + `/api/cartridge/order`, {printer_id: id, cartridge_id: cartridge_id});
            if (response.data.message === 'Success') {
                show(`${cartridge_name} был успешно заказан`, 'info')
            }
        }
        orderCartridge();
    }
    
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
                        {loading === true 
                            ?   <Loading />
                            :   cartridges.map(cartridge => {
                                    return (
                                        <div className="row mt-2 mb-2" key={cartridge.id}>
                                            <div className="col col-lg-8">{cartridge.name}</div>
                                            <div className="col col-lg-4">
                                            <button type="button"
                                                className="btn btn-success"
                                                data-bs-dismiss="modal"
                                                onClick={() => request(
                                                    id,
                                                    cartridge.id,
                                                    cartridge.name
                                                )}>
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

const mapStateToProps = state => {
    return {
        loading: state.general.modal_loading,
        cartridges: state.cartridge.cartridges_printer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startLoad: () => dispatch(modalStartLoad()),
        cartridgesPrinterLoad: printerId => dispatch(cartridgesPrinter(printerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPrinterCartridges)
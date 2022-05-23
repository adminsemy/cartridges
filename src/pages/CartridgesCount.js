import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Loading } from "../components/Loading";
import { Table } from "../components/tables/CartridgeTable";
import { connect } from "react-redux";
import { cartridgesLoad } from "../redux/actions/cartridges/actions";

const CartridgesCount = props => {
    const { loadData, loading, table_data, column_names } = props
    useEffect(() => {
        loadData();
    },[loadData]);
    if (loading === true) {
        return <Loading/>
    } else {
        return (
            <Fragment>
                <Link to={'/cartridge'}>
                    <button type="button" className="btn btn-primary">Новый картридж</button>
                </Link>
                <Table table_data={ table_data } column_names={column_names}></Table>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.general.loading,
        table_data: state.cartridge.cartridges_table_data,
        column_names: state.cartridge.cartridges_column_names
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(cartridgesLoad())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartridgesCount);
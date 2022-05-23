import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Loading } from '../components/Loading';
import { Table } from '../components/tables/PrintersTable';
import { printersLoad } from '../redux/actions/printers/actions';

const Printers = (props) => {
    const {loading, printersTableColumnName, printers, printersLoad} = props

    useEffect(() => {
        printersLoad()
    },[printersLoad]);

    if (loading === true) {
        return <Loading />
    } else {
        return (
            <Table table={printers} nameColumn={printersTableColumnName}></Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.general.loading,
        printersTableColumnName: state.printer.printers_table_column_names,
        printers: state.printer.printers_table_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        printersLoad: () => dispatch(printersLoad())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Printers)
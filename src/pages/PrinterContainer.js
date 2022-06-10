
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const PrinterContainer = (props) => {
    const params = useParams();
    const printerId = params.id;
    console.log(printerId);
    return (
        <div>
            <h1>Я есть принтер! {printerId}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {}
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {}
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrinterContainer)
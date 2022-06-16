import React from "react";
import TransactionList from './TransactionList'
import { connect } from 'react-redux';
import { onchange, makeList } from "../../Redux/action";

class Formtransacton extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { accountNum, FSC, name, amount, addToList } = this.props
        addToList({ accountNum, FSC, name, amount});

    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    account number: <input type='text' name="accountNum" onChange={(e) => this.props.formInput(e.target.value, 'ACCOUNTNUM')} />
                    <br />  FSC: <input type='text' name="FSC" onChange={(e) => this.props.formInput(e.target.value, 'FSC')} />
                    <br />name: <input type='text' name="name" onChange={(e) => this.props.formInput(e.target.value, 'NAME')} />
                    <br /> amount: <input type='text' name="amount" onChange={(e) => this.props.formInput(e.target.value, 'AMOUNT')} />
                    <br /><button type="submit" >submit</button>
                </form>
                <TransactionList />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accountNum: state.accountNum,
        FSC: state.FSC,
        name: state.name,
        amount: state.amount,
        transactionList: state.transactionList

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formInput: (e, type) => dispatch(onchange(e, type)),
        addToList: (obj) => dispatch(makeList(obj)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Formtransacton);
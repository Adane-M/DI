import React from "react";
import { connect } from "react-redux";
import { handledelete, handleedit } from "../../Redux/action";
const TransactionList = (props) => {
    console.log(props.list);
    if (props.list) {
        return (
            <>
                <h1>Your transaction list here</h1>
                <table>
                    <tbody>
                        {
                            props.list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.accountNum}</td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td><button onClick={() => props.deleteTask(i)}>Delete</button></td>
                                        <td><button onClick={() => props.EditTask(i)}>Edit</button></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </>
        )

    } else {
        console.log('hiii');
        return (
            <>
                <h1>waiting for new transaction</h1>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        list: state.transactionList
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (i) => dispatch(handledelete(i)),
        EditTask: (i) => dispatch(handleedit(i))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);


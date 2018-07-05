import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: '0'
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        //const note = e.target.value;
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        value={this.state.value}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    />
                    <textarea  
                        placeholder="Add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense </button>
                </form>
            </div>
        )
    }
}
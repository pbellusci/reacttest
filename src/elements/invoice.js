import React, { Component } from 'react';
class Invoice extends React.Component {

    constructor(props){
        super(props);

        this.revision = {
            invoice_number: "1234567",
            date: "7/3/18",
            due_date: "7/3/18",
            terms: "Net 0"
        }
        this.billing_information = {
            address: 'Fake St 123',
            phone: '+54993313513',
            name: 'Fake Billing Name'
        }
        this.balance = '$545.45';
        return this;
    }

    render() {

        return (
            <React.Fragment>
                <InvoiceHeader/>
            </React.Fragment>
        );
    }
}

class InvoiceHeader extends Invoice {
        constructor(props) {
            super(props);
        }
        render() {

            return (
                <fieldset title="INVOICE-REVISION" label="INVOICE-REVISION">
                    <div class="pull-left col-md-3">
                        <div class="invoice_data">
                            <div class="pull-left">
                                <label> "Invoice #" </label>
                            </div>
                            <div class="pull-left">
                                {this.revision.invoice_number}
                            </div>
                        </div>

                        <div class="invoice_data">
                            <div class="pull-left">
                                <label> "Invoice #" </label>
                            </div>
                            <div class="pull-left">
                                {this.revision.invoice_number}
                            </div>
                        </div>

                        <div class="invoice_data">
                            <div class="pull-left">
                                <label> "Date" </label>
                            </div>
                            <div class="pull-left">
                                {this.revision.date}
                            </div>
                        </div>

                        <div class="invoice_data">
                            <div class="pull-left">
                                <label> "Due Date" </label>
                            </div>
                            <div class="pull-left">
                                {this.revision.due_date}
                            </div>
                        </div>

                        <div class="invoice_data">
                            <div class="pull-left">
                                <label> "Terms" </label>
                            </div>
                            <div class="pull-left">
                                {this.revision.terms}
                            </div>
                        </div>
                    </div>
                    <div class="pull-left col-md-6">
                        <h2> Bill to </h2>
                            {this.billing_information.address}
                            <br/>
                            {this.billing_information.phone}
                            <br/>
                            {this.billing_information.name}
                    </div>
                    <div class="pull-left col-md-3">
                        <h2> New Balance upone Re-booking </h2>
                            {this.balance}
                    </div>

                </fieldset>
            );
    }
}

export default Invoice;
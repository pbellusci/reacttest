import React, { Component } from 'react';

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
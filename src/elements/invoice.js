import React, { Component } from 'react';
export default class Invoice extends React.Component {

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

        this.overview = {
            status: 'V Active',
            method: 'Multimodal',
            capacity: 'LCL',
            drayage: 'Pickup, Delivery',
            incoterms: 'FOB',
            service_options: 'Deconsolidations, Custom Clearence',
            hazardous: 'Lithium Batteries, Hazmat, Other'
        }

    }

    render() {

        return (
            <React.Fragment>
                <InvoiceHeader/>
                <InvoiceBody/>
                <InvoiceOverview/>
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
            <div class="col-centered col-xs-12 col-md-12 col-lg-12">
                <div class="pull-left col-md-3 col-xs-6 col-lg-3">
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
                <div className="pull-left col-md-6 col-xs-6 col-lg-6">
                    <h2> Bill to </h2>
                    {this.billing_information.address}
                    <br/>
                    {this.billing_information.phone}
                    <br/>
                    {this.billing_information.name}
                </div>
                <div className="pull-left col-md-3 col-xs-6 col-lg-3">
                    <h2> New Balance upone Re-booking </h2>
                    {this.balance}
                </div>

            </div>
        );
    }
}

class InvoiceBody extends Invoice {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="col-centered col-xs-12 col-md-12 col-lg-12">
                <div class="row">
                    <div class="col-right col-xs-12 text-right">
                        <nav>
                            <button>Diagram</button>
                            <button>Map</button>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div className="text-center col-xs-12 col-md-12">
                        <h2>Text</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <ul class="list-inline">
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                            <li>
                                <i> F1 </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class InvoiceOverview extends Invoice {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div class="col-centered col-xs-12 col-md-12 col-lg-12">
                <div class="pull-left col-md-6">

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Status
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.status}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Method
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.method}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Capacity
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.capacity}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Drayage
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.drayage}
                        </div>
                    </div>

                </div>
                <div class="pull-left col-md-6">

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Incoterms
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.incoterms}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Service Options
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.service_options}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-md-6 pull-left text-left">
                            Hazardous or forbidden commodities
                        </div>
                        <div class="col-xs-6 col-md-6 pull-left text-right">
                            {this.overview.hazardous}
                        </div>
                    </div>

                </div>
                <div class="pull-left col-md-6">
                </div>
            </div>
        );
    }
}
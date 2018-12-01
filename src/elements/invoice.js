import React, { Component } from 'react';
import mapImage from '../map.png';

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
                <section>
                    <InvoiceHeader/>
                </section>
                <section>
                    <InvoiceBody/>
                </section>
                <section>
                    <InvoiceOverview/>
                </section>
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
            <div className="col-centered col-xs-12 col-md-12 col-lg-12">
                <div className="row">
                    <h4> Invoice  S10120392 </h4>
                </div>
                <div className="row white-content">
                    <b> INVOICE - REVISION </b>
                </div>
                <div className="row white-content">
                    <div className="float-left col-md-4 col-xs-12 col-lg-4">

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Invoice #
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.revision.invoice_number}
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Date
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.revision.date}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Due Date
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.revision.due_date}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Terms
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.revision.terms}
                            </div>
                        </div>
                    </div>
                    <div className="float-left col-md-4 col-xs-6 col-lg-4 middle-content">
                        <h4> Bill to </h4>
                        {this.billing_information.address}
                        <br/>
                        {this.billing_information.phone}
                        <br/>
                        {this.billing_information.name}
                    </div>
                    <div className="float-left col-md-4 col-xs-12 col-lg-4">
                        <h4> New Balance upone Re-booking </h4>
                        {this.balance}
                    </div>
                </div>
            </div>
        );
    }
}

class InvoiceBody extends Invoice {
    constructor(props){
        super(props);
        this.state = {
            mapActive: false
        };
    }

    toggleMapView(event) {
        var state = event.target.getAttribute('data-type') == 'diagram' ? false : true;
        this.setState({
            mapActive: state
        })
        console.log(this.state.mapActive)
    }

    render() {

        return (
            <div className="col-centered col-xs-12 col-md-12 col-lg-12">
                <br/>
                <div className="row">
                    <div className="float-right col-xs-12 col-md-12 col-lg-12 text-right">
                        <button type="button" data-type="diagram" className="btn btn-light border-grey" onClick={this.toggleMapView.bind(this)}>Diagram</button>
                        <button type="button" data-type="map" className="btn btn-light border-grey" onClick={this.toggleMapView.bind(this)}>Map</button>
                    </div>
                    <div className="text-center col-xs-12 col-md-12">
                        <h5>Text</h5>
                    </div>
                </div>
                <div className="row white-content">
                    <div class="col-lg-12 col-md-12 col-xs-12">

                        <div className={this.state.mapActive ? 'map-text-content' : 'map-text-content d-none'}>
                            <div id="map-wrapper" className="col-xs-12 col-lg-12">
                                <div id="map" className="col-xs-12 col-lg-5 col-centered">
                                    <img src={mapImage} alt="map" title="map"/>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.mapActive ? 'text-content d-none' : 'text-content'}>
                            <div className="col-xs-12 col-md-12">
                                <ul className="col-xs-12 col-md-6 col-centered">
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                    <li className="list-inline-item  circle">
                                        <i> <i className="fas fa-industry"></i> </i>
                                    </li>
                                </ul>
                            </div>
                        </div>

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
            <div className="col-xs-12 col-md-12 col-lg-12 white-content float-left">
                <div className="col-lg-12 float-left">
                    <div className="float-left col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Status
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.status}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Method
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.method}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Capacity
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.capacity}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Drayage
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.drayage}
                            </div>
                        </div>
                    </div>
                    <div className="float-left col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Incoterms
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.incoterms}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Service Options
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.service_options}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-md-6 float-left text-left">
                                Hazardous or forbidden commodities
                            </div>
                            <div className="col-xs-6 col-md-6 float-left text-right">
                                {this.overview.hazardous}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
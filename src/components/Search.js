import React from 'react';

import { connect } from 'react-redux';
import fetchCitiesAction from "../actions/fetchCities";
import { bindActionCreators } from 'redux';
import {
    CitiesPending,
    CitiesSuccess,
    CitiesError
} from "../reducers/data";
import debounce from 'lodash.debounce';
import Suggestions from "./Suggestion";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
        // Added for debounce feature
        this.sendTextChange = debounce(this.sendTextChange, 1000);
    }

    sendTextChange = (text) => {
        const { fetchCities } = this.props;
        fetchCities(text);
    };

    handleInputChange = (e) => {
        if (e.target.value !== '') {
            this.sendTextChange(e.target.value.trim())
        }
    }

    componentDidMount() {
        const { fetchCities } = this.props;
        // Fetch Cities Intially
        fetchCities('');
    }

    // Search box onchange event
    handleClickEvent = (e) => {
        const selVal = e.currentTarget.innerText;
        this.setState({ selectedValue: selVal })
    }

    render() {
        const { cities, pending } = this.props;

        // when there is a loading component is loaded
        if (pending.pending) {
            return <div>Fetching Results...</div>;
        }

        return (

            <form>
                <input
                    id="test-email"
                    placeholder="From"
                    className="search-from form-control"
                    ref={input => this.search = input}
                    F
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputChange}
                />
                <Suggestions handleClick={this.handleClickEvent} results={cities.cities} />
                <input
                    id="test-email1"
                    placeholder="To"
                    className="search-to form-control"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputChange}
                />

            </form>

        );
    }
}

const mapStateToProps = state => ({
    error: CitiesError(state),
    pending: CitiesPending(state),
    cities: CitiesSuccess(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchCities: fetchCitiesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
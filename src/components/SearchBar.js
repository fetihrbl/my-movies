import React from "react";

class SearchBar extends React.Component {

    

    handleFormSubmit = (event) => {
        event.preventDefault();
    }


    render(){

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-2">
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Search a movie" 
                        onChange={this.props.searchQueryProp}
                        >                 
                        </input>
                    </div>
                </div>
            </form>
        )
    }

}

export default SearchBar;

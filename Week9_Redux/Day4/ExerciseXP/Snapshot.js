import React from "react";
import { connect } from "react-redux";
import { requestPhotos, searchPhoto } from '../../Redux/action';
import './Snapshot.css';


class Snapshot extends React.Component {
    clickme = (e) => {
        const { fetchPhotos, photoof } = this.props;
        const value = e.target.value;
        if (!photoof && !value) {
            alert('please enter data!')
        } else if (value) {
            fetchPhotos(value);
        } else {
            fetchPhotos(photoof);
        }
    }
    componentDidMount() {
        this.props.fetchPhotos('sea',4);

    }
    render() {
        const { receivphotos, searchfor } = this.props

        return (
            <div className="imageboard">
                <nav>
                    <input className="searchinput" type='text' onChange={(e) => searchfor(e.target.value)} placeholder='type to search for photos' />
                    <button onClick={this.clickme}>CLICK</button>
                    <div className="subjects">
                        <input type='text' value='ETHIOPIA' readOnly onClick={this.clickme} />
                        <input type='text' value='NBA' readOnly onClick={this.clickme} />
                        <input type='text' value='HIP-HOP' readOnly onClick={this.clickme} />
                        <input type='text' value='NATURE' readOnly onClick={this.clickme} />
                    </div>
                </nav>
                <div className="gallery">
                    {receivphotos.map(photo => {
                        return (
                            <div className="image" key={photo.id}>
                                <img src={photo.src.medium} alt={photo.alt} />
                                <div >
                                    <p> 📸 BY :<a href={photo.photographer_url}>{photo.photographer}</a></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        receivphotos: state.photosarr,
        photoof: state.searchphotoof
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchfor: (e) => dispatch(searchPhoto(e)),
        fetchPhotos: (text, num) => dispatch(requestPhotos(text, num)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Snapshot);
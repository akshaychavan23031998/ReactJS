const RestaurantCard = (props) => {
    // console.log(props);
    return (
        <div className='res-card'>
            <h3> {props.resto} </h3>
            <img className='food-img' src='https://b.zmtcdn.com/data/dish_photos/274/aff4a71d82db51982138730919622274.png' />
            <h4> {props.dish} </h4>
            <h4> {props.stars} </h4>
            <h4> {props.time} </h4>
        </div>
    );
};


export const PramotedRestaurantCard = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label> Pramoted </label>
                <RestaurantCard/>
            </div>
        );
    };
};
export default RestaurantCard;
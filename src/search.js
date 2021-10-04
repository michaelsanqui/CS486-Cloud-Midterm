import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search raiding
                </span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="I can't hear you, I'm parsing."
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

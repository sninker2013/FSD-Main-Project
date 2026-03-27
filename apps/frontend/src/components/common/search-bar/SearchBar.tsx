import "./searchBar.css"


export function SearchBar({searchValue, messages, handleSearchChange, handleSubmit}
    : {
        searchValue: string, 
        messages: string[],
        handleSearchChange: (newValue: string) => void,
        handleSubmit: () => void
    }) {
    return(
        <form className="search-form">
            <input type="text" 
                name="field-term" 
                placeholder="Enter a game" 
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
            { messages?.map((message, index) => 
                <div 
                    className="error"
                    key={index}
                >
                    {message}
                </div>
            )}
            <button onClick={e => {
                e.preventDefault();
                 handleSubmit()
                }}>
                    Search
            </button>
        </form>
    );
}
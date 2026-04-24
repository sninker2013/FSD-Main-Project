export function FriendSearchBar({
    searchValue,
    messages,
    handleSearchChange
}: {
    searchValue: string;
    messages: string[];
    handleSearchChange: (newValue: string) => void;
}) {
    return (
        <div className="search-form">
            <label htmlFor="friend-search">Search friends</label>

            <input
                id="friend-search"
                type="text"
                name="field-term"
                placeholder="Enter a friend"
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />

            {messages.map((message, index) => (
                <div className="error" key={index}>
                    {message}
                </div>
            ))}
        </div>
    );
}
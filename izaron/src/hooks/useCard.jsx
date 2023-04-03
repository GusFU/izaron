export const useCard = () => {
    const renderCard = (text) => {
        return (
            <div>
                <p>{text}</p>
            </div>
        );
    };
    return { renderCard };
}
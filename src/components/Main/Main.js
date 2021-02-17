import PropTypes from "prop-types";

const Main = ({children}) => (
    <main className={"main"}>
        {children}
    </main>
);

Main.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Main;
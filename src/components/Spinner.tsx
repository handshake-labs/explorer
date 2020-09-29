import "./Spinner.css";

const Spinner: React.FC = () => (
  <div styleName="spinner">
    <div styleName="sk-fold">
      <div styleName="sk-fold-cube"></div>
      <div styleName="sk-fold-cube"></div>
      <div styleName="sk-fold-cube"></div>
      <div styleName="sk-fold-cube"></div>
    </div>
  </div>
);
export default Spinner;

import { useNavigate } from 'react-router-dom';
import './goBackToPortfolioButton.css';
import { TiArrowBackOutline } from 'react-icons/ti';

function GoBackToPortfolioButton() {
  let navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/Pet-Projects-Portfolio')}
      className="btn btn-go-back btn-go-back-style">
      <TiArrowBackOutline className="icon-style" /> Go back
    </button>
  );
}
export default GoBackToPortfolioButton;

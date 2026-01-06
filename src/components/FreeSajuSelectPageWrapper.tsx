import { useParams, useNavigate } from 'react-router-dom';
import FreeSajuSelectPage from './FreeSajuSelectPage';

export default function FreeSajuSelectPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <FreeSajuSelectPage
      productId={id || ''}
      onBack={() => navigate(`/product/${id}`)}
    />
  );
}

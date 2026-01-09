import { useParams, useNavigate, useLocation } from 'react-router-dom';
import FreeSajuSelectPage from './FreeSajuSelectPage';

export default function FreeSajuSelectPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ⭐ ProductDetailPage에서 전달받은 prefetched 데이터
  const prefetchedMySaju = location.state?.prefetchedMySaju || null;

  return (
    <FreeSajuSelectPage
      productId={id || ''}
      onBack={() => navigate(`/product/${id}`)}
      prefetchedMySaju={prefetchedMySaju}
    />
  );
}

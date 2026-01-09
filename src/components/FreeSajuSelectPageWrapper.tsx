import { useParams, useNavigate, useLocation } from 'react-router-dom';
import FreeSajuSelectPage from './FreeSajuSelectPage';

export default function FreeSajuSelectPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ⭐ BirthInfoPage에서 전달받은 전체 사주 레코드 배열
  const prefetchedSajuRecords = location.state?.prefetchedSajuRecords || null;
  // ⭐ ProductDetailPage에서 전달받은 단일 사주 레코드 (하위 호환)
  const prefetchedMySaju = location.state?.prefetchedMySaju || null;

  return (
    <FreeSajuSelectPage
      productId={id || ''}
      onBack={() => navigate(`/product/${id}`)}
      prefetchedSajuRecords={prefetchedSajuRecords}
      prefetchedMySaju={prefetchedMySaju}
    />
  );
}

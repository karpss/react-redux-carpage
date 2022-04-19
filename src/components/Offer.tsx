import React, {useEffect} from 'react';
import {
  useCustomAppDispatch,
  useCustomAppSelector,
} from '../hooks/typeManagementHook';
import {fetchOffers} from '../store/offers.actions';
import './Offer.css';

const Offer: React.FC = () => {
  const dispatch = useCustomAppDispatch();
  const alloffers = useCustomAppSelector((state) => state.offers.all_offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const getImageFallback = (e: React.FormEvent<HTMLImageElement>): void => {
    e.currentTarget.src =
      'https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg';
  };

  return (
    <>
      <div className="container">
        {alloffers.map((offr) => (
          <div className="card" key={offr.id}>
            <img
              src={offr.splashImages ? offr.splashImages[0].narrowMedium : ''}
              alt="Cars"
              onError={getImageFallback}
            />

            <p>{offr.description}</p>

            <p>EUR {offr.prices.basePrice.amount.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Offer;

import FormInput from "../FormInput";

const CardPaymentDetails = ({ register, errors }) => (
    <div className="space-y-4">
      <FormInput placeholder="Card Number" {...register('cardNumber')} error={errors.cardNumber} />
      <div className="grid grid-cols-2 gap-4">
        <FormInput placeholder="Expiry (MM/YY)" {...register('expiry')} error={errors.expiry} />
        <FormInput placeholder="CVV" {...register('cvv')} error={errors.cvv} />
      </div>
    </div>
  );
  export default CardPaymentDetails;
  
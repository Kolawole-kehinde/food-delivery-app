const PaymentMethodSelector = ({ register, setPaymentMethod, setValue, errors }) => (
    <div className="space-y-2">
      {['card', 'paypal', 'cod'].map((method) => (
        <label key={method} className="flex items-center gap-2">
          <input
            type="radio"
            value={method}
            {...register('payment')}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setValue('payment', e.target.value, { shouldValidate: true });
            }}
          />
          <span className="capitalize">{method === 'cod' ? 'Cash on Delivery' : method}</span>
        </label>
      ))}
      {errors.payment && <p className="text-sm text-red-500">{errors.payment.message}</p>}
    </div>
  );


  export default PaymentMethodSelector;
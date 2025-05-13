import FormInput from "../FormInput";
import CardPaymentDetails from "./CardPaymentDetails";
import PaymentMethodSelector from "./PaymentMethodSelector";

const CheckoutForm = ({ register, handleSubmit, onSubmit, errors, paymentMethod, setPaymentMethod, setValue, isLoading, isValid }) => (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-2xl shadow-md lg:col-span-2">
      <h2 className="text-xl font-semibold">Shipping Info</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput placeholder="First Name" {...register('firstName')} error={errors.firstName} />
        <FormInput placeholder="Last Name" {...register('lastName')} error={errors.lastName} />
      </div>
      <FormInput placeholder="Email Address" {...register('email')} error={errors.email} />
      <FormInput placeholder="Phone Number" {...register('phone')} error={errors.phone} />
      <FormInput placeholder="Street Address" {...register('address')} error={errors.address} />
      <div className="grid md:grid-cols-3 gap-4">
        <FormInput placeholder="City" {...register('city')} error={errors.city} />
        <FormInput placeholder="State" {...register('state')} error={errors.state} />
        <FormInput placeholder="Zip Code" {...register('zip')} error={errors.zip} />
      </div>
  
      <h2 className="text-xl font-semibold">Payment</h2>
      <PaymentMethodSelector
        register={register}
        setPaymentMethod={setPaymentMethod}
        setValue={setValue}
        errors={errors}
      />
  
      {paymentMethod === 'card' && <CardPaymentDetails register={register} errors={errors} />}
  
      <button
        type="submit"
        disabled={!isValid || isLoading}
        className={`w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 ${!isValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Placing Order...' : 'Submit Order'}
      </button>
    </form>
  );
  export default CheckoutForm 
  
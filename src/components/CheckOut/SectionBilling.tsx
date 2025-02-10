import ContactForm from "../Contact/ContactForm";

const SectionBilling = () => {
  return (
    <div className="flex border border-blue-500">
      <div className="flex flex-col p-8 w-1/2">
        <h1 className="text-4xl font-bold pb-6">Billing details</h1>
        <div className="flex gap-4 mb-4">
          <ContactForm hidthForm="75" placeholder="" title="First Name" weightForm="211" />
          <ContactForm hidthForm="75" placeholder="" title="Last Name" weightForm="211" />
        </div>
        <ContactForm hidthForm="75" placeholder="" title="Company Name (Optional)" weightForm="" />
        <ContactForm hidthForm="75" placeholder="" title="ZIP code" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="" title="Country / Region" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="" title="Street address" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="" title="Town / City" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="" title="Province" weightForm="453"/>
        <ContactForm hidthForm="75" placeholder="" title="Add-on address" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="" title="Email address" weightForm="453" />
        <ContactForm hidthForm="75" placeholder="Additional information" title="" weightForm="453" />
      </div>
      <div className="w-1/2 flex-1 p-20">
        <h1 className="text-xl font-bold mb-4">Product</h1>
        <div className="flex justify-between py-2">
          <span>Subtotal</span>
          <span>Rs. 260,000.00</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Total</span>
          <span className="text-orange-500 font-bold">Rs. 260,000.00</span>
        </div>
        <div className="py-4">
          <input type="radio" id="bank" name="payment" value="bank" className="form-radio accent-black"/>
          <label htmlFor="bank" className="pl-2">Direct Bank Transfer</label>
          <p className="text-sm text-gray-600 pl-6">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
          </p>
        </div>
        <div className="py-4">
          <input type="radio" id="cod" name="payment" value="cod" className="form-radio accent-black" />
          <label htmlFor="cod" className="pl-2">Cash on Delivery</label>
        </div>
        <p className="text-sm text-gray-600 py-4">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>
        <button className="w-1/2 mt-4 py-2 font-bold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white bg-white border border-[#B88E2F] rounded-lg">
          Place order
        </button>
      </div>
    </div>
  );
};

export default SectionBilling;
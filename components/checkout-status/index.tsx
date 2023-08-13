/**
 * Props for the CheckoutStatus component.
 */
type CheckoutStatusProps = {
  /** The current step in the checkout process. */
  step: string;
};

/**
 * Displays the status of the checkout process with icons for different steps.
 *
 * @param {CheckoutStatusProps} props - The props for the component.
 * @returns {JSX.Element} The CheckoutStatus component.
 */
const CheckoutStatus = ({ step }: CheckoutStatusProps) => {
  return (
    <div className="checkout-status">
      <ul className="checkout-steps">
        {/* Display the cart step with appropriate icon and class. */}
        <li className={`${step === 'cart' ? 'active' : 'done'}`}>
          <i className="icon-cart"></i>
        </li>
        
        {/* Display the checkout step with appropriate icon and class. */}
        <li className={`${step === 'checkout' ? 'active' : 'done'}`}>
          <i className="icon-delivery"></i>
        </li>
      </ul>
    </div>
  );
};

// Export the CheckoutStatus component as the default export.
export default CheckoutStatus;

import useLockBodyScroll from "../hooks/useLockBodyScroll";

export default function Modals({
  productOpen,
  onCloseProduct,
  onCheckout,
  successOpen,
  onCloseSuccess,
}) {
  useLockBodyScroll(productOpen || successOpen);

  return (
    <>
      <div
        className={`modal ${productOpen ? "active" : ""}`}
        id="productModal"
        onClick={(e) => {
          if (e.target.classList.contains("modal")) onCloseProduct();
        }}
      >
        <div className="modal-content">
          <button
            className="modal-close"
            id="modalClose"
            onClick={onCloseProduct}
          >
            <i className="fas fa-times"></i>
          </button>
          <h3 className="modal-title">Product Added to Cart</h3>
          <p>
            Your selected product has been added to your cart. Would you like to
            continue shopping or proceed to checkout?
          </p>
          <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
            <a
              href="#products"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                onCloseProduct();
              }}
            >
              Continue Shopping
            </a>
            <a
              href="#"
              className="btn"
              id="checkoutBtn"
              onClick={(e) => {
                e.preventDefault();
                onCheckout();
              }}
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>

      <div
        className={`modal ${successOpen ? "active" : ""}`}
        id="successModal"
        onClick={(e) => {
          if (e.target.classList.contains("modal")) onCloseSuccess();
        }}
      >
        <div className="modal-content">
          <button
            className="modal-close"
            id="successModalClose"
            onClick={onCloseSuccess}
          >
            <i className="fas fa-times"></i>
          </button>
          <div style={{ textAlign: "center", padding: 20 }}>
            <i
              className="fas fa-check-circle"
              style={{
                fontSize: "4rem",
                color: "var(--secondary)",
                marginBottom: 20,
              }}
            ></i>
            <h3 className="modal-title">Request Submitted!</h3>
            <p>
              Thank you for contacting Tech Hub Solutions. We've received your
              request and will get back to you within 24 hours.
            </p>
            <button
              className="btn"
              id="successModalBtn"
              style={{ marginTop: 20 }}
              onClick={onCloseSuccess}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
